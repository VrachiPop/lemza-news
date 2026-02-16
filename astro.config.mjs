// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro'

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://lemzanews.com',
  output: 'server',
  integrations: [mdx(), sitemap(), react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: false, // Kjo ndalon simulimin që po jep error
    },
  }),
});