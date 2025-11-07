# Frontend - REEF Energy Management

## 🚀 Getting Started

React application built with Vite, TypeScript, and Tailwind CSS.

### Prerequisites

## 🚀 Quick Start

- **Node.js**: ^24.9.0 (defined in `.nvmrc` and `package.json`)

```bash- **Yarn**: Recommended package manager

# Install dependencies

yarn install### Installation



# Start development server1. **Clone the repository**

yarn dev```bash

```git clone <repository-url>

cd sel-lp

**Development server:** http://localhost:8080```



## 📦 Available Scripts2. **Use the correct Node.js version**

```bash

```bashnvm use

# Development server (port 8080)```

yarn dev

3. **Install dependencies**

# Build for production```bash

yarn buildyarn install

```

# Build for development (no minification)

yarn build:dev4. **Configure environment variables**



# Preview production buildCreate a `.env.local` file in the root directory based on `.env.example`:

yarn preview

```bash

# Lint codecp .env.example .env.local

yarn lint```

```

Edit `.env.local` and add your credentials:

## 🔧 Environment Variables

```bash

Create `.env.local` file in this folder:# SendGrid API Key (get it from https://app.sendgrid.com/settings/api_keys)

SENDGRID_API_KEY=your_sendgrid_api_key_here

```bash

# Copy template# Email addresses (must be verified in SendGrid)

cp .env.example .env.localTO_EMAIL=destination@example.com

```FROM_EMAIL=sender@example.com



**Variables:**# Google Tag Manager ID (optional)

```bashVITE_GTM_ID=GTM-XXXXXXX

# Google Tag Manager ID (optional)```

VITE_GTM_ID=GTM-XXXXXXX

```**Important Setup Notes:**



**Important:** **SendGrid:**

- All frontend environment variables must start with `VITE_` prefix- Get your API key from [SendGrid Dashboard](https://app.sendgrid.com/settings/api_keys)

- Restart dev server after changing `.env.local`- Verify your sender email in [Sender Authentication](https://app.sendgrid.com/settings/sender_auth)

- Both `TO_EMAIL` and `FROM_EMAIL` must be verified in SendGrid to avoid 403 errors

## 📁 Project Structure

**Google Tag Manager (Optional):**

```- Get your GTM ID from [Google Tag Manager](https://tagmanager.google.com/)

frontend/- The GTM ID is injected into `index.html` during build via Vite

├── src/- If not set, defaults to `GTM-PRB8MJVT`

│   ├── components/          # React components

│   │   ├── ui/             # shadcn/ui components### Available Commands

│   │   ├── AboutSection.tsx

│   │   ├── CTASection.tsx  # Contact form#### Frontend Development

│   │   ├── HeroSection.tsx

│   │   └── ...```bash

│   │# Start frontend development server at http://[::]:8080

│   ├── pages/              # Page componentsyarn dev

│   │   ├── Index.tsx       # Main page

│   │   └── NotFound.tsx    # 404 page# Build for production

│   │yarn build

│   ├── hooks/              # Custom React hooks

│   ├── lib/                # Utilities# Build for development

│   ├── assets/             # Imagesyarn build:dev

│   ├── App.tsx             # Root component

│   └── main.tsx            # Entry point# Preview production build

│yarn preview

├── public/                 # Static files

├── index.html              # HTML template# Lint code

├── vite.config.ts          # Vite configurationyarn lint

└── tailwind.config.ts      # Tailwind configuration```

```

#### Backend Development (Contact Form API)

## 🎨 Tech Stack

The project includes a Node.js Express server for handling contact form submissions via SendGrid.

- **Framework:** React 18.3.1

- **Build Tool:** Vite 5.4.19```bash

- **Language:** TypeScript 5.8.3# Start backend server at http://localhost:3001

- **Styling:** Tailwind CSS 3.4.1node server.js

- **UI Components:** shadcn/ui (Radix UI primitives)```

- **Forms:** React Hook Form + Zod validation

- **Icons:** Lucide React**Running Both Frontend and Backend:**

- **Animations:** Framer Motion

- **Routing:** React Router DOMYou need to run both servers simultaneously during development:



## 🛠️ Development```bash

# Terminal 1 - Backend API

### Adding Componentsnode server.js



```bash# Terminal 2 - Frontend

# Example: Add a new shadcn/ui componentyarn dev

npx shadcn-ui@latest add button```

```

The Vite dev server (frontend) is configured to proxy `/api` requests to the backend server at `http://localhost:3001`.

### Import Aliases

**Backend Features:**

Use `@/` prefix for imports:- Email sending via SendGrid

- CORS enabled

```tsx- JSON body parsing

import { Button } from '@/components/ui/button'- Environment variables from `.env.local`

import { cn } from '@/lib/utils'- Request logging

```- Error handling with detailed SendGrid error messages



### Styling### Estrutura de Pastas



- Use Tailwind CSS utility classes```

- Use `cn()` from `@/lib/utils` for conditional classessrc/

- Custom REEF classes: `reef-hero-title`, `reef-section-title`, `reef-highlight`├── assets/              # Imagens e recursos estáticos

├── components/          # Componentes React

## 🌐 API Integration│   ├── figma/          # Componentes específicos do Figma

│   └── ui/             # Componentes UI shadcn/ui

The frontend connects to the backend API at `http://localhost:3001` via Vite proxy.├── hooks/              # Custom React hooks

├── lib/                # Utilitários (cn, etc.)

**Proxy configuration** (`vite.config.ts`):├── pages/              # Páginas da aplicação

```ts│   ├── Index.tsx       # Página principal

server: {│   └── NotFound.tsx    # Página 404

  proxy: {├── App.tsx             # Componente raiz

    '/api': {├── main.tsx            # Entry point

      target: 'http://localhost:3001',└── index.css           # Estilos globais e design system

      changeOrigin: true```

    }

  }## 🎯 Convenções de Código

}

