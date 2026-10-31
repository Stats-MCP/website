export const locales = ['en', 'sl', 'nb'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Locales whose copy a native speaker reviewed. Pages in other locales are not indexed. */
export const reviewedLocales: readonly Locale[] = ['en'];

/** BCP 47 tags for hreflang and og:locale. */
export const localeTags: Record<Locale, string> = {
  en: 'en',
  sl: 'sl-SI',
  nb: 'nb-NO'
};

export type Localized = Record<Locale, string>;
