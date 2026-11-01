import type { Country } from '@/data/countries';
import type { Locale } from '@/i18n/locales';
import { flagUrl } from '@/lib/flags';

export function countryTabItems(
  countries: readonly Country[],
  locale: Locale,
  options: { compact?: boolean } = {}
): { value: string; label: string; icon?: string; title?: string }[] {
  return countries.map((country) => ({
    value: country.id,
    label: options.compact
      ? country.code
      : `${country.code} · ${country.name[locale]}`,
    icon: flagUrl(country.code),
    ...(options.compact
      ? { title: `${country.code} · ${country.name[locale]}` }
      : {})
  }));
}
