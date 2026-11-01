import type { ClientSteps } from '@/data/client-text';
import { da } from '@/i18n/client-steps/da';
import { de } from '@/i18n/client-steps/de';
import { et } from '@/i18n/client-steps/et';
import { fi } from '@/i18n/client-steps/fi';
import { fo } from '@/i18n/client-steps/fo';
import { fr } from '@/i18n/client-steps/fr';
import { hr } from '@/i18n/client-steps/hr';
import { isl } from '@/i18n/client-steps/is';
import { nb } from '@/i18n/client-steps/nb';
import { nl } from '@/i18n/client-steps/nl';
import { sl } from '@/i18n/client-steps/sl';
import { sv } from '@/i18n/client-steps/sv';
import type { Locale } from '@/i18n/locales';

export const translatedSteps: Partial<Record<Locale, ClientSteps>> = {
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
