# AGENTS.md

Guidance for agentic coding assistants working in this repository.

## Scope

- Repository: `frontend-draw`
- Stack: React 19 + Vite 7 + Redux Toolkit + Fabric.js
- Language: JavaScript (ES modules), JSX (no TypeScript in current codebase)
- Package manager: npm (`package-lock.json` is present)

## Project Structure

- `src/main.jsx`: React app bootstrap, Redux `Provider`, root render
- `src/App.jsx`: top-level composition (`Toolbar`, `Whiteboard`)
- `src/components/`: UI components
- `src/redux/`: Redux slices and store setup
- `src/utility/`: pure-ish helper functions for drawing objects
- `public/fabric.min.js`: vendored minified library file
- `eslint.config.js`: flat ESLint config
- `vite.config.js`: Vite config

## Environment Notes

- Vite 7 expects Node `20.19+` or `22.12+`.
- Build currently completes on Node `20.15.1` with a warning, but treat that runtime as unsupported.
- Prefer running commands with a compatible Node version to avoid edge-case failures.

## Setup Commands

```bash
npm install
```

## Build / Lint / Test Commands

### Day-to-day

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Lint a single file (useful for focused edits)

```bash
npx eslint src/components/Whiteboard.jsx
```

### Lint only source files (avoid minified vendor noise)

```bash
npx eslint "src/**/*.{js,jsx}"
```

### Tests in current repository state

- There is no configured test runner yet.
- `package.json` has no `test` script.
- No Jest/Vitest config files are present.

### Running a single test (when tests are added)

If Vitest is introduced (recommended for Vite projects), use:

```bash
npx vitest run src/path/to/file.test.jsx
npx vitest run src/path/to/file.test.jsx -t "test name"
```

If a `test` script is later added, prefer:

```bash
npm test -- src/path/to/file.test.jsx
npm test -- src/path/to/file.test.jsx -t "test name"
```

## Known Tooling Behavior

- `npm run lint` currently scans everything matched by ESLint config, including `public/fabric.min.js`.
- This causes many lint errors from vendored/minified code that should not be edited.
- For feature work, scope lint to `src/**` unless task is specifically about lint config.
- Build emits warning for `<script src="/public/fabric.min.js">` in `index.html` because it is non-module and not bundled.

## Code Style Guidelines

These rules are based on existing code and repository tooling.

### Imports

- Use ES module syntax only.
- Keep imports at top of file.
- Prefer grouping in this order:
  1) React/core libs
  2) third-party packages
  3) app-level modules (`../redux`, `../utility`, etc.)
  4) styles
- Use relative imports consistent with neighboring files.
- Keep named imports minimal and explicit.

### Formatting

- Follow ESLint; do not fight auto-fixable lint output.
- Existing files use semicolons and double quotes; preserve this style in touched files.
- Use trailing commas where already present in multiline literals/calls.
- Keep components and functions compact and readable.
- Avoid adding comments unless logic is non-obvious.

### Types and Data Shape

- Project is JavaScript-first (no TypeScript).
- Use predictable state shapes in Redux slices (`{ value: ... }` pattern is established).
- Keep payloads simple and serializable for Redux actions.
- Validate assumptions at boundaries (for example, ensure `canvas` exists before mutating it).
- For reusable utility functions, prefer clear parameter objects over long positional arguments.

### Naming Conventions

- React components: `PascalCase` (`Toolbar`, `Whiteboard`).
- Variables/functions: `camelCase`.
- Redux slices: `<domain>.slice.js` filename convention.
- Action creators use imperative names (`setStrokeWidth`, `setStrokeColor`).
- Keep names domain-specific (`strokeWidth`, `strokeColor`, `fabricCanvas`).

### React Patterns

- Prefer functional components with hooks.
- Use `useRef` for mutable Fabric canvas references.
- Keep side effects in `useEffect`; clean up resources (`fabricCanvas.dispose()`).
- Respect `react-hooks/exhaustive-deps`; if intentionally omitted, document reason in code.
- Avoid unused imports/variables (`no-unused-vars` is enforced as error).

### Redux Patterns

- Use Redux Toolkit `createSlice` and `configureStore`.
- Keep reducer logic straightforward and mutation-style via Immer.
- Select state with `useSelector`, dispatch with `useDispatch`.
- Do not introduce non-serializable data into Redux state.

### Error Handling

- Guard against null-ish runtime objects before calling methods (`canvas`, `fabricRef.current`).
- Fail fast on invalid inputs in helpers.
- Prefer explicit checks over silent failure where user action is involved.
- In UI handlers, avoid throwing uncaught errors from click callbacks.
- When adding async code, wrap await calls in `try/catch` and surface meaningful errors.

### File and Dependency Hygiene

- Do not edit `public/fabric.min.js` unless task explicitly requires vendored library changes.
- Prefer importing from npm packages over adding extra vendored scripts.
- Keep `index.html` script usage consistent with Vite conventions.
- Avoid adding new dependencies unless needed for a specific task.

## Cursor / Copilot Rules

- Checked for Cursor rules in `.cursor/rules/` and `.cursorrules`: none found.
- Checked for GitHub Copilot instructions in `.github/copilot-instructions.md`: none found.
- If these files are added later, treat them as higher-priority repository instructions and update this document.

## Agent Working Agreement

- Make minimal, targeted changes that match local patterns.
- Run focused validation for touched areas (`eslint` on modified files, then broader checks if needed).
- Prefer small refactors over broad rewrites.
- Preserve public behavior unless change request explicitly alters behavior.
- When adding new patterns, document them in this file so future agents stay aligned.
