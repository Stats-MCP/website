import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import { isIndexableUrl } from './src/i18n/indexing';
import { defaultLocale, localeTags, locales } from './src/i18n/locales';
import { indexingRules } from './src/i18n/site-indexing';

export const config = defineConfig({
  site: 'https://statsmcp.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { build: { assetsInlineLimit: 0 } },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale, locales: localeTags },
      filter: (page) => isIndexableUrl(indexingRules, page),
      changefreq: 'weekly',
      lastmod: new Date()
    })
  ]
});

export default config;
