# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev          # dev server with HMR
pnpm build        # type-check + production build (runs in parallel)
pnpm preview      # preview production build locally
pnpm lint         # oxlint (auto-fix) → eslint (auto-fix), in sequence
pnpm format       # prettier over src/
```

No test runner is configured yet.

## Architecture

Vue 3 SFC + Vite + TypeScript + vue-router v5. Package manager: **pnpm**.

- `src/main.ts` — app entry, mounts `App.vue`, registers router
- `src/router/index.ts` — `createWebHistory` router, routes array currently empty
- `src/App.vue` — root component
- `@` alias resolves to `src/`

## Linting pipeline

Two linters run sequentially via `npm-run-all2`:
1. **oxlint** — fast Rust-based linter, config in `.oxlintrc.json` (not yet created)
2. **eslint** — vue + typescript rules, prettier formatting skipped (handled separately)

`eslint-config-prettier` is applied last so eslint never conflicts with prettier formatting.
