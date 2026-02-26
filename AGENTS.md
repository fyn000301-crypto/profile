# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is a personal profile/portfolio website built with **Vite** + **TypeScript** (vanilla, no framework). It is a single static site with no backend services or databases.

### Common commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Lint | `npm run lint` |
| Type-check | `npm run typecheck` |
| Build | `npm run build` |
| Preview build | `npm run preview` |

### Notes

- The dev server runs on `http://localhost:5173` by default (Vite).
- There are no external service dependencies (no databases, APIs, or Docker required).
- ESLint 9 flat config is used (`eslint.config.js`). TypeScript strict mode is enabled in `tsconfig.json`.
- Theme toggle state persists in `localStorage`.
