# Personal Portfolio

> Modern, secure personal portfolio SPA showcasing projects, experience, skills, and achievements — built with React, Vite, and enterprise-grade security.

## Overview

A professional single-page portfolio application featuring:
- **Interactive UI** with smooth animations and responsive design
- **Contact Form** with email integration via Nodemailer
- **Certificate Viewer** with modal lightbox for awards and achievements
- **Security Features** including rate limiting and anti-spam protection
- **SEO Optimized** with security headers and best practices

## ✨ Features

### Core Sections
- 🏠 **Home** - Hero section with animated background
- 👤 **About** - Professional background and highlights
- 💼 **Experience** - Career timeline with company details
- 🚀 **Projects** - Portfolio of work with filtering and tech stack
- 🤝 **Clients** - Client showcase with industry stats
- 🛠️ **Skills** - Technical proficiency with visual progress indicators
- 🎓 **Education** - Academic background and certifications
- 🏆 **Personal Space** - Awards, achievements, and creative pursuits
- 🌍 **Countries Timeline** - Interactive travel experience map
- 📧 **Contact** - Secure contact form with real-time validation

### Security Features
- 🛡️ **Rate Limiting** - 3 submissions per 15 minutes per IP
- 🍯 **Honeypot Protection** - Blocks 90%+ of automated spam bots
- 🔒 **Security Headers** - CSP, HSTS, X-Frame-Options, Referrer-Policy
- ✅ **Input Validation** - Client-side and server-side validation
- 🚫 **XSS Protection** - Content Security Policy without unsafe directives

### Additional Features
- 📜 **Certificate Modal** - View Guinness World Record and Asian Book certificates
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🎨 **Smooth Animations** - Framer Motion for engaging interactions
- ⚡ **Fast Performance** - Optimized builds with Vite
- 🌐 **Social Integration** - LinkedIn, GitHub, Facebook, WhatsApp links

## Recent Changes (Jan 2026)

- **Safari / WebKit compatibility fixes:** Replaced a few browser-incompatible patterns and hardened date handling to prevent a RangeError in WebKit/Safari.
   - Replaced nullish coalescing fallback (`??`) with logical-or (`||`) in `src/components/ui/FeatureItem.jsx` for broader compatibility.
   - Replaced 8‑digit hex color usage with a `hexToRgba()` helper in `src/components/sections/Skills.jsx` to avoid older Safari hex-alpha parsing issues.
   - Fixed an invalid date (November 31 → November 30) in `src/components/sections/Experience.jsx` and added robust parsing/validation in experience date formatters (`Experience.jsx`, `ExperienceDetails.jsx`).

- **Dev / Debug cleanup:** Removed and sanitized temporary Playwright debug helpers (`scripts/playwright-webkit-log.*`) and removed verbose console logging used during debugging.

- **Verification:** The site was validated in headless WebKit (Playwright) to reproduce and confirm the fix for the blank page / RangeError.

If you deploy or run locally and still see issues in Safari, run the dev server and check the browser console or use BrowserStack/ngrok to test on a real Safari instance.

## Tech Stack

## Tech Stack

### Frontend
- **Framework:** React 18 with Vite for fast HMR and optimized builds
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Animations:** Framer Motion for smooth, performant animations
- **Icons:** Lucide React, React Icons
- **Utilities:** date-fns for date formatting

### Backend & API
- **Runtime:** Node.js with Express server
- **Email Service:** Nodemailer with SMTP configuration
- **Security:** CORS, Rate Limiting, Honeypot validation
- **Environment:** dotenv for configuration management

### Deployment & DevOps
- **Hosting:** Vercel (Frontend + Serverless Functions)
- **Version Control:** Git & GitHub
- **CI/CD:** Automatic deployments via Vercel
- **Security Headers:** Configured via `vercel.json`

