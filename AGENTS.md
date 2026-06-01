# Dattam — Turborepo

pnpm + Turborepo monorepo for the Dattam Labs main site and blog.

## Commands

Run from repo root:

| Command | What it does |
| --- | --- |
| `pnpm install` | Install all workspace deps |
| `pnpm dev` | Run all apps in dev (web :3000, blog :3001) |
| `pnpm dev --filter=@dattam/web` | Run only the web app |
| `pnpm dev --filter=@dattam/blog` | Run only the blog |
| `pnpm build` | Build all apps + packages |
| `pnpm lint` | Lint everything |
| `pnpm check-types` | Type-check everything |
| `pnpm format` | Prettier write |

## Architecture

```
apps/
  dattam.in/        @dattam/web   — main site (Next.js 15, app router, :3000)
  blog.dattam.in/   @dattam/blog  — blog (Next.js 15, app router, :3001)
packages/
  ui/               @dattam/ui                 — shared React components (Button, Card, cn)
  tailwind-config/  @dattam/tailwind-config    — shared Tailwind v4 tokens + postcss preset
  eslint-config/    @dattam/eslint-config      — shared flat ESLint configs
  typescript-config/@dattam/typescript-config  — shared tsconfig bases
```

- **Tailwind v4.** Design tokens live in `packages/tailwind-config/shared-styles.css` under `@theme`. Apps import it from their `globals.css`. Never hardcode hex colors in components — add tokens to the shared file.
- **Shared UI.** Components are consumed via subpath exports (`@dattam/ui/button`). Apps list `@dattam/ui` in `transpilePackages`. Each app's `globals.css` has an `@source` line so the UI package's utility classes are generated.
- **Adding a component:** create it in `packages/ui/src/components/`, add a subpath to `packages/ui/package.json` `exports`.

## Conventions

- Follow the org and global `CLAUDE.md` standards (component < 400 lines, no `any`, `next/image`, centralized API client, React Query for server state, react-hook-form + Zod for forms).
- Path alias `@/*` → `./src/*` in each app.
- Use `cn()` from `@dattam/ui/cn` for conditional classes.

## Never do

- Don't recreate Button/Card/etc. in app code — add to `@dattam/ui`.
- Don't duplicate eslint/tsconfig/tailwind config per app — extend the shared packages.
- Don't set `typescript.ignoreBuildErrors` or use raw `<img>`.
