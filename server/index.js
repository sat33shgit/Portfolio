import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendEmailHandler from '../api/send-email.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Needed so req.headers['x-forwarded-for'] / req.ip resolve correctly behind a proxy
app.set('trust proxy', true);
app.use(cors());
app.use(express.json());

// Delegate to the same serverless handler Vercel runs in production, so the
// dev server and production send identical emails (single source of truth).
app.post('/api/send-email', (req, res) => sendEmailHandler(req, res));

app.listen(port);
