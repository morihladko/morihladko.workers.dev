# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Production build
pnpm test         # Run tests with Vitest
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

**Path aliases:**
- `@/*` maps to `./src/*`

**Shadcn components:**
```bash
pnpx shadcn@latest add <component>
```

Components go in `@/components/ui`, utilities in `@/lib/utils`.
