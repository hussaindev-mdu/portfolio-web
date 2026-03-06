# Portfolio Web (React + Tailwind + EmailJS)

## Run locally

```bash
cd portfolio-web
npm install
npm run dev
```

## Configure resume content

Edit `src/data/resumeData.js` and replace placeholder data with your resume details.

## Configure EmailJS

1. Copy `.env.example` to `.env`
2. Fill in:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## Deploy to GitHub Pages

This project is configured for the custom domain `hussain-dev.in` with root base path and a `CNAME` file.

```bash
cd portfolio-web
npm install
npm run deploy
```
