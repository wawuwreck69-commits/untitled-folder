# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, and route handlers.
- `components/`: Reusable UI components.
- `hooks/`: Custom React hooks.
- `lib/`: Shared utilities and helpers.
- `styles/`: Global styles and CSS assets.
- `public/`: Static assets served at the site root.

## Build, Test, and Development Commands
- `npm run dev`: Start the local Next.js dev server with hot reload.
- `npm run build`: Create a production build.
- `npm run start`: Run the production server (after `build`).
- `npm run lint`: Run ESLint across the project.

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js App Router).
- Indentation: follow existing file style; use 2 spaces for JSON and common JS/TS style.
- Naming: React components in `PascalCase`, hooks in `useCamelCase`, utilities in `camelCase`.
- Styling: CSS lives in `styles/`; component styles are typically expressed via class names.

## Testing Guidelines
- No test framework or test scripts are configured yet.
- If adding tests, place them alongside modules (e.g., `components/Button.test.tsx`) or in a `__tests__/` folder and wire a test runner in `package.json`.

## Commit & Pull Request Guidelines
- Git history is not available in this workspace, so no established commit convention can be inferred.
- Use short, imperative commit subjects (e.g., “Add pricing table layout”).
- PRs should include a summary, testing notes (even if “not run”), and screenshots for UI changes.

## Configuration Notes
- Key config files: `next.config.mjs`, `postcss.config.mjs`, and `tsconfig.json`.
- Dependency locks: `package-lock.json` and `pnpm-lock.yaml` exist; use the lockfile for your package manager.
