import type { Country } from '@/data/countries';
import type { Locale } from '@/i18n/locales';

export function countryTabItems(
  countries: readonly Country[],
  locale: Locale
): { value: string; label: string }[] {
  return countries.map((country) => ({
    value: country.id,
    label: `${country.code} · ${country.name[locale]}`
  }));
}