```### Imports

- Use alias `@/` para imports do src: `@/components/ui/button`

**Contact form** (`src/components/CTASection.tsx`):

- Submits to `/api/send-email`### Componentes

- Validates with Zod schema- Functional components com TypeScript

- Shows success/error toast notifications- Export default no final do arquivo

- PascalCase para nomes de componentes

## 📦 Build for Production

### Styling

```bash- Classes Tailwind CSS

# Build- Utility `cn()` de `@/lib/utils` para merge de classes

yarn build- Classes customizadas REEF: `reef-hero-title`, `reef-section-title`, `reef-highlight`, etc.



# Output directory: dist/### TypeScript

# Preview build- TypeScript relaxado: `noImplicitAny: false`, `strictNullChecks: false`

yarn preview- Tipos explícitos onde necessário

```

## 🔧 Configuração do Vite

**Build optimization:**

- Minification and tree-shaking- **Server**: Host `::` (IPv6), porta `8080`

- CSS optimization- **Alias**: `@` aponta para `./src`

- Asset optimization- **Plugins**: React SWC, Lovable Tagger (dev only)

- Environment variables injected at build time

## 📦 Dependências Principais

## 🐛 Troubleshooting

- **UI Primitives**: @radix-ui/* (accordion, dialog, dropdown, etc.)

**"VITE_GTM_ID is not defined":**- **Form Handling**: react-hook-form + @hookform/resolvers

- Create `.env.local` file- **Validation**: zod

- Add `VITE_GTM_ID=GTM-XXXXXXX`- **Styling**: tailwindcss, tailwind-merge, clsx, class-variance-authority

- Restart dev server- **Icons**: lucide-react

- **Animations**: motion (framer-motion), tailwindcss-animate

**Cannot connect to backend:**- **Routing**: react-router-dom

- Ensure backend is running on port 3001- **State**: @tanstack/react-query

- Check proxy configuration in `vite.config.ts`- **Toast/Notifications**: sonner



**Port 8080 in use:**## 🌐 Deployment

- Change port in `vite.config.ts`: `server: { port: 8081 }`

### Frontend Deployment

## 📄 Dependencies Overview

The project is configured for static build. After running `yarn build`, the `dist/` folder will contain all files ready for deployment to any static hosting service (Vercel, Netlify, etc.).

**UI & Styling:**

- `@radix-ui/*` - Headless UI primitives### Backend API Deployment

- `tailwindcss` - Utility-first CSS

- `class-variance-authority` - Component variantsThe backend API (`server.js`) can be deployed to platforms like:

- `lucide-react` - Icon library- **Vercel** (recommended - uses `/api/send-email.js` serverless function)

- **Heroku**

**Forms & Validation:**- **Railway**

- `react-hook-form` - Form handling- **DigitalOcean App Platform**

- `zod` - Schema validation- Any Node.js hosting service

- `@hookform/resolvers` - RHF + Zod integration

### Environment Variables for Production

**State & Data:**

- `@tanstack/react-query` - Server state management**CRITICAL:** Never commit `.env.local` to your repository. Always configure environment variables through your hosting platform's dashboard.



**Routing:**#### Vercel Deployment

- `react-router-dom` - Client-side routing

1. **Push your code to GitHub/GitLab/Bitbucket**

**Animations:**

- `motion` (framer-motion) - Smooth animations2. **Import project in Vercel Dashboard**

- `tailwindcss-animate` - Tailwind animation utilities

3. **Configure Environment Variables** in Project Settings → Environment Variables:

**Notifications:**

- `sonner` - Toast notifications```

SENDGRID_API_KEY=your_actual_sendgrid_api_key

---TO_EMAIL=your_destination_email@example.com

FROM_EMAIL=your_verified_sender@example.com

**Need backend setup?** See [../backend/README.md](../backend/README.md)VITE_GTM_ID=GTM-XXXXXXX

```

4. **Deploy**
   - Vercel will automatically use `/api/send-email.js` for the API endpoint
   - Frontend will be deployed as static files
   - Environment variables are securely injected at runtime

#### Netlify Deployment

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Create new site in Netlify Dashboard**

3. **Configure Environment Variables** in Site Settings → Build & Deploy → Environment:

```
SENDGRID_API_KEY=your_actual_sendgrid_api_key
TO_EMAIL=your_destination_email@example.com
FROM_EMAIL=your_verified_sender@example.com
VITE_GTM_ID=GTM-XXXXXXX
```

4. **Configure Netlify Functions** (if using serverless approach)
   - Move `/api/send-email.js` to `/netlify/functions/`
   - Update import to use CommonJS syntax

#### Other Platforms (Heroku, Railway, etc.)

1. **Set environment variables** through platform CLI or dashboard:

```bash
# Example for Heroku
heroku config:set SENDGRID_API_KEY=your_key
heroku config:set TO_EMAIL=destination@example.com
heroku config:set FROM_EMAIL=sender@example.com
heroku config:set VITE_GTM_ID=GTM-XXXXXXX
```

2. **Add `PORT` variable** (if required by platform):
```bash
heroku config:set PORT=3001
```

3. **Deploy** following platform-specific instructions

### Security Best Practices

✅ **DO:**
- Use environment variables for all sensitive data
- Configure variables through hosting platform dashboard
- Keep `.env.local` in `.gitignore`
- Verify all sender emails in SendGrid before production
- Use different API keys for development and production

❌ **DON'T:**
- Commit `.env.local` or `.env` files
- Hardcode API keys in source code
- Share production API keys in team chat or documentation
- Use production credentials in development environment
