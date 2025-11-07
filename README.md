# REEF Energy Management - Landing Page

Modern landing page built with React, Vite, and Express. Features contact form integration with SendGrid and Google Tag Manager tracking.

## 📁 Project Structure

```
sel-lp/
├── frontend/           # React + Vite application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Dependencies
│
├── backend/            # Express API server
│   ├── server.js      # API endpoints
│   └── .env.example   # Environment template
│
├── package.json        # Root scripts
└── vercel.json        # Deployment config
```

## 🚀 Quick Start

```bash
# 1. Install Node.js 24.9.0
nvm use

# 2. Install frontend dependencies
cd frontend
yarn install
cd ..

# 3. Configure environment variables (see below)

**Servers:**
- **Frontend:** http://localhost:8080
- **Backend:** http://localhost:3001

## 🔧 Environment Variables

### Backend (`backend/.env.local`)
```bash
SENDGRID_API_KEY=your_sendgrid_key
TO_EMAIL=destination@example.com
FROM_EMAIL=verified-sender@example.com
PORT=3001
```

### Frontend (`frontend/.env.local`)
```bash
VITE_GTM_ID=GTM-XXXXXXX
```

**Setup:**
```bash
# Backend
cd backend
cp .env.example .env.local
# Edit .env.local with your credentials

# Frontend
cd ../frontend
cp .env.example .env.local
# Edit .env.local with your GTM ID
```

## 📦 Available Scripts

From frontend directory:

```bash
cd frontend

# Development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

From backend directory:

```bash
cd backend

# Start API server
node server.js
```

## 📚 Detailed Documentation

Each folder has its own README with detailed instructions:

- **[Frontend README](./frontend/README.md)** - React app, components, and build process
- **[Backend README](./backend/README.md)** - API endpoints and configuration

## 🌐 Deployment

Configured for Vercel with `vercel.json`:

```bash
# Build command
cd frontend && yarn install && yarn build

# Output directory
frontend/dist
```

Set environment variables in your hosting platform dashboard.

## 🐛 Common Issues

**Port 3001 in use:**
```bash
lsof -ti:3001 | xargs kill -9
```

**SendGrid 403 error:**
- Verify sender email at [SendGrid Dashboard](https://app.sendgrid.com/settings/sender_auth)

**Environment variables not loading:**
- Frontend: Restart dev server after changing `.env.local`
- Backend: Ensure file is named `.env.local` or `.env` in `/backend` folder

---

**Tech Stack:** React 18 · Vite 5 · Express · SendGrid · Tailwind CSS · shadcn/ui
