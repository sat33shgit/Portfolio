const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// load local .env when running locally
dotenv.config && dotenv.config();

function validatePayload({ name, email, subject, message }) {
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Name is required';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Valid email is required';
  if (!subject || !subject.trim()) errors.subject = 'Subject is required';
  if (!message || !message.trim()) errors.message = 'Message is required';
  return errors;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
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
