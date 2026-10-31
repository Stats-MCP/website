import type { Country } from '@/data/countries';
import type { Locale } from '@/i18n/locales';

export interface IndexingRules {
  locales: readonly Locale[];
  defaultLocale: Locale;
  reviewedLocales: readonly Locale[];
  countries: readonly Pick<Country, 'slug' | 'status'>[];
}

const neverIndexed = ['404', 'og'];

export function isIndexable(
  rules: IndexingRules,
  locale: Locale,
  countrySlug?: string
): boolean {
  if (!rules.reviewedLocales.includes(locale)) return false;
  if (!countrySlug) return true;
  return rules.countries.some(
    (country) => country.slug === countrySlug && country.status === 'live'
  );
}

function asLocale(
  rules: IndexingRules,
  segment: string | undefined
): Locale | undefined {
  return rules.locales.find(
    (locale) => locale === segment && locale !== rules.defaultLocale
  );
}

export function isIndexableUrl(rules: IndexingRules, url: string): boolean {
  const segments = new URL(url).pathname.split('/').filter(Boolean);
  const prefixed = asLocale(rules, segments[0]);
  const locale = prefixed ?? rules.defaultLocale;
  const rest = prefixed ? segments.slice(1) : segments;
  const first = rest[0];
  if (first && neverIndexed.includes(first)) return false;
  const isCountry = rules.countries.some((country) => country.slug === first);
  return isIndexable(rules, locale, isCountry ? first : undefined);
}
