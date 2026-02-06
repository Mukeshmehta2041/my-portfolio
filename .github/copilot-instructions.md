# Developer Portfolio - Copilot Instructions

## Tech Stack & Architecture
- **Framework**: Next.js 16 (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS 4+ (using `@import 'tailwindcss'` in CSS, and `oklch` color functions).
- **UI Components**: Shadcn UI (Radix-based) located in `components/ui/`.
- **Animations**: Framer Motion for transitions and `@custom-variant dark (&:is(.dark *))` for theme-aware styles.
- **Data Flow**: Static site generation (SSG). Data (projects, experiences) is currently inlined as constants within their respective components (e.g., `components/projects.tsx`).

## Core Conventions
- **Component Model**: Use `'use client'` for interactive sections that utilize `framer-motion` or `react-intersection-observer`.
- **Animations**: Prefer `variants` for complex animations. Use `useInView` with a `threshold` (typically 0.2-0.3) for scroll-triggered entry effects.
- **Styling**: Use utility classes (Tailwind 4). Follow the CSS variable pattern for colors (`text-foreground`, `bg-background`, `text-accent`).
- **Icons**: Exclusively use `lucide-react`.
- **File Structure**:
  - `app/`: Next.js pages and globals.
  - `components/`: Feature-specific sections (Hero, Projects, etc.).
  - `components/ui/`: Atomic UI components.
  - `lib/utils.ts`: Standard Shadcn/Tailwind helper (`cn()`).

## Developer Workflows
- **Development**: `pnpm dev` (runs on port 3004 by default).
- **Build**: `pnpm build` creates a static `out/` directory for SSG.
- **Deployment**: Configured for static hosting on AWS (S3 + CloudFront).

## Common Patterns
### Animation Example
```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
// Use with motion.div and animate={inView ? 'visible' : 'hidden'}
```

### Static Data
Update feature data by editing the array constants at the top of feature components:
- Projects: [components/projects.tsx](components/projects.tsx)
- Experiences: [components/experience.tsx](components/experience.tsx)
- Tech Stack: [components/tech-stack.tsx](components/tech-stack.tsx)
