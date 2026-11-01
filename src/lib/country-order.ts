import type { Country } from '@/data/countries';
import { localeTags, localized, type Locale } from '@/i18n/locales';

/** Eurostat covers every EU and EFTA country, so it leads every list. */
const FIRST = 'eu';

const LOCALE_COUNTRY: Partial<Record<Locale, string>> = {
  sl: 'si',
  nb: 'no',
  da: 'dk',
  sv: 'se',
  fi: 'fi',
  is: 'is',
  fo: 'fo',
  et: 'ee',
  hr: 'hr',
  nl: 'nl'
};

function firstThen(
  countries: readonly Country[],
  compare: (a: Country, b: Country) => number
): Country[] {
  return countries.toSorted(
    (a, b) => Number(b.id === FIRST) - Number(a.id === FIRST) || compare(a, b)
  );
}

export function byCode(countries: readonly Country[]): Country[] {
  return firstThen(countries, (a, b) => a.code.localeCompare(b.code));
}

export function byName(
  countries: readonly Country[],
  locale: Locale
): Country[] {
  const collator = new Intl.Collator(localeTags[locale]);
  return firstThen(countries, (a, b) =>
    collator.compare(localized(a.name, locale), localized(b.name, locale))
  );
}

/** The country a page in this language opens with: the language's own country, else EU. */
export function defaultCountry(
  countries: readonly Country[],
  locale: Locale
): Country {
  const wanted = LOCALE_COUNTRY[locale] ?? FIRST;
  const live = countries.filter((country) => country.status === 'live');
  const found =
    live.find((country) => country.id === wanted) ?? live[0] ?? countries[0];
  if (!found) throw new Error('No countries are configured.');
  return found;
}
