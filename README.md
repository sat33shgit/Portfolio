# Personal Portfolio

> Modern personal portfolio SPA showcasing projects, experience and contact — built with React and Vite.

## Overview

This repository contains a single-page portfolio application built with React, Vite and Tailwind CSS. It includes a small Node/Express server used for the contact/email API.

## Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Animations / UI:** Framer Motion, React Icons, Lucide React
- **Utilities:** date-fns
- **Backend / API:** Node.js, Express
- **Email / Dev Ops:** Nodemailer, CORS, dotenv
- **Tooling:** npm, Vite dev server

(Dependencies are listed from `package.json`.)

## Quick Start (Windows `cmd.exe`)

1. Install dependencies:

```
cd "c:\Sateesh\Projects\PersonalPortfolio\Portfolio"
npm install
```

2. Run the development server:

```
npm run dev
```

3. Run the backend API server (optional, used for contact form):

```
npm run server
```

4. Build for production:

```
npm run build
npm run preview
```

## File Structure (selected)

- `src/` — React source files
- `src/components/sections/` — Page sections (Home, Clients, Projects, etc.)
- `server/` — Express server for sending email
- `public/` — Static assets

## Notes

- The Clients section was updated to use a plain background and card shadows for consistent styling.
- If you want, I can commit and push this `README.md` for you.
