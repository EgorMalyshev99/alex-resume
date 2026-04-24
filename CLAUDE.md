# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal cv/portfolio site — landing + three Rizzult case pages + 404.

**Pages (file-based):**

- `/` — `src/pages/index.vue` — landing
- `/cases/rizzult-influencers` — Rizzult App for Influencers
- `/cases/rizzult-talent-manager` — Rizzult Talent Manager
- `/cases/rizzult-brands` — Rizzult for Brands
- Catch-all `[...path].vue` — 404

## Commands

```sh
pnpm dev          # dev server with HMR + Vue DevTools overlay
pnpm build        # type-check + production build (runs in parallel)
pnpm preview      # preview production build locally
pnpm lint         # oxlint (auto-fix) → eslint (auto-fix), in sequence
pnpm format       # prettier over src/
```

No test runner is configured yet.

## Stack

Vue 3 SFC + Vite 8 + TypeScript 6 + vue-router v5 + Tailwind v4. Package manager: **pnpm**.

- `src/main.ts` — entry. Imports `./assets/main.css` first, then mounts `App.vue` with router.
- `src/App.vue` — thin shell: `<RouterView />` only. No layout logic here.
- `src/router/index.ts` — `createWebHistory` + `routes` imported from `vue-router/auto-routes`.
- `@` alias → `src/`.

`vite-plugin-vue-devtools` is active in dev — in-browser panel, no separate install.

## Folder architecture

```
src/
├── assets/main.css       # @import "tailwindcss" + @theme tokens
├── components/
│   ├── layout/           # AppHeader, AppFooter — chrome shared across pages
│   ├── sections/         # 1 file = 1 landing section (SiteHero, CasesSection, ...)
│   └── ui/               # Atoms: AppButton, AppContainer, NavLink, CaseCard
├── layouts/
│   └── DefaultLayout.vue # Header + <main><slot/></main> + Footer
├── pages/                # file-based routes (auto-generated)
│   ├── index.vue
│   ├── cases/{slug}.vue
│   └── [...path].vue     # 404 catch-all
├── router/index.ts
├── App.vue
└── main.ts
```

**Rule:** a page file contains only `<DefaultLayout>` + section imports. No layout classes directly on the page — sections own their own spacing/container.

## File-based routing

Shipped inside vue-router v5 core (no separate `unplugin-vue-router` install):

- `vite.config.ts` → `VueRouter({ routesFolder: 'src/pages' })` plugin **before** `vue()`.
- `router/index.ts` → `import { routes } from 'vue-router/auto-routes'`.
- Generated `typed-router.d.ts` lives at repo root and is committed; listed in `tsconfig.app.json` `include`. Requires `moduleResolution: "bundler"` (inherited from `@vue/tsconfig/tsconfig.json`).

Routes are inferred from filenames: `src/pages/cases/rizzult-brands.vue` → `/cases/rizzult-brands`. Catch-all uses `[...path].vue`. Each page auto-gets dynamic import → code-split in the prod bundle.

## Tailwind v4 — CSS-first config

- Packages: `tailwindcss` + `@tailwindcss/vite` (registered as the **last** Vite plugin).
- Config lives entirely in `src/assets/main.css` (no `tailwind.config.js`, no `postcss.config.js`):
  - `@import "tailwindcss"`
  - `@theme { ... }` — design tokens become utility classes automatically (`--color-ink` → `text-ink`, `--font-sans` → `font-sans`, etc.).
- **Container:** use Tailwind's built-in `container` utility as-is, never override via `@utility container { @media ... }`. Centering + padding added per consumer: `container mx-auto px-4 lg:px-6`. `AppContainer.vue` encapsulates that exact combo.
- Fonts (`Work Sans`, `Inter`) loaded via `<link>` in `index.html`.

## Linting pipeline

Two linters run sequentially via `npm-run-all2`:

1. **oxlint** — fast Rust-based, config in `.oxlintrc.json` (`correctness`: error, `suspicious`: warn, `import/no-unassigned-import: off` so CSS side-effect imports pass).
2. **eslint** — config in `eslint.config.ts`; vue + typescript rules. Pages/layouts get `vue/multi-word-component-names: off` because file-based routing requires single-word names like `index.vue` / `[...path].vue`.

`eslint-config-prettier` is applied last so ESLint never conflicts with Prettier formatting. Prettier config in `.prettierrc` (`singleQuote`, no semi, `trailingComma: all`, `printWidth: 100`).
