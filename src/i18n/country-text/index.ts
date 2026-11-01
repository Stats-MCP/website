import type { CountryText } from '@/data/country-text';
import { da } from '@/i18n/country-text/da';
import { de } from '@/i18n/country-text/de';
import { et } from '@/i18n/country-text/et';
import { fi } from '@/i18n/country-text/fi';
import { fo } from '@/i18n/country-text/fo';
import { fr } from '@/i18n/country-text/fr';
import { hr } from '@/i18n/country-text/hr';
import { isl } from '@/i18n/country-text/is';
import { nb } from '@/i18n/country-text/nb';
import { nl } from '@/i18n/country-text/nl';
import { sl } from '@/i18n/country-text/sl';
import { sv } from '@/i18n/country-text/sv';
import type { Locale } from '@/i18n/locales';

export const countryTexts: Partial<Record<Locale, CountryText>> = {
  sl: sl,
  nb: nb,
  da: da,
  sv: sv,
  fi: fi,
  is: isl,
  fo: fo,
  et: et,
  hr: hr,
  nl: nl,
  de: de,
  fr: fr
};
