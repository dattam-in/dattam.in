# dattam.in — Main Website

The Dattam Labs studio website. Built with Next.js 16 App Router.

**Live:** https://dattam.in

## Commands

```bash
# From repo root
pnpm --filter @dattam/web dev      # Dev server → http://localhost:30010
pnpm --filter @dattam/web build    # Production build
pnpm --filter @dattam/web lint     # Lint
pnpm --filter @dattam/web check-types  # Type check
```

## Stack

- **Next.js 16** — App Router, Turbopack in dev
- **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** + Radix UI primitives
- **Framer Motion** (`motion/react`) for animations
- **Lenis** for smooth scroll
- **next-themes** for dark/light mode

## Architecture

```
src/
├── app/                    # Next.js App Router routes
│   ├── layout.tsx          # Root layout (navbar, footer, GA4, theme)
│   ├── page.tsx            # Home page + JSON-LD schema
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   └── [slug]/
│   ├── privacy-policy/
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── icon.png            # Favicon (App Router)
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, Footer, Logo, Container
│   ├── ui/                 # Button, Badge, Input, ThemeToggle
│   ├── motion/             # Animation wrappers
│   ├── sections/           # Reusable page sections (Stats, CTA)
│   ├── visuals/            # Background effects
│   └── providers/          # ThemeProvider, SmoothScroll
├── modules/                # Feature modules (home, about, contact, projects)
└── lib/
    └── site.ts             # siteConfig, nav constants
```

## Environment Variables

Create `apps/dattam.in/.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Conventions

- Module-based structure: `modules/<feature>/` for page-specific components
- `siteConfig` in `lib/site.ts` is the single source of truth for site name, URL, email, socials
- All images use `next/image` with `unoptimized` for local PNGs (no sharp installed)
- Tailwind v4 — no `tailwind.config.js`, configured via CSS `@theme` in `globals.css`
- Dark mode via `next-themes` with `class` strategy

## Never Do

- Don't use `<img>` tags — use `next/image`
- Don't add `any` types
- Don't read `localStorage` in components — token/theme management is centralized
- Don't add page-level `useState` — pages are thin, logic lives in modules
