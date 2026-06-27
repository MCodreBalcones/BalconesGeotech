import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages site URL
  site: 'https://MCodreBalcones.github.io/',
  base: '/BalconesGeotech/',
  
  // Static output for GitHub Pages
  output: 'static',
  
  // Trailing slashes for clean URLs
  trailingSlash: 'never',
  
  // Build configuration
  build: {
    assets: '_astro',
    outDir: './dist',
  },
  
  // Integrations
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
