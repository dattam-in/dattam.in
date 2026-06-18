# dattam.in — Monorepo

Turborepo monorepo for Dattam Labs web properties.

## Apps

| App | Package | URL | Port |
|-----|---------|-----|------|
| Main website | `@dattam/web` | https://dattam.in | 30010 |
| Blog | `@dattam/blog` | https://blog.dattam.in | 3001 |
| Legacy site (archived) | — | — | — |

## Packages

| Package | Purpose |
|---------|---------|
| `@dattam/ui` | Shared UI components (shadcn/ui + Tailwind) |
| `@dattam/tailwind-config` | Shared Tailwind CSS config |
| `@dattam/typescript-config` | Shared TypeScript config |
| `@dattam/eslint-config` | Shared ESLint config |

## Stack

- **Framework:** Next.js 16 + React 19 (App Router)
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui + Radix UI primitives
- **Monorepo:** Turborepo + pnpm workspaces
- **Language:** TypeScript (strict)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm dev

# Run a specific app
pnpm --filter @dattam/web dev
pnpm --filter @dattam/blog dev
```

## Build

```bash
# Build all apps
pnpm build

# Build a specific app
pnpm --filter @dattam/web build
```

## Other Commands

```bash
pnpm lint          # Lint all packages
pnpm check-types   # Type-check all packages
```

## Environment Variables

Create `.env.local` inside each app directory:

**`apps/dattam.in/.env.local`**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Project Structure

```
dattam.in/
├── apps/
│   ├── dattam.in/          # Main website (@dattam/web)
│   ├── blog.dattam.in/     # Blog (@dattam/blog)
│   └── dattam-v1/          # Archived Astro v1 site
├── packages/
│   ├── ui/                 # Shared components
│   ├── tailwind-config/    # Tailwind config
│   ├── typescript-config/  # TypeScript config
│   └── eslint-config/      # ESLint config
├── turbo.json
└── pnpm-workspace.yaml
```
