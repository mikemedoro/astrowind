# AstroWind Starter

Astro starter focused on content-first pages with modern styling and a clean file structure.

## Stack

- Astro 7
- Tailwind CSS v4 via `@tailwindcss/vite`
- `fluid-tailwindcss` for fluid type/spacing scales
- React (for optional interactive islands)
- TypeScript strict mode
- Prettier with Astro + Tailwind plugins

## Quick Start

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321` by default.

## Commands

| Command                   | Description                        |
| :------------------------ | :--------------------------------- |
| `npm run dev`             | Start local development server     |
| `npm run build`           | Build production output to `dist/` |
| `npm run preview`         | Preview production build locally   |
| `npm run astro -- --help` | Show Astro CLI help                |

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── articles/
│   ├── layouts/
│   ├── pages/
│   │   ├── articles/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   └── index.astro
│   ├── styles/
│   ├── types/
│   ├── content.config.ts
│   └── site.ts
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Content: Markdown Articles

Articles are authored in Markdown under `src/content/articles/*.md` and typed with Astro content collections in `src/content.config.ts`.

### Frontmatter schema

Each article supports:

- `title: string`
- `description: string`
- `publishDate: date`
- `draft: boolean` (optional, defaults to `false`)

### Example article

```md
---
title: My First Article
description: Short summary used in listings and meta tags.
publishDate: 2026-03-05
draft: false
---

Your Markdown content here.
```

## Routing

- `/` shows the latest 3 non-draft articles.
- `/articles` lists all non-draft articles sorted by newest first.
- `/articles/[slug]` generates one page per non-draft Markdown file.

## Styling Notes

- Tailwind v4 is configured through the Vite plugin in `astro.config.mjs`.
- No PostCSS Tailwind plugin is required for this setup.
- CSS organization:
  - `theme.css`: design tokens
  - `utilities.css`: utility primitives
  - `components.css`: reusable component-level classes

## TypeScript and Aliases

TypeScript is strict (`astro/tsconfigs/strict`) and uses path aliases:

- `@src/*`
- `@layouts/*`
- `@components/*`
- `@assets/*`
