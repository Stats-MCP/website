import type { Country } from '@/data/countries';
import { type Locale, localized } from '@/i18n/locales';
import { byCode } from '@/lib/country-order';
import { flagUrl } from '@/lib/flags';

export function countryTabItems(
  countries: readonly Country[],
  locale: Locale,
  options: { compact?: boolean } = {}
): { value: string; label: string; icon?: string; title?: string }[] {
  return byCode(countries).map((country) => {
    const fullLabel = `${country.code} · ${localized(country.name, locale)}`;
    return {
      value: country.id,
      label: options.compact ? country.code : fullLabel,
      icon: flagUrl(country.code),
      ...(options.compact ? { title: fullLabel } : {})
    };
  });
}
