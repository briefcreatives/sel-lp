# Agent Guidelines for REEF Landing Page

## Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build` (use `npm run build:dev` for dev mode)
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`
- **Test**: No test framework configured

## Code Style
- **Imports**: Use `@/` alias for src imports (e.g., `@/components/ui/button`)
- **Formatting**: React functional components with TypeScript, export default at end
- **Types**: TypeScript enabled but relaxed (noImplicitAny: false, strictNullChecks: false)
- **Naming**: PascalCase for components, camelCase for functions/variables
- **UI Components**: Use shadcn/ui from `@/components/ui/`, Radix UI primitives, Tailwind CSS
- **Styling**: Tailwind classes with `cn()` utility from `@/lib/utils` for merging classes
- **Brand**: Use `reef-*` color classes (reef-primary, reef-secondary, reef-accent, reef-background, reef-text)
- **State**: React hooks, react-hook-form for forms with zod validation
- **Icons**: lucide-react for icons
- **Error Handling**: No strict conventions, handle as needed

## Notes
- No test commands available - do not assume test framework
- Run `npm run lint` after changes to verify code quality
