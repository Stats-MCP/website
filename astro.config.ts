import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export const config = defineConfig({
  site: 'https://statsmcp.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { build: { assetsInlineLimit: 0 } },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sl'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', sl: 'sl-SI' } }
    })
  ]
});

export default config;
