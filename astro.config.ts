import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import { countries } from './src/data/countries';
import { isIndexableUrl } from './src/i18n/indexing';
import { defaultLocale, locales, reviewedLocales } from './src/i18n/locales';

const indexingRules = { locales, defaultLocale, reviewedLocales, countries };

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
      i18n: { defaultLocale: 'en', locales: { en: 'en', sl: 'sl-SI' } },
      filter: (page) => isIndexableUrl(indexingRules, page),
      changefreq: 'weekly',
      lastmod: new Date()
    })
  ]
});

export default config;
