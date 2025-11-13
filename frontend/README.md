# Frontend - REEF Energy Management# Frontend - REEF Energy Management



React application built with Vite, TypeScript, and Tailwind CSS.React application built with Vite, TypeScript, and Tailwind CSS.



## 🚀 Quick Start## 🚀 Getting Started



```bash### Prerequisites

# 1. Use correct Node.js version

nvm use## 🚀 Quick Start



# 2. Install dependencies- **Node.js**: ^22.0.0 (defined in `.nvmrc` and `package.json`)

yarn install

```bash- **Yarn**: Recommended package manager

# 3. Configure environment variables

cp .env.example .env# Install dependencies

# Edit .env with your configuration

yarn install### Installation

# 4. Start development server

yarn dev

```

# Start development server1. **Clone the repository**

**Development server:** http://localhost:8080

yarn dev```bash

## 🔧 Environment Variables

Create a `.env.local` file in the root directory based on `.env.example`:

```bash
# Copy the template
cp .env.example .env.local
```

Edit `.env.local` and configure the required variables:

```bash
# API URL (required)
# Backend API endpoint that handles contact form submissions and other services
# Development: http://localhost:3001
# Production: https://api.yourdomain.com (your deployed backend URL)
VITE_API_URL=http://localhost:3001

# Google Tag Manager ID (optional)
# Get your GTM ID from https://tagmanager.google.com/
VITE_GTM_ID=GTM-XXXXXXX
```

**Important:**

- All environment variables must be prefixed with `VITE_` to be exposed to the frontend
- Restart the dev server after changing the `.env.local` file
- `VITE_API_URL` points to the backend server (no trailing slash)
  - In **development**: Use `http://localhost:3001` (make sure backend is running)
  - In **production**: Use your deployed backend URL (e.g., `https://api.yourdomain.com`)
  - The frontend will make API calls to `${VITE_API_URL}/api/send-email` for the contact form



## 📦 Available Scripts3. **Install dependencies**



```bash# Build for production```bash

# Development server (port 8080)

yarn devyarn buildyarn install



# Build for production```

yarn build

# Build for development (no minification)

# Build for development (no minification)

yarn build:devyarn build:dev4. **Configure environment variables**



# Preview production build

yarn preview

# Preview production buildCreate a `.env.local` file in the root directory based on `.env.example`:

# Lint code

yarn lintyarn preview

```

```bash

## 📁 Project Structure

# Lint codecp .env.example .env.local

```

frontend/yarn lint```

├── src/

│   ├── components/          # React components```

│   │   ├── ui/             # shadcn/ui components

│   │   ├── CTASection.tsx  # Contact formEdit `.env.local` and add your credentials:

│   │   └── ...

│   ├── pages/              # Page components## 🔧 Environment Variables

│   │   ├── Index.tsx       # Main page

│   │   └── NotFound.tsx    # 404 page```bash

│   ├── hooks/              # Custom React hooks

│   ├── lib/                # UtilitiesCreate `.env.local` file in this folder:# SendGrid API Key (get it from https://app.sendgrid.com/settings/api_keys)

│   │   ├── utils.ts       # cn() helper

│   │   └── gtm.ts         # Google Tag ManagerSENDGRID_API_KEY=your_sendgrid_api_key_here

│   ├── assets/             # Images and fonts

│   ├── App.tsx             # Root component```bash

│   └── main.tsx            # Entry point

├── public/                 # Static files# Copy template# Email addresses (must be verified in SendGrid)

├── vite.config.ts          # Vite configuration

└── tailwind.config.ts      # Tailwind configurationcp .env.example .env.localTO_EMAIL=destination@example.com

```

```FROM_EMAIL=sender@example.com

## 🎨 Tech Stack



- **Framework:** React 18

- **Build Tool:** Vite 5**Variables:**# Google Tag Manager ID (optional)

- **Language:** TypeScript 5

- **Styling:** Tailwind CSS```bashVITE_GTM_ID=GTM-XXXXXXX

- **UI Components:** shadcn/ui (Radix UI)

- **Forms:** React Hook Form + Zod# Google Tag Manager ID (optional)```

- **Icons:** Lucide React

- **Animations:** Framer MotionVITE_GTM_ID=GTM-XXXXXXX

- **Routing:** React Router DOM

