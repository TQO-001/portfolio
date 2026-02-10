# Thulani Langa — Portfolio

> IT Engineer | Full-Stack Developer | Network Technician  
> KwaZulu-Natal, South Africa · [laughtale.co.za](https://laughtale.co.za)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| ORM | Prisma |
| Database | SQLite |
| Fonts | Outfit (Google Fonts) |
| Icons | Lucide React + React Icons |
| Email | Nodemailer (SMTP) |
| Server | VPS · Nginx · PM2 |

---

## Pages

- **/** — Home: hero, tech stack, active deployments, certifications
- **/about** — Bio, timeline, blog link (coming soon), interests
- **/projects** — Full project directory with live/WIP/archived status
- **/contact** — Functional contact form (emails via SMTP) + CV download

---

## Local Dev

```bash
# Install dependencies
npm install

# Start dev server (port 10001)
npm run dev
```

Open [http://localhost:10001](http://localhost:10001)

---

## Contact Form Setup

The contact form uses Nodemailer to send emails via SMTP. You need to configure environment variables.

### 1. Install nodemailer

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

### 2. Create `.env.local`

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Where contact form emails get delivered
CONTACT_TO=thulanilanga001@gmail.com
```

### Gmail Setup (recommended for free tier)

1. Go to Google Account → Security → 2-Step Verification (enable it)
2. Search "App passwords" → Create one for "Mail"
3. Use that 16-character password as `SMTP_PASS`
4. Set `SMTP_USER` to your Gmail address

> **Note:** `.env.local` is gitignored. Never commit credentials.

### Production (VPS)

Set environment variables in your server's environment or in the PM2 ecosystem file:

```bash
# On your VPS
export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=587
export SMTP_SECURE=false
export SMTP_USER=your-email@gmail.com
export SMTP_PASS=your-app-password
export CONTACT_TO=thulanilanga001@gmail.com
```

Or in `ecosystem.config.js` (PM2):

```js
module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'start',
    env: {
      SMTP_HOST: 'smtp.gmail.com',
      SMTP_PORT: '587',
      SMTP_USER: 'your-email@gmail.com',
      SMTP_PASS: 'your-app-password',
      CONTACT_TO: 'thulanilanga001@gmail.com',
    }
  }]
}
```

---

## CV File

Place your CV at `public/my-cv.pdf`. The contact page has a download button pointing to this file.

---

## Deployment

The project deploys automatically to the VPS via GitHub Actions on push to `main`.

```
push to main → GitHub Actions → build → rsync to VPS → pm2 restart
```

Required GitHub Secrets:
- `SSH_PRIVATE_KEY` — private key for `laughtale@laughtale.co.za` on port 2222

---

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Home
│   ├── about/page.tsx        # About
│   ├── projects/page.tsx     # Projects
│   ├── contact/page.tsx      # Contact
│   ├── api/
│   │   └── contact/route.ts  # Contact form API
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SplashCursor.tsx      # WebGL fluid cursor effect
│   ├── TrueFocus.tsx         # Animated heading component
│   └── ElectricBorder.tsx    # Animated canvas border
└── public/
    ├── img/pfp.jpeg
    └── my-cv.pdf             # ← add your CV here
```

---

## Certifications

- AZ-900: Microsoft Azure Fundamentals ✅
- MS-900: Microsoft 365 Fundamentals ✅  
- MD-100: Windows Client ✅
- CompTIA Network+: 🔄 In Progress (2026)

---

*"We did not learn this in school."*
