import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

function validatePayload({ name, email, subject, message }) {
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Name is required';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Valid email is required';
  if (!subject || !subject.trim()) errors.subject = 'Subject is required';
  if (!message || !message.trim()) errors.message = 'Message is required';
  return errors;
}

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const errors = validatePayload({ name, email, subject, message });
    if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

    // Configure transport using SMTP env variables
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
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    const info = await transport.sendMail(mailOptions);

    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('send-email error', err);
    }
    const response = { ok: false, error: 'Server error' };
    if (process.env.NODE_ENV !== 'production') response.details = err && err.message ? err.message : String(err);
    return res.status(500).json(response);
  }
});

app.listen(port);
