import { getRelativeLocaleUrl } from 'astro:i18n';

import type { Locale } from '@/i18n/locales';

export function localePath(locale: Locale, path = ''): string {
  return getRelativeLocaleUrl(locale, path.replace(/^\/+/, ''));
}
