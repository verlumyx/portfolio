import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://verlumyx.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
});
