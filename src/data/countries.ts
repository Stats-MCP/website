import type { Localized } from '@/i18n/locales';

export type CountryStatus = 'live' | 'planned';

export interface Country {
  /** Endpoint id: `si` → /si/mcp */
  id: string;
  /** Page slug, the English country name: `slovenia` → /slovenia/ */
  slug: string;
  code: string;
  name: Localized;
  database: { name: string; url: string };
  office: { name: string; fullName: Localized; url: string };
  licence: { label: Localized; url?: string };
  dataLanguages: string[];
  status: CountryStatus;
  localPackage?: string;
  example?: CountryExample;
}

export interface CountryExample {
  question: Localized;
  answer: Localized;
  /** Part of the answer to emphasise; must appear verbatim in `answer`. */
  highlight: Localized;
  source: string;
  sourceUrl: string;
  seriesLabel: Localized;
  series: { period: string; value: number }[];
}

const reservedSlugs = ['privacy', 'licences', 'og', '404'];

export function validateCountries(list: readonly Country[]): void {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const country of list) {
    if (!/^[a-z]{2}$/.test(country.id) || ids.has(country.id)) {
      throw new Error(`Invalid country id "${country.id}".`);
    }
    const validSlug =
      /^[a-z]+(-[a-z]+)*$/.test(country.slug) &&
      country.slug.length > 2 &&
      !reservedSlugs.includes(country.slug);
    if (!validSlug || slugs.has(country.slug)) {
      throw new Error(`Invalid country slug "${country.slug}".`);
    }
    ids.add(country.id);
    slugs.add(country.slug);
    const highlights = new Map(
      Object.entries(country.example?.highlight ?? {})
    );
    for (const [locale, answer] of Object.entries(
      country.example?.answer ?? {}
    )) {
      const highlight = highlights.get(locale);
      if (highlight && !answer.includes(highlight)) {
        throw new Error(
          `Highlight "${highlight}" is missing from the ${country.id} ${locale} answer.`
        );
      }
    }
  }
}

export function endpoint(country: Country): string {
  return `https://statsmcp.dev/${country.id}/mcp`;
}

export const countries: Country[] = [
  {
    id: 'si',
    slug: 'slovenia',
    code: 'SI',
    name: { en: 'Slovenia', sl: 'Slovenija' },
    database: { name: 'SiStat', url: 'https://pxweb.stat.si/SiStat/en' },
    office: {
      name: 'SURS',
      fullName: {
        en: 'Statistical Office of the Republic of Slovenia',
        sl: 'Statistični urad Republike Slovenije'
      },
      url: 'https://www.stat.si/StatWeb/en'
    },
    licence: {
      label: {
        en: 'Free reuse with attribution',
        sl: 'Prosta uporaba z navedbo vira'
      },
      url: 'https://www.stat.si/StatWeb/en/StaticPages/Index/Copyright'
    },
    dataLanguages: ['sl', 'en'],
    status: 'live',
    localPackage: 'sistat-mcp',
    example: {
      question: {
        en: 'What is the latest inflation rate in Slovenia?',
        sl: 'Kakšna je zadnja stopnja inflacije v Sloveniji?'
      },
      answer: {
        en: 'In October 2026, prices were 3.3% higher than in October 2025. Inflation peaked at 3.6% in May and June.',
        sl: 'Oktobra 2026 so bile cene za 3,3 % višje kot oktobra 2025. Inflacija je bila najvišja maja in junija (3,6 %).'
      },
      highlight: { en: '3.3%', sl: '3,3 %' },
      source: 'SURS, table H281S.px',
      sourceUrl: 'https://pxweb.stat.si/SiStatData/pxweb/en/Data/-/H281S.px',
      seriesLabel: { en: 'Annual inflation, %', sl: 'Letna inflacija, %' },
      series: [
        { period: '2025M11', value: 2.3 },
        { period: '2025M12', value: 2.7 },
        { period: '2026M01', value: 2.6 },
        { period: '2026M02', value: 2.9 },
        { period: '2026M03', value: 2.5 },
        { period: '2026M04', value: 3.1 },
        { period: '2026M05', value: 3.6 },
        { period: '2026M06', value: 3.6 },
        { period: '2026M07', value: 2.9 },
        { period: '2026M08', value: 3.0 },
        { period: '2026M09', value: 3.3 },
        { period: '2026M10', value: 3.3 }
      ]
    }
  },
  {
    id: 'no',
    slug: 'norway',
    code: 'NO',
    name: { en: 'Norway', sl: 'Norveška' },
    database: { name: 'Statbank', url: 'https://www.ssb.no/en/statbank' },
    office: {
      name: 'SSB',
      fullName: { en: 'Statistics Norway', sl: 'Statistični urad Norveške' },
      url: 'https://www.ssb.no/en'
    },
    licence: { label: { en: 'CC BY 4.0', sl: 'CC BY 4.0' } },
    dataLanguages: ['no', 'en'],
    status: 'planned'
  },
  {
    id: 'is',
    slug: 'iceland',
    code: 'IS',
    name: { en: 'Iceland', sl: 'Islandija' },
    database: { name: 'Statistics Iceland', url: 'https://www.statice.is/' },
    office: {
      name: 'Statistics Iceland',
      fullName: { en: 'Statistics Iceland', sl: 'Statistični urad Islandije' },
      url: 'https://www.statice.is/'
    },
    licence: { label: { en: 'CC BY 4.0', sl: 'CC BY 4.0' } },
    dataLanguages: ['is', 'en'],
    status: 'planned'
  }
];

validateCountries(countries);
