# OpenDevice

A React + TypeScript project built with Vite and React Compiler.

## What is React Compiler

React Compiler automatically memoizes components and hooks at build time. With
it enabled you do not need to write `useMemo`, `useCallback`, or `React.memo`
by hand: the compiler inserts the memoization for you.

## Tech stack

- **React 19** with TypeScript
- **Vite 8** as the build tool and dev server
- **React Compiler 1.0** enabled through Babel, using the official
  `reactCompilerPreset()` helper from `@vitejs/plugin-react`
- **oxlint** for linting

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:5173`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

## How React Compiler is wired

The compiler runs as a Babel preset inside `vite.config.ts`:

```ts
import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
})
```

To verify the compiler is active, build the project and check that the output
bundle contains `useMemoCache`. That symbol only appears when the compiler has
rewritten a component.

## Project structure

```
opendevice/
├── public/            static assets served as-is
├── src/
│   ├── App.tsx        root component
│   ├── main.tsx       entry point
│   └── assets/        images and styles imported by components
├── index.html         HTML shell
├── vite.config.ts     Vite config, React Compiler enabled here
└── tsconfig*.json     TypeScript project configs
```
