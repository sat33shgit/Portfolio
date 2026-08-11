import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { getClientIP, resolveLocation } from './_geo.js';

// Load local .env when running locally
dotenv.config();

// Rate limiting: Track IP addresses and their submission attempts
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 3; // 3 submissions per window

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) {
    // First attempt from this IP
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 };
  }

  // Check if the window has expired
  if (now > record.resetAt) {
    // Reset the window
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 };
  }

  // Check if limit exceeded
  if (record.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(ip, record);
  return { allowed: true, remaining: MAX_ATTEMPTS - record.count };
}

// Clean up old entries periodically (garbage collection).
// unref() so the timer never keeps a serverless invocation alive.
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) rateLimitStore.delete(ip);
  }
}, 5 * 60 * 1000).unref?.();

function validatePayload({ name, email, subject, message }) {
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Name is required';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Valid email is required';
  if (!subject || !subject.trim()) errors.subject = 'Subject is required';
  if (!message || !message.trim()) errors.message = 'Message is required';
  return errors;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  // Honeypot check - if 'website' field is filled, it's a bot
  const { website } = req.body || {};
  if (website && website.trim()) {
    // Honeypot detected - respond without logging to keep server logs clean
    return res.status(400).json({ 
      ok: false, 
      error: 'Spam detected',
      message: 'Your submission has been flagged as spam.'
    });
  }

  // Rate limiting check
  const clientIP = getClientIP(req);
  const rateLimit = checkRateLimit(clientIP);
  
  if (!rateLimit.allowed) {
    return res.status(429).json({ 
      ok: false, 
      error: 'Too many requests', 
      message: `Rate limit exceeded. Please try again in ${rateLimit.retryAfter} seconds.`,
      retryAfter: rateLimit.retryAfter
    });
  }

  // Quick server-side guard: ensure SMTP credentials are configured.
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    const missing = [];
    if (!process.env.SMTP_HOST) missing.push('SMTP_HOST');
    if (!process.env.SMTP_USER) missing.push('SMTP_USER');
    if (!process.env.SMTP_PASS) missing.push('SMTP_PASS');
    const msg = `SMTP environment variables missing: ${missing.join(', ')}. ` +
      'Set these in your Vercel project settings (Environment Variables) and redeploy.';
    // Return helpful message so the frontend can display it; do not leak secrets.
    return res.status(500).json({ ok: false, error: 'SMTP not configured', details: msg });
  }

  try {
    const { name, email, subject, message } = req.body || {};
    const errors = validatePayload({ name, email, subject, message });
    if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

    // Approximate sender location (City, Country) derived from their IP address.
    // Never blocks the send - falls back to 'Unknown'.
    let location = 'Unknown';
    try {
      location = await resolveLocation(req, clientIP);
    } catch {
      location = 'Unknown';
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.TO_EMAIL || process.env.SMTP_USER;

    const recipientName = 'Sateesh Boggarapu';

    // Rows rendered in order; `multiline` fields keep their line breaks.
    const fields = [
      { label: 'Full Name', value: name },
      { label: 'Email', value: email },
      { label: 'Location', value: location },
      { label: 'Subject', value: subject, multiline: true },
      { label: 'Message', value: message, multiline: true },
    ];

    const rows = fields.map(({ label, value, multiline }, i) => {
      const cellValue = value
        ? escapeHtml(value).replace(/\n/g, '<br/>')
        : 'N/A';
      const rowStyle = i === 0
        ? 'background:#fafafa;border-top:1px solid #eee;'
        : 'border-top:1px solid #eee;';
      const labelStyle = 'padding:12px 16px;font-weight:600;color:#333;' +
        (i === 0 ? 'width:38%;' : '') +
        (multiline ? 'vertical-align:top;' : '');
      return `<tr style="${rowStyle}">` +
        `<td style="${labelStyle}">${label}</td>` +
        `<td style="padding:12px 16px;color:#666;">${cellValue}</td>` +
        `</tr>`;
    }).join('');

    const htmlBody = `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f5f5; padding:24px;">
        <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
          <div style="padding:28px;color:#111;">
            <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:#111;">Hi ${recipientName},</h2>
            <p style="margin:0 0 20px;color:#333;line-height:1.5;">A message is received. Please find the message details below.</p>

            <table role="presentation" style="width:100%;border-collapse:collapse;margin-top:18px;">
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    const textBody = `Hi ${recipientName},\n\n` +
      `A message is received. Please find the message details below.\n\n` +
      fields.map(({ label, value }) => `${label}: ${value || 'N/A'}`).join('\n') +
      `\n\nNote: This is a system-generated notification. Reply to this email to respond to ${name || 'the sender'} directly.`;

    const mailOptions = {
      from: `${name} <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject: `Portfolio site: A message is received from ${name || 'website'}`,
      replyTo: email,
      text: textBody,
      html: htmlBody,
    };

    const info = await transport.sendMail(mailOptions);

    return res.status(200).json({ ok: true, messageId: info.messageId });
  } catch (err) {
    // in production don't leak error details
    if (process.env.NODE_ENV !== 'production') {
      console.error('send-email error', err);
    }
    const response = { ok: false, error: 'Server error' };
    if (process.env.NODE_ENV !== 'production') response.details = err && err.message ? err.message : String(err);
    return res.status(500).json(response);
  }
}