(Full dependencies listed in `package.json`)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/sat33shgit/Portfolio.git
cd Portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:
```env
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
TO_EMAIL=recipient@example.com

# Optional
NODE_ENV=development
VITE_API_URL=http://localhost:3001
```

4. **Run development servers:**

Frontend (Vite):
```bash
npm run dev
```

Backend API (Express - for local testing):
```bash
npm run server
```

Quick check in WebKit (Playwright):
```bash
npx playwright open http://localhost:5173 --browser=webkit
```

5. **Build for production:**
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── api/
│   └── send-email.js          # Vercel serverless function for contact form
├── public/                     # Static assets
├── server/
│   └── index.js               # Express server (local development)
├── src/
│   ├── assets/
│   │   ├── Awards/            # Certificate images
│   │   ├── Certifications/    # Certification icons
│   │   ├── countries/         # Country flags
│   │   ├── Educations/        # Education institution logos
│   │   └── Projects/          # Project screenshots
│   ├── components/
│   │   ├── sections/          # Page sections (About, Projects, etc.)
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── PersonalSpace.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Textarea.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Logo.jsx
│   ├── data/
│   │   └── sampleData.js      # Portfolio data
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── .env                        # Environment variables (not in repo)
├── package.json               # Dependencies and scripts
├── tailwind.config.cjs        # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── vercel.json                # Vercel deployment & security headers
```

## 🔒 Security Implementation

### Rate Limiting
- **Mechanism:** IP-based tracking with in-memory store
- **Limit:** 3 contact form submissions per 15 minutes
- **Response:** 429 status with retry-after time
- **Auto-cleanup:** Expired records removed every 5 minutes

### Honeypot Protection
- **Implementation:** Hidden "website" field in contact form
- **Detection:** Client-side and server-side validation
- **Result:** Blocks automated bots without user friction
- **Effectiveness:** 90%+ spam prevention

### Security Headers (via `vercel.json`)
```json
{
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": "default-src 'self'; script-src 'self'; ..."
}
```

## 📧 Email Configuration

The contact form uses Nodemailer with SMTP. For Gmail:

1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use App Password in `SMTP_PASS` environment variable

**Vercel Deployment:**
Set environment variables in Vercel Dashboard → Project Settings → Environment Variables

## 🎨 Customization

### Update Personal Information
Edit `src/data/sampleData.js` to customize:
- Projects
- Work experience
- Skills and proficiencies
- Client information
- Certifications

### Modify Styling
- **Colors:** Update Tailwind config in `tailwind.config.cjs`
- **Fonts:** Modify `src/index.css`
- **Animations:** Adjust Framer Motion props in components

### Add New Sections
1. Create component in `src/components/sections/`
2. Import in `App.jsx`
3. Add navigation link in `Header.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository:**
   - Import project from GitHub in Vercel dashboard
   - Select the repository

2. **Configure build settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Set environment variables:**
   - Add all SMTP variables from `.env`
   - Set `NODE_ENV=production`

4. **Deploy:**
   - Automatic deployments on push to `main` branch
   - Preview deployments for pull requests

### Other Platforms
The app can be deployed to:
- Netlify
- GitHub Pages (with GitHub Actions)
- AWS Amplify
- Railway

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** Optimized with code splitting

## 🛠️ Development Scripts

```bash
npm run dev          # Start Vite dev server (port 5173)
npm run server       # Start Express API server (port 3001)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sateesh Kumar Boggarapu**
- Website: [sateeshsketches.com](https://www.sateeshsketches.com)
- LinkedIn: [boggarapusateeshkumar](https://www.linkedin.com/in/boggarapusateeshkumar/)
- GitHub: [sat33shgit](https://github.com/sat33shgit)
- Email: bsateeshk@gmail.com

## 🙏 Acknowledgments

- React & Vite communities
- Tailwind CSS team
- Framer Motion for animations
- All open-source contributors

---

**Note:** This portfolio showcases real projects and achievements. Certificate images and client information are authentic and verifiable.
