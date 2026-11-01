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
    name: { en: 'Slovenia', sl: 'Slovenija', nb: 'Slovenia' },
    database: { name: 'SiStat', url: 'https://pxweb.stat.si/SiStat/en' },
    office: {
      name: 'SURS',
      fullName: {
        en: 'Statistical Office of the Republic of Slovenia',
        sl: 'Statistični urad Republike Slovenije',
        nb: 'Det slovenske statistikkbyrået'
      },
      url: 'https://www.stat.si/StatWeb/en'
    },
    licence: {
      label: {
        en: 'Free reuse with attribution',
        sl: 'Prosta uporaba z navedbo vira',
        nb: 'Fri gjenbruk med kildehenvisning'
      },
      url: 'https://www.stat.si/StatWeb/en/StaticPages/Index/Copyright'
    },
    dataLanguages: ['sl', 'en'],
    status: 'live',
    localPackage: 'sistat-mcp',
    example: {
      question: {
        en: 'What is the latest inflation rate in Slovenia?',
        sl: 'Kakšna je zadnja stopnja inflacije v Sloveniji?',
        nb: 'Hva er den siste inflasjonen i Slovenia?'
      },
      answer: {
        en: 'In October 2026, prices were 3.3% higher than in October 2025. Inflation peaked at 3.6% in May and June.',
        sl: 'Oktobra 2026 so bile cene za 3,3 % višje kot oktobra 2025. Inflacija je bila najvišja maja in junija (3,6 %).',
        nb: 'I oktober 2026 var prisene 3,3 % høyere enn i oktober 2025. Inflasjonen var høyest i mai og juni (3,6 %).'
      },
      highlight: { en: '3.3%', sl: '3,3 %', nb: '3,3 %' },
      source: 'SURS, table H281S.px',
      sourceUrl: 'https://pxweb.stat.si/SiStatData/pxweb/en/Data/-/H281S.px',
      seriesLabel: {
        en: 'Annual inflation, %',
        sl: 'Letna inflacija, %',
        nb: 'Årlig inflasjon, %'
      },
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
    name: { en: 'Norway', sl: 'Norveška', nb: 'Norge' },
    database: { name: 'Statbank', url: 'https://www.ssb.no/en/statbank' },
    office: {
      name: 'SSB',
      fullName: {
        en: 'Statistics Norway',
        sl: 'Statistični urad Norveške',
        nb: 'Statistisk sentralbyrå'
      },
      url: 'https://www.ssb.no/en'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://www.ssb.no/en/diverse/lisens'
    },
    dataLanguages: ['no', 'en'],
    status: 'live',
    example: {
      question: {
        en: 'What is the latest inflation rate in Norway?',
        sl: 'Kakšna je zadnja stopnja inflacije na Norveškem?',
        nb: 'Hva er den siste inflasjonen i Norge?'
      },
      answer: {
        en: 'In September 2026, prices were 3.4% higher than in September 2025. Inflation peaked at 3.6% in January and March.',
        sl: 'Septembra 2026 so bile cene za 3,4 % višje kot septembra 2025. Inflacija je bila najvišja januarja in marca (3,6 %).',
        nb: 'I september 2026 var prisene 3,4 % høyere enn i september 2025. Inflasjonen var høyest i januar og mars (3,6 %).'
      },
      highlight: { en: '3.4%', sl: '3,4 %', nb: '3,4 %' },
      source: 'SSB, table 14700',
      sourceUrl: 'https://www.ssb.no/en/statbank/table/14700',
      seriesLabel: {
        en: 'Annual inflation, %',
        sl: 'Letna inflacija, %',
        nb: 'Årlig inflasjon, %'
      },
      series: [
        { period: '2025M10', value: 3.1 },
        { period: '2025M11', value: 3.0 },
        { period: '2025M12', value: 3.2 },
        { period: '2026M01', value: 3.6 },
        { period: '2026M02', value: 2.7 },
        { period: '2026M03', value: 3.6 },
        { period: '2026M04', value: 3.4 },
        { period: '2026M05', value: 3.1 },
        { period: '2026M06', value: 2.7 },
        { period: '2026M07', value: 3.0 },
        { period: '2026M08', value: 3.3 },
        { period: '2026M09', value: 3.4 }
      ]
    }
  },
  {
    id: 'ee',
    slug: 'estonia',
    code: 'EE',
    name: { en: 'Estonia', sl: 'Estonija', nb: 'Estland' },
    database: {
      name: 'Statistical database',
      url: 'https://andmed.stat.ee/en/stat'
    },
    office: {
      name: 'Statistics Estonia',
      fullName: {
        en: 'Statistics Estonia',
        sl: 'Statistični urad Estonije',
        nb: 'Estlands statistikkbyrå'
      },
      url: 'https://www.stat.ee/en'
    },
    licence: {
      label: { en: 'CC BY-SA 4.0', sl: 'CC BY-SA 4.0', nb: 'CC BY-SA 4.0' },
      url: 'https://creativecommons.org/licenses/by-sa/4.0/'
    },
    dataLanguages: ['et', 'en'],
    status: 'live',
    example: {
      question: {
        en: 'What is the latest inflation rate in Estonia?',
        sl: 'Kakšna je zadnja stopnja inflacije v Estoniji?',
        nb: 'Hva er den siste inflasjonen i Estland?'
      },
      answer: {
        en: 'In September 2026, prices were 3.5% higher than in September 2025. Inflation was lowest in August, at 1.5%.',
        sl: 'Septembra 2026 so bile cene za 3,5 % višje kot septembra 2025. Inflacija je bila najnižja avgusta (1,5 %).',
        nb: 'I september 2026 var prisene 3,5 % høyere enn i september 2025. Inflasjonen var lavest i august (1,5 %).'
      },
      highlight: { en: '3.5%', sl: '3,5 %', nb: '3,5 %' },
      source: 'Statistics Estonia, table IA021',
      sourceUrl: 'https://andmed.stat.ee/en/stat/IA021',
      seriesLabel: {
        en: 'Annual inflation, %',
        sl: 'Letna inflacija, %',
        nb: 'Årlig inflasjon, %'
      },
      series: [
        { period: '2025M10', value: 4.6 },
        { period: '2025M11', value: 4.9 },
        { period: '2025M12', value: 4.1 },
        { period: '2026M01', value: 3.7 },
        { period: '2026M02', value: 3.1 },
        { period: '2026M03', value: 3.6 },
        { period: '2026M04', value: 3.4 },
        { period: '2026M05', value: 3.7 },
        { period: '2026M06', value: 2.3 },
        { period: '2026M07', value: 2.2 },
        { period: '2026M08', value: 1.5 },
        { period: '2026M09', value: 3.5 }
      ]
    }
  },
  {
    id: 'fo',
    slug: 'faroe-islands',
    code: 'FO',
    name: { en: 'Faroe Islands', sl: 'Ferski otoki', nb: 'Færøyene' },
    database: {
      name: 'StatBank',
      url: 'https://statbank.hagstova.fo/pxweb/en/H2/'
    },
    office: {
      name: 'Hagstova Føroya',
      fullName: {
        en: 'Statistics Faroe Islands',
        sl: 'Statistični urad Ferskih otokov',
        nb: 'Færøyenes statistikkbyrå'
      },
      url: 'https://hagstova.fo/en'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://hagstova.fo/en/terms-use'
    },
    dataLanguages: ['fo', 'en'],
    status: 'live',
    example: {
      question: {
        en: 'What is the latest inflation rate in the Faroe Islands?',
        sl: 'Kakšna je zadnja stopnja inflacije na Ferskih otokih?',
        nb: 'Hva er den siste inflasjonen på Færøyene?'
      },
      answer: {
        en: 'In August 2026, prices were 2.5% higher than in August 2025. In February 2026, they were 0.2% lower than a year earlier.',
        sl: 'Avgusta 2026 so bile cene za 2,5 % višje kot avgusta 2025. Februarja 2026 so bile za 0,2 % nižje kot leto prej.',
        nb: 'I august 2026 var prisene 2,5 % høyere enn i august 2025. I februar 2026 var de 0,2 % lavere enn året før.'
      },
      highlight: { en: '2.5%', sl: '2,5 %', nb: '2,5 %' },
      source: 'Statistics Faroe Islands, table IP02006',
      sourceUrl:
        'https://statbank.hagstova.fo/pxweb/en/H2/H2__IP__IP02/pris_alt_t.px/',
      seriesLabel: {
        en: 'Annual inflation, %',
        sl: 'Letna inflacija, %',
        nb: 'Årlig inflasjon, %'
      },
      series: [
        { period: '2023M11', value: 2.8 },
        { period: '2024M02', value: 2.6 },
        { period: '2024M05', value: 3.0 },
        { period: '2024M08', value: 1.7 },
        { period: '2024M11', value: 0.8 },
        { period: '2025M02', value: 1.3 },
        { period: '2025M05', value: 0.7 },
        { period: '2025M08', value: 1.1 },
        { period: '2025M11', value: 0.7 },
        { period: '2026M02', value: -0.2 },
        { period: '2026M05', value: 2.4 },
        { period: '2026M08', value: 2.5 }
      ]
    }
  },
  {
    id: 'fi',
    slug: 'finland',
    code: 'FI',
    name: { en: 'Finland', sl: 'Finska', nb: 'Finland' },
    database: {
      name: 'StatFin',
      url: 'https://pxdata.stat.fi/PxWeb/pxweb/en/StatFin/'
    },
    office: {
      name: 'Statistics Finland',
      fullName: {
        en: 'Statistics Finland',
        sl: 'Statistični urad Finske',
        nb: 'Finlands statistikkbyrå'
      },
      url: 'https://stat.fi/en'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://stat.fi/en/about-us/get-to-know-statistics-finland/legislation/terms-of-use'
    },
    dataLanguages: ['fi', 'sv', 'en'],
    status: 'live',
    example: {
      question: {
        en: 'What is the latest inflation rate in Finland?',
        sl: 'Kakšna je zadnja stopnja inflacije na Finskem?',
        nb: 'Hva er den siste inflasjonen i Finland?'
      },
      answer: {
        en: 'In September 2026, prices were 2.5% higher than in September 2025. A year ago, prices were falling slightly.',
        sl: 'Septembra 2026 so bile cene za 2,5 % višje kot septembra 2025. Pred enim letom so cene rahlo padale.',
        nb: 'I september 2026 var prisene 2,5 % høyere enn i september 2025. For et år siden falt prisene litt.'
      },
      highlight: { en: '2.5%', sl: '2,5 %', nb: '2,5 %' },
      source: 'Statistics Finland, table 15b5',
      sourceUrl:
        'https://pxdata.stat.fi/PxWeb/pxweb/en/StatFin/StatFin__khi/15b5.px/',
      seriesLabel: {
        en: 'Annual inflation, %',
        sl: 'Letna inflacija, %',
        nb: 'Årlig inflasjon, %'
      },
      series: [
        { period: '2025M10', value: -0.2 },
        { period: '2025M11', value: -0.1 },
        { period: '2025M12', value: 0.2 },
        { period: '2026M01', value: -0.2 },
        { period: '2026M02', value: 0.6 },
        { period: '2026M03', value: 1.3 },
        { period: '2026M04', value: 1.5 },
        { period: '2026M05', value: 2.1 },
        { period: '2026M06', value: 2.1 },
        { period: '2026M07', value: 2.1 },
        { period: '2026M08', value: 2.2 },
        { period: '2026M09', value: 2.5 }
      ]
    }
  },
  {
    id: 'se',
    slug: 'sweden',
    code: 'SE',
    name: { en: 'Sweden', sl: 'Švedska', nb: 'Sverige' },
    database: {
      name: 'Statistical Database',
      url: 'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/'
    },
    office: {
      name: 'SCB',
      fullName: {
        en: 'Statistics Sweden',
        sl: 'Statistični urad Švedske',
        nb: 'Statistiska centralbyrån'
      },
      url: 'https://www.scb.se/en/'
    },
    licence: {
      label: { en: 'CC0', sl: 'CC0', nb: 'CC0' },
      url: 'https://creativecommons.org/publicdomain/zero/1.0/'
    },
    dataLanguages: ['sv', 'en'],
    status: 'live',
    example: {
      question: {
        en: 'What is the latest inflation rate in Sweden?',
        sl: 'Kakšna je zadnja stopnja inflacije na Švedskem?',
        nb: 'Hva er den siste inflasjonen i Sverige?'
      },
      answer: {
        en: 'In September 2026, prices were 1.1% higher than in September 2025. In April 2026, they were 0.1% lower than a year earlier.',
        sl: 'Septembra 2026 so bile cene za 1,1 % višje kot septembra 2025. Aprila 2026 so bile za 0,1 % nižje kot leto prej.',
        nb: 'I september 2026 var prisene 1,1 % høyere enn i september 2025. I april 2026 var de 0,1 % lavere enn året før.'
      },
      highlight: { en: '1.1%', sl: '1,1 %', nb: '1,1 %' },
      source: 'Statistics Sweden, table TAB6596',
      sourceUrl:
        'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__PR__PR0101__PR0101A/KPI2020M/',
      seriesLabel: {
        en: 'Annual inflation, %',
        sl: 'Letna inflacija, %',
        nb: 'Årlig inflasjon, %'
      },
      series: [
        { period: '2025M10', value: 0.9 },
        { period: '2025M11', value: 0.3 },
        { period: '2025M12', value: 0.3 },
        { period: '2026M01', value: 0.5 },
        { period: '2026M02', value: 0.5 },
        { period: '2026M03', value: 0.5 },
        { period: '2026M04', value: -0.1 },
        { period: '2026M05', value: 0.8 },
        { period: '2026M06', value: 0.7 },
        { period: '2026M07', value: 0.2 },
        { period: '2026M08', value: 0.3 },
        { period: '2026M09', value: 1.1 }
      ]
    }
  },
  {
    id: 'is',
    slug: 'iceland',
    code: 'IS',
    name: { en: 'Iceland', sl: 'Islandija', nb: 'Island' },
    database: { name: 'Statistics Iceland', url: 'https://www.statice.is/' },
    office: {
      name: 'Statistics Iceland',
      fullName: {
        en: 'Statistics Iceland',
        sl: 'Statistični urad Islandije',
        nb: 'Islands statistikkbyrå'
      },
      url: 'https://www.statice.is/'
    },
    licence: { label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' } },
    dataLanguages: ['is', 'en'],
    status: 'planned'
  }
];

validateCountries(countries);
