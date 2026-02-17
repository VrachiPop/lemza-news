// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://lemzanews.com',
  output: 'static',
  integrations: [mdx(), sitemap(), react(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});