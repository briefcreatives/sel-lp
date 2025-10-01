# REEF Energy Management - Landing Page

Landing page para REEF Energy Management, uma solução definitiva para gestão de energia distribuída desenvolvida pela Smart Energy Lab.

## 📋 Descrição do Projeto

Landing page moderna e responsiva construída com React, TypeScript, Vite e Tailwind CSS. Apresenta o sistema REEF que permite integrar e controlar qualquer ativo energético - painéis solares, baterias, bombas de calor e carregadores EV - independentemente do fabricante.

### Características Principais

- ⚡ **Hero Section** - Apresentação impactante com imagem de background e CTA
- 🎯 **Why Choose REEF** - Grid de 6 benefícios principais do sistema
- 🔌 **Easy Pairing** - Funcionalidade revolucionária de emparelhamento
- 🔗 **Integrations** - Compatibilidade universal com equipamentos
- 👥 **About Section** - Informação sobre a Smart Energy Lab
- 📞 **CTA Section** - Call-to-action para agendamento de demo
- 📱 **Responsive Design** - Totalmente adaptado para mobile, tablet e desktop

## 🛠️ Stack Tecnológico

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Linguagem**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.30.1
- **Forms**: React Hook Form 7.61.1 + Zod 3.25.76
- **Icons**: Lucide React 0.462.0
- **Animations**: Framer Motion 12.23.22
- **State Management**: TanStack Query 5.83.0

## 🎨 Paleta de Cores REEF

### Cores Principais

| Nome | HSL | HEX | Uso |
|------|-----|-----|-----|
| **reef-primary** | `176 98% 16%` | `#01534f` | Verde escuro para títulos e elementos principais |
| **reef-secondary** | `186 90% 58%` | `#0adaea` | Azul ciano para highlights e CTAs |
| **reef-accent** | `138 100% 92%` | `#d6ffe5` | Verde claro para seções alternativas |
| **reef-text** | `0 0% 0%` | `#000000` | Preto para textos |
| **reef-background** | `0 0% 100%` | `#ffffff` | Branco para backgrounds |

### Cores do Sistema

- **Border**: `176 30% 85%` - Bordas sutis
- **Input**: `176 30% 95%` - Backgrounds de inputs
- **Muted**: `138 100% 92%` - Textos secundários
- **Destructive**: `0 84.2% 60.2%` - Ações destrutivas

### Gradientes Personalizados

```css
--gradient-hero: linear-gradient(135deg, hsl(176 98% 16%), hsl(186 90% 58%));
--gradient-accent: linear-gradient(180deg, hsl(0 0% 100%), hsl(138 100% 92%));
```

### Sombras

```css
--shadow-reef: 0 10px 40px -15px hsl(176 98% 16% / 0.3);
--shadow-glow: 0 0 30px hsl(186 90% 58% / 0.4);
```

## 🚀 Começar

### Pré-requisitos

- **Node.js**: ^24.9.0 (definido em `.nvmrc` e `package.json`)
- **Yarn**: Gerenciador de pacotes recomendado

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd lp
```

2. **Use a versão correta do Node.js**
```bash
nvm use
```

3. **Instale as dependências**
```bash
yarn install
```

### Comandos Disponíveis

```bash
# Desenvolvimento - inicia servidor em http://[::]:8080
yarn dev

# Build para produção
yarn build

# Build para desenvolvimento
yarn build:dev

# Preview da build de produção
yarn preview

# Lint do código
yarn lint
```

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

O projeto está configurado para build estático. Após executar `yarn build`, a pasta `dist/` conterá todos os arquivos prontos para deploy em qualquer serviço de hosting estático (Vercel, Netlify, etc.).

## 📝 Notas Importantes

- Não há framework de testes configurado
- O projeto usa `yarn` como package manager
- Dark mode está implementado mas a landing page usa principalmente light mode
- Algumas seções estão comentadas em `Index.tsx` (SolutionSection, IntelligenceSection, AboutSection)

## 🤝 Contribuir

1. Execute `yarn lint` antes de commit
2. Siga as convenções de código estabelecidas
3. Use as classes REEF customizadas para consistência visual

## 📄 Licença

Projeto desenvolvido pela Smart Energy Lab para REEF Energy Management.
