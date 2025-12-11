dotenv.config && dotenv.config();
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// load local .env when running locally
dotenv.config && dotenv.config();

// Rate limiting: Track IP addresses and their submission attempts
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 3; // 3 submissions per window

function getClientIP(req) {
  // Get IP from various headers (Vercel/proxy aware)
  return req.headers['x-forwarded-for']?.split(',')[0].trim() ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         req.socket?.remoteAddress ||
         'unknown';
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

// Clean up old entries periodically (garbage collection)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

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
    console.log('Bot detected via honeypot field');
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

    const mailOptions = {
      from: `${name} <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject: subject || 'New contact message',
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${(message || '').replace(/\n/g, '<br/>')}</p>`,
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
};
