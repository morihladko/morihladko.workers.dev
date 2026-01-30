# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Production build
pnpm test         # Run all tests once
pnpm test -- --watch              # Run tests in watch mode
pnpm test -- src/path/to/file     # Run a single test file
pnpm lint         # Run Biome linter
pnpm format       # Run Biome formatter
pnpm check        # Run Biome check (lint + format)
pnpm deploy       # Deploy to Cloudflare Workers
```

## Architecture

This is a TanStack Start application with SSR deployed to Cloudflare Workers.

**Key technologies:**
- TanStack Start (React meta-framework with SSR)
- TanStack Router (file-based routing in `src/routes/`)
- TanStack Query (data fetching, integrated with SSR)
- React 19 with React Compiler (babel-plugin-react-compiler)
- Tailwind CSS v4
- Shadcn UI (new-york style, zinc base color)
- Biome for linting/formatting (tabs, double quotes)

**Routing:**
- File-based routing: add files to `src/routes/` and the route tree auto-generates
- Route tree is generated at `src/routeTree.gen.ts` (do not edit manually)
- Root layout is in `src/routes/__root.tsx`
- API routes use `api.*.ts` naming convention

**TanStack Query SSR integration:**
- Query client setup is in `src/integrations/tanstack-query/root-provider.tsx`
- Router wraps the app with QueryClientProvider in `src/router.tsx`
- SSR query integration is configured via `setupRouterSsrQueryIntegration`

**Path aliases:**
- `@/*` maps to `./src/*`

**Shadcn components:**
```bash
pnpx shadcn@latest add <component>
```

Components go in `@/components/ui`, utilities in `@/lib/utils`.

## Design System: Modern Phosphorus

This site follows a "Modern Phosphorus" aesthetic—a high-end, futuristic command-line interface that is surgically clean, sharp, and data-heavy.

**Color palette:**
- Background: Void Black `#0D0D0D`
- Foreground: Amber Phosphorus gradient `#FFB000` to `#FFCC00`
- All UI elements (text, borders, icons) use the amber palette against the dark background

**Luminance & glow:**
- Apply digital "bloom" effect to amber elements
- Use subtle outer glows (not drop shadows) to make elements appear to emit light
- Example: `shadow-[0_0_10px_rgba(255,176,0,0.5)]`

**Layout: Bento Box grid:**
- Strict geometric grid with razor-thin 1px amber borders
- Geometric accents: crosshairs, bracketed corners, coordinate ticks at section boundaries
- Flat, digitally precise—no analog distortion or screen curvature

**Typography:**
- Headings/emphasis: Departure Mono (https://www.departuremono.com/)
- Body text: system monospace stack
- Navigation and headers: ALL-CAPS
- Varied font sizes for "instrumentation panel" hierarchy (data-dense feel)

**UI components (telemetry language):**
- Skills: segmented progress bars
- Visuals: coordinate-based plots
- Buttons: simple geometric blocks
- Replace traditional web components with technical/telemetry equivalents
