// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.ts';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // Every route is built as a directory (`/articles/index.html`), so its
  // canonical URL ends in a slash. 'always' makes the dev server 404 on
  // slashless internal links, which catches mismatches before deploy.
  trailingSlash: 'always',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
