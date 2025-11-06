
## 🚀 Getting Started

### Prerequisites

- **Node.js**: ^24.9.0 (defined in `.nvmrc` and `package.json`)
- **Yarn**: Recommended package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd sel-lp
```

2. **Use the correct Node.js version**
```bash
nvm use
```

3. **Install dependencies**
```bash
yarn install
```

4. **Configure environment variables**

Create a `.env.local` file in the root directory based on `.env.example`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```bash
# SendGrid API Key (get it from https://app.sendgrid.com/settings/api_keys)
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Email addresses (must be verified in SendGrid)
TO_EMAIL=destination@example.com
FROM_EMAIL=sender@example.com

# Google Tag Manager ID (optional)
VITE_GTM_ID=GTM-XXXXXXX
```

**Important Setup Notes:**

**SendGrid:**
- Get your API key from [SendGrid Dashboard](https://app.sendgrid.com/settings/api_keys)
- Verify your sender email in [Sender Authentication](https://app.sendgrid.com/settings/sender_auth)
- Both `TO_EMAIL` and `FROM_EMAIL` must be verified in SendGrid to avoid 403 errors

**Google Tag Manager (Optional):**
- Get your GTM ID from [Google Tag Manager](https://tagmanager.google.com/)
- The GTM ID is injected into `index.html` during build via Vite
- If not set, defaults to `GTM-PRB8MJVT`

### Available Commands

#### Frontend Development

```bash
# Start frontend development server at http://[::]:8080
yarn dev

# Build for production
yarn build

# Build for development
yarn build:dev

# Preview production build
yarn preview

# Lint code
yarn lint
```

#### Backend Development (Contact Form API)

The project includes a Node.js Express server for handling contact form submissions via SendGrid.

```bash
# Start backend server at http://localhost:3001
node server.js
```

**Running Both Frontend and Backend:**

You need to run both servers simultaneously during development:

```bash
# Terminal 1 - Backend API
node server.js

# Terminal 2 - Frontend
yarn dev
```

The Vite dev server (frontend) is configured to proxy `/api` requests to the backend server at `http://localhost:3001`.

**Backend Features:**
- Email sending via SendGrid
- CORS enabled
- JSON body parsing
- Environment variables from `.env.local`
- Request logging
- Error handling with detailed SendGrid error messages

### Estrutura de Pastas

```
src/
├── assets/              # Imagens e recursos estáticos
├── components/          # Componentes React
│   ├── figma/          # Componentes específicos do Figma
│   └── ui/             # Componentes UI shadcn/ui
├── hooks/              # Custom React hooks
├── lib/                # Utilitários (cn, etc.)
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── App.tsx             # Componente raiz
├── main.tsx            # Entry point
└── index.css           # Estilos globais e design system
```

## 🎯 Convenções de Código

### Imports
- Use alias `@/` para imports do src: `@/components/ui/button`

### Componentes
- Functional components com TypeScript
- Export default no final do arquivo
- PascalCase para nomes de componentes

### Styling
- Classes Tailwind CSS
- Utility `cn()` de `@/lib/utils` para merge de classes
- Classes customizadas REEF: `reef-hero-title`, `reef-section-title`, `reef-highlight`, etc.

### TypeScript
- TypeScript relaxado: `noImplicitAny: false`, `strictNullChecks: false`
- Tipos explícitos onde necessário

## 🔧 Configuração do Vite

- **Server**: Host `::` (IPv6), porta `8080`
- **Alias**: `@` aponta para `./src`
- **Plugins**: React SWC, Lovable Tagger (dev only)

## 📦 Dependências Principais

- **UI Primitives**: @radix-ui/* (accordion, dialog, dropdown, etc.)
- **Form Handling**: react-hook-form + @hookform/resolvers
- **Validation**: zod
- **Styling**: tailwindcss, tailwind-merge, clsx, class-variance-authority
- **Icons**: lucide-react
- **Animations**: motion (framer-motion), tailwindcss-animate
- **Routing**: react-router-dom
- **State**: @tanstack/react-query
- **Toast/Notifications**: sonner

## 🌐 Deployment

### Frontend Deployment

The project is configured for static build. After running `yarn build`, the `dist/` folder will contain all files ready for deployment to any static hosting service (Vercel, Netlify, etc.).

### Backend API Deployment

The backend API (`server.js`) can be deployed to platforms like:
- **Vercel** (recommended - uses `/api/send-email.js` serverless function)
- **Heroku**
- **Railway**
- **DigitalOcean App Platform**
- Any Node.js hosting service

### Environment Variables for Production

**CRITICAL:** Never commit `.env.local` to your repository. Always configure environment variables through your hosting platform's dashboard.

#### Vercel Deployment

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import project in Vercel Dashboard**

3. **Configure Environment Variables** in Project Settings → Environment Variables:

```
SENDGRID_API_KEY=your_actual_sendgrid_api_key
TO_EMAIL=your_destination_email@example.com
FROM_EMAIL=your_verified_sender@example.com
VITE_GTM_ID=GTM-XXXXXXX
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
