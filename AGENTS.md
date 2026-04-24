# AGENTS.md

Guidance for AI agents in this repository.

- **Full project context:** `CLAUDE.md`
- **Cursor:** `.cursor/rules/*.mdc`

## Quick reference

Personal CV/portfolio — Vue 3 + Vite 8 + TypeScript + vue-router v5 + Tailwind v4; **pnpm**.

| Command        | Purpose                          |
| -------------- | -------------------------------- |
| `pnpm dev`     | Dev server + HMR + Vue DevTools  |
| `pnpm build`   | Type-check + production build    |
| `pnpm preview` | Preview production build locally |
| `pnpm lint`    | oxlint → eslint (sequential)     |
| `pnpm format`  | Prettier on `src/`               |

No test runner yet. Pages live under `src/pages/` (file-based routing); app shell in `src/layouts/DefaultLayout.vue`.
