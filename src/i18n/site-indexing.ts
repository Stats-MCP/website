import { countries } from '@/data/countries';
import type { IndexingRules } from '@/i18n/indexing';
import { defaultLocale, locales, reviewedLocales } from '@/i18n/locales';

export const indexingRules: IndexingRules = {
  locales,
  defaultLocale,
  reviewedLocales,
  countries
};
