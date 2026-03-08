// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.ts';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
