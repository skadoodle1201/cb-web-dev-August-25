# AGENTS.md
Guidance for agentic coding assistants working in `frontend-draw`.

## Purpose
- Give agents fast, practical rules for safe changes in this repository.
- Capture build/lint/test commands, including single-test execution guidance.
- Preserve local coding conventions (React + Redux Toolkit + Fabric.js).

## Repository Snapshot
- Name: `frontend-draw`
- Stack: React 19, Vite 7, Redux Toolkit, Fabric.js
- Language: JavaScript (ES modules) + JSX
- Package manager: npm (`package-lock.json` is committed)
- Current tests: none configured yet

## Project Layout
- `src/main.jsx`: app bootstrap, Redux provider wiring
- `src/App.jsx`: top-level composition and modal/canvas orchestration
- `src/components/`: UI components (`Toolbar`, `Whiteboard`, modal, shared button)
- `src/redux/`: store and slices (`strokes.slice.js`, `color.slice.js`)
- `src/utility/`: helper/tool functions for Fabric operations and API helpers
- `public/fabric.min.js`: vendored minified file (treat as third-party asset)
- `eslint.config.js`: flat ESLint configuration
- `vite.config.js`: Vite + React plugin config

## Environment Notes
- Prefer Node `20.19+` or `22.12+` for Vite 7 compatibility.
- If running on older Node, commands may still run but are not guaranteed stable.
- Use npm commands in examples unless task explicitly requires otherwise.

## Setup Commands
```bash
npm install
```

## Build, Lint, and Test Commands
### Daily workflow
```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Lint focused files (recommended during feature work)
```bash
npx eslint src/components/Whiteboard.jsx
npx eslint "src/**/*.{js,jsx}"
```

### Tests in current repository state
- There is no `test` script in `package.json`.
- No Jest/Vitest config is present.
- No `*.test.*` or `*.spec.*` files exist currently.

### Running a single test (when tests are added)
- If Vitest is introduced:
```bash
npx vitest run src/path/to/file.test.jsx
npx vitest run src/path/to/file.test.jsx -t "test name"
```
- If a project-level `npm test` script is introduced later:
```bash
npm test -- src/path/to/file.test.jsx
npm test -- src/path/to/file.test.jsx -t "test name"
```

## Known Tooling Behavior
- `npm run lint` runs `eslint .`, which includes vendored files under `public/`.
- `public/fabric.min.js` may produce noisy lint errors because it is minified third-party code.
- For normal feature work, prefer linting `src/**` unless task is lint-config related.
- `index.html` includes `<script src="/public/fabric.min.js"></script>`, which can trigger build warnings about non-module scripts.

## Code Style Guidelines
These are conventions observed in the current codebase. Follow them unless a task requires intentional change.

### Imports
- Use ESM imports/exports only.
- Keep imports at the top of the file.
- Prefer grouping in this order:
  1) React/core packages
  2) third-party packages
  3) app modules (`../redux`, `../utility`, `./components`)
  4) CSS/style imports
- Keep named imports explicit and minimal.
- Match existing extension usage in nearby files (both explicit and implicit forms are present).

### Formatting and Syntax
- Preserve existing style in touched files: semicolons, double quotes, and readable multiline JSX.
- Follow ESLint; do not introduce avoidable warnings.
- Use trailing commas for multiline literals/calls where existing code does.
- Keep functions/components concise; avoid unnecessary abstraction.
- Do not add comments unless a block is genuinely non-obvious.

### Types and Data Shapes
- This repo is JavaScript-first; do not introduce TypeScript unless explicitly requested.
- Keep Redux state predictable; existing slices use `{ value: ... }` shape.
- Keep Redux actions serializable.
- Prefer object parameters for utility functions over long positional argument lists.
- Avoid passing mutable complex objects through Redux state.

### Naming Conventions
- Components: `PascalCase` (`Whiteboard`, `LoginModal`).
- Variables/functions: `camelCase`.
- Slice files: `<domain>.slice.js` pattern.
- Redux actions: imperative verbs (`setStrokeWidth`, `setStrokeColor`).
- Use domain language (`canvas`, `strokeWidth`, `strokeColor`, `fabricCanvas`).

### React Patterns
- Use functional components and hooks.
- Use `useRef` for mutable Fabric instance references.
- Keep side effects inside `useEffect` with proper cleanup (`dispose()` on canvas).
- Keep hook dependencies accurate; if deviating, leave a brief rationale.
- Avoid unused vars/imports (`no-unused-vars` is enforced as error).

### Redux Patterns
- Use `createSlice` and `configureStore` from Redux Toolkit.
- Keep reducers simple and mutation-style via Immer.
- Use `useSelector` for reads and `useDispatch` for updates.
- Keep state serializable and minimal.

### Error Handling and Validation
- Guard nullish runtime references before mutating (`canvas`, `fabricRef.current`).
- In utility functions, return early on invalid runtime objects.
- In async UI handlers, use `try/catch` around awaited calls and surface meaningful UI feedback.
- Avoid uncaught exceptions from event handlers.
- Prefer explicit validation at form/input boundaries.

### File and Dependency Hygiene
- Do not modify `public/fabric.min.js` unless the task explicitly targets vendored code.
- Prefer npm dependencies over additional vendored scripts.
- Keep Vite entry behavior in `index.html` consistent with project conventions.
- Add dependencies only when necessary and justify them in PR notes.

## Cursor and Copilot Rules
- Checked `.cursor/rules/`: no files found.
- Checked `.cursorrules`: not present.
- Checked `.github/copilot-instructions.md`: not present.
- If any of these appear later, treat them as higher-priority instructions than this file.

## Agent Working Agreement
- Make minimal, targeted changes aligned with nearby code patterns.
- Do not rewrite unrelated modules while implementing focused tasks.
- Validate touched areas with focused lint/build commands before broad checks.
- Preserve existing behavior unless the task explicitly requests behavior changes.
- When introducing a new convention, update this file in the same change.
