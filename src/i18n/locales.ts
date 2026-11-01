export const locales = [
  'en',
  'sl',
  'nb',
  'da',
  'sv',
  'fi',
  'is',
  'fo',
  'et',
  'hr',
  'nl',
  'de',
  'fr'
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Locales whose copy a native speaker reviewed. Pages in other locales are not indexed. */
export const reviewedLocales: readonly Locale[] = ['en'];

/** BCP 47 tags for hreflang and og:locale. */
export const localeTags: Record<Locale, string> = {
  en: 'en',
  sl: 'sl-SI',
  nb: 'nb-NO',
  da: 'da-DK',
  sv: 'sv-SE',
  fi: 'fi-FI',
  is: 'is-IS',
  fo: 'fo-FO',
  et: 'et-EE',
  hr: 'hr-HR',
  nl: 'nl-NL',
  de: 'de-DE',
  fr: 'fr-FR'
};

/** Each language in its own name, for the language menu. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  sl: 'Slovenščina',
  nb: 'Norsk bokmål',
  da: 'Dansk',
  sv: 'Svenska',
  fi: 'Suomi',
  is: 'Íslenska',
  fo: 'Føroyskt',
  et: 'Eesti',
  hr: 'Hrvatski',
  nl: 'Nederlands',
  de: 'Deutsch',
  fr: 'Français'
};

/** Text per locale; English is required and is the fallback for a missing translation. */
export type Localized = { en: string } & Partial<Record<Locale, string>>;

export function localized(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}