- **State:** TanStack Query```**Important Setup Notes:**



## 🛠️ Development



### Import Aliases**Important:** **SendGrid:**



Use `@/` prefix for imports:- All frontend environment variables must start with `VITE_` prefix- Get your API key from [SendGrid Dashboard](https://app.sendgrid.com/settings/api_keys)



```tsx- Restart dev server after changing `.env.local`- Verify your sender email in [Sender Authentication](https://app.sendgrid.com/settings/sender_auth)

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'- Both `TO_EMAIL` and `FROM_EMAIL` must be verified in SendGrid to avoid 403 errors

```

## 📁 Project Structure

### Adding Components

**Google Tag Manager (Optional):**

```bash

# Add new shadcn/ui component```- Get your GTM ID from [Google Tag Manager](https://tagmanager.google.com/)

npx shadcn-ui@latest add button

```frontend/- The GTM ID is injected into `index.html` during build via Vite



### Styling├── src/- If not set, defaults to `GTM-PRB8MJVT`



- Use Tailwind CSS utility classes│   ├── components/          # React components

- Use `cn()` from `@/lib/utils` for conditional classes

- Custom REEF classes: `reef-hero-title`, `reef-section-title`, `reef-highlight`│   │   ├── ui/             # shadcn/ui components### Available Commands



## 🌐 API Integration│   │   ├── AboutSection.tsx



The frontend connects to the backend API for the contact form.│   │   ├── CTASection.tsx  # Contact form#### Frontend Development



**Development:**│   │   ├── HeroSection.tsx

- Uses `VITE_API_URL` environment variable

- Defaults to `http://localhost:3001` if not set│   │   └── ...```bash



**Production:**│   │# Start frontend development server at http://[::]:8080

- Set `VITE_API_URL` to your production backend URL

│   ├── pages/              # Page componentsyarn dev

**Contact Form** (`src/components/CTASection.tsx`):

- Submits to `/api/send-email`│   │   ├── Index.tsx       # Main page

- Validates with Zod schema

- Shows toast notifications│   │   └── NotFound.tsx    # 404 page# Build for production



## 📦 Build for Production│   │yarn build



```bash│   ├── hooks/              # Custom React hooks

# Build

yarn build│   ├── lib/                # Utilities# Build for development



# Output directory: dist/│   ├── assets/             # Imagesyarn build:dev



# Preview build│   ├── App.tsx             # Root component

yarn preview

```│   └── main.tsx            # Entry point# Preview production build



**Build includes:**│yarn preview

- Minification and tree-shaking

- CSS optimization├── public/                 # Static files

- Asset optimization

- Environment variables injected at build time├── index.html              # HTML template# Lint code



## 🌐 Deployment├── vite.config.ts          # Vite configurationyarn lint



### Static Hosting (Vercel, Netlify, etc.)└── tailwind.config.ts      # Tailwind configuration```



1. Build the project: `yarn build````

2. Deploy the `dist/` folder

3. Set environment variables in hosting dashboard:#### Backend Development (Contact Form API)

   ```

   VITE_API_URL=https://your-backend-url.com## 🎨 Tech Stack

   VITE_GTM_ID=GTM-XXXXXXX

   ```The project includes a Node.js Express server for handling contact form submissions via SendGrid.



### Environment Variables for Production- **Framework:** React 18.3.1



**Configure in your hosting platform:**- **Build Tool:** Vite 5.4.19```bash



```bash- **Language:** TypeScript 5.8.3# Start backend server at http://localhost:3001

VITE_API_URL=https://your-backend-url.com

VITE_GTM_ID=GTM-XXXXXXX- **Styling:** Tailwind CSS 3.4.1node server.js

```

- **UI Components:** shadcn/ui (Radix UI primitives)```

**Important:**

- Never commit `.env` files to repository- **Forms:** React Hook Form + Zod validation

- Keep sensitive data in hosting platform dashboard

- Use different values for development and production- **Icons:** Lucide React**Running Both Frontend and Backend:**



## 🐛 Troubleshooting- **Animations:** Framer Motion



**Environment variables not working:**- **Routing:** React Router DOMYou need to run both servers simultaneously during development:

- Ensure variables start with `VITE_` prefix

- Restart dev server after changing `.env`



**Cannot connect to backend:**## 🛠️ Development```bash

- Check backend is running on correct port

- Verify `VITE_API_URL` in `.env` matches backend URL# Terminal 1 - Backend API

- Check browser console for CORS errors

### Adding Componentsnode server.js

**Port 8080 in use:**

- Change port in `vite.config.ts`: `server: { port: 8081 }`



---```bash# Terminal 2 - Frontend



**Need backend setup?** See [../backend/README.md](../backend/README.md)# Example: Add a new shadcn/ui componentyarn dev


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
