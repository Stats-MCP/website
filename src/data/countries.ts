import type { CountryText } from '@/data/country-text';
import { countryTexts } from '@/i18n/country-text';
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
  /** Tables in the crawled table index, first data language; unset when search uses the office's own API. */
  tables?: number;
  status: CountryStatus;
  localPackage?: string;
  /** Search works, but the hosted endpoint cannot query table data. */
  limited?: true;
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
  /** Decimals for chart labels; 1 for rates, 0 for counts. */
  decimals?: number;
}

const reservedSlugs = ['privacy', 'licences', 'countries', 'og', '404'];

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

/** Label key for the status badge: a limited source shows "Search only". */
export function statusKey(country: Country): CountryStatus | 'limited' {
  return country.limited ? 'limited' : country.status;
}

/** The official tables in the search index, rounded down to the thousand. */
export function indexedTables(list: readonly Country[]): number {
  const total = list.reduce((sum, country) => sum + (country.tables ?? 0), 0);
  return Math.floor(total / 1000) * 1000;
}

export function endpoint(country: Country): string {
  return `https://statsmcp.dev/${country.id}/mcp`;
}

const baseCountries: Country[] = [
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
    localPackage: '@statsmcp/sistat',
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
    localPackage: '@statsmcp/ssb',
    example: {
      question: { en: 'How have house prices changed in Norway?' },
      answer: {
        en: 'The price index for existing dwellings in Norway was 158.3 in Q3 2026 (2015 = 100). In Q3 2025, it was 153.2.'
      },
      highlight: { en: '158.3' },
      source: 'SSB, table 07221',
      sourceUrl: 'https://www.ssb.no/en/statbank/table/07221',
      seriesLabel: { en: 'House price index, existing dwellings (2015 = 100)' },
      decimals: 1,
      series: [
        { period: '2023Q4', value: 136.4 },
        { period: '2024Q1', value: 141.7 },
        { period: '2024Q2', value: 147.7 },
        { period: '2024Q3', value: 145.9 },
        { period: '2024Q4', value: 143 },
        { period: '2025Q1', value: 150.9 },
        { period: '2025Q2', value: 154.4 },
        { period: '2025Q3', value: 153.2 },
        { period: '2025Q4', value: 151.5 },
        { period: '2026Q1', value: 156.7 },
        { period: '2026Q2', value: 161.2 },
        { period: '2026Q3', value: 158.3 }
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
    localPackage: '@statsmcp/stat-ee',
    example: {
      question: { en: 'What is the average monthly wage in Estonia?' },
      answer: {
        en: 'The average gross monthly wage in Estonia was €2,243 in Q2 2026. In Q2 2025, it was €2,126.'
      },
      highlight: { en: '€2,243' },
      source: 'Statistics Estonia, table PA111',
      sourceUrl: 'https://andmed.stat.ee/en/stat/PA111',
      seriesLabel: { en: 'Average gross monthly wage, €' },
      decimals: 0,
      series: [
        { period: '2023Q3', value: 1812 },
        { period: '2023Q4', value: 1904 },
        { period: '2024Q1', value: 1894 },
        { period: '2024Q2', value: 2007 },
        { period: '2024Q3', value: 1959 },
        { period: '2024Q4', value: 2062 },
        { period: '2025Q1', value: 2011 },
        { period: '2025Q2', value: 2126 },
        { period: '2025Q3', value: 2075 },
        { period: '2025Q4', value: 2155 },
        { period: '2026Q1', value: 2135 },
        { period: '2026Q2', value: 2243 }
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
    localPackage: '@statsmcp/hagstova',
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
    localPackage: '@statsmcp/statfin',
    example: {
      question: { en: 'How high is unemployment in Finland?' },
      answer: {
        en: 'The trend unemployment rate in Finland was 10.5% in September 2026. In September 2025, it was 10.0%.'
      },
      highlight: { en: '10.5%' },
      source: 'Statistics Finland, table 135z',
      sourceUrl:
        'https://pxdata.stat.fi/PxWeb/pxweb/en/StatFin/StatFin__tyti/135z.px/',
      seriesLabel: { en: 'Unemployment rate, trend, %' },
      decimals: 1,
      series: [
        { period: '2023M12', value: 7.7 },
        { period: '2024M03', value: 8.1 },
        { period: '2024M06', value: 8.4 },
        { period: '2024M09', value: 8.6 },
        { period: '2024M12', value: 8.9 },
        { period: '2025M03', value: 9.2 },
        { period: '2025M06', value: 9.6 },
        { period: '2025M09', value: 10 },
        { period: '2025M12', value: 10.3 },
        { period: '2026M03', value: 10.5 },
        { period: '2026M06', value: 10.4 },
        { period: '2026M09', value: 10.5 }
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
    tables: 4278,
    status: 'live',
    localPackage: '@statsmcp/scb',
    example: {
      question: { en: 'How many people live in Sweden?' },
      answer: {
        en: 'Sweden had 10,621,103 inhabitants in August 2026. In August 2025, it had 10,605,098.'
      },
      highlight: { en: '10,621,103' },
      source: 'SCB, table TAB6471',
      sourceUrl:
        'https://www.statistikdatabasen.scb.se/pxweb/en/ssd/START__BE__BE0101__BE0101A/BefolkManadCKM/',
      seriesLabel: { en: 'Population, persons' },
      decimals: 0,
      series: [
        { period: '2025M09', value: 10609460 },
        { period: '2025M10', value: 10610485 },
        { period: '2025M11', value: 10608003 },
        { period: '2025M12', value: 10605529 },
        { period: '2026M01', value: 10604464 },
        { period: '2026M02', value: 10604061 },
        { period: '2026M03', value: 10604616 },
        { period: '2026M04', value: 10605725 },
        { period: '2026M05', value: 10608128 },
        { period: '2026M06', value: 10610483 },
        { period: '2026M07', value: 10613531 },
        { period: '2026M08', value: 10621103 }
      ]
    }
  },
  {
    id: 'dk',
    slug: 'denmark',
    code: 'DK',
    name: { en: 'Denmark', sl: 'Danska', nb: 'Danmark' },
    database: { name: 'StatBank Denmark', url: 'https://www.statbank.dk/' },
    office: {
      name: 'Statistics Denmark',
      fullName: {
        en: 'Statistics Denmark',
        sl: 'Statistični urad Danske',
        nb: 'Danmarks Statistik'
      },
      url: 'https://www.dst.dk/en'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://www.dst.dk/en/Statistik/brug-statistikken/kildeangivelse'
    },
    dataLanguages: ['da', 'en'],
    tables: 2311,
    status: 'live',
    localPackage: '@statsmcp/dst',
    example: {
      question: { en: 'How many people are unemployed in Denmark?' },
      answer: {
        en: 'Denmark had 83,055 net unemployed persons in September 2026, seasonally adjusted. In September 2025, the number was 77,523.'
      },
      highlight: { en: '83,055' },
      source: 'Statistics Denmark, table AUS07',
      sourceUrl: 'https://www.statbank.dk/AUS07',
      seriesLabel: { en: 'Net unemployed, seasonally adjusted, persons' },
      decimals: 0,
      series: [
        { period: '2023M12', value: 75103 },
        { period: '2024M03', value: 75574 },
        { period: '2024M06', value: 76096 },
        { period: '2024M09', value: 77578 },
        { period: '2024M12', value: 77341 },
        { period: '2025M03', value: 76406 },
        { period: '2025M06', value: 76791 },
        { period: '2025M09', value: 77523 },
        { period: '2025M12', value: 78600 },
        { period: '2026M03', value: 80670 },
        { period: '2026M06', value: 82035 },
        { period: '2026M09', value: 83055 }
      ]
    }
  },
  {
    id: 'nl',
    slug: 'netherlands',
    code: 'NL',
    name: { en: 'Netherlands', sl: 'Nizozemska', nb: 'Nederland' },
    database: { name: 'StatLine', url: 'https://opendata.cbs.nl/' },
    office: {
      name: 'CBS',
      fullName: {
        en: 'Statistics Netherlands',
        sl: 'Statistični urad Nizozemske',
        nb: 'Nederlands statistikkbyrå'
      },
      url: 'https://www.cbs.nl/en-gb'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://www.cbs.nl/en-gb/about-us/website/copyright'
    },
    dataLanguages: ['nl', 'en'],
    tables: 4890,
    status: 'live',
    localPackage: '@statsmcp/cbs',
    example: {
      question: { en: 'How many people live in the Netherlands?' },
      answer: {
        en: 'The Netherlands had 18,192,693 inhabitants at the end of September 2026. One year earlier, it had 18,122,384.'
      },
      highlight: { en: '18,192,693' },
      source: 'CBS, table 83474NED',
      sourceUrl: 'https://www.cbs.nl/en-gb/figures/detail/83474NED',
      seriesLabel: { en: 'Population at end of month, persons' },
      decimals: 0,
      series: [
        { period: '2023M12', value: 17942942 },
        { period: '2024M03', value: 17962646 },
        { period: '2024M06', value: 17980823 },
        { period: '2024M09', value: 18027198 },
        { period: '2024M12', value: 18044027 },
        { period: '2025M03', value: 18064104 },
        { period: '2025M06', value: 18080788 },
        { period: '2025M09', value: 18122384 },
        { period: '2025M12', value: 18130208 },
        { period: '2026M03', value: 18139823 },
        { period: '2026M06', value: 18153386 },
        { period: '2026M09', value: 18192693 }
      ]
    }
  },
  {
    id: 'eu',
    slug: 'eurostat',
    code: 'EU',
    name: { en: 'EU and EFTA', sl: 'EU in EFTA', nb: 'EU og EFTA' },
    database: {
      name: 'Eurostat',
      url: 'https://ec.europa.eu/eurostat/data/database'
    },
    office: {
      name: 'European Commission',
      fullName: {
        en: 'Eurostat, the statistical office of the European Union',
        sl: 'Eurostat, statistični urad Evropske unije',
        nb: 'Eurostat, EUs statistikkontor'
      },
      url: 'https://ec.europa.eu/eurostat'
    },
    licence: {
      label: {
        en: 'Free reuse with attribution',
        sl: 'Prosta uporaba z navedbo vira',
        nb: 'Fri gjenbruk med kildehenvisning'
      },
      url: 'https://ec.europa.eu/eurostat/help/copyright-notice'
    },
    dataLanguages: ['en', 'de', 'fr'],
    tables: 7603,
    status: 'live',
    localPackage: '@statsmcp/eurostat',
    example: {
      question: { en: 'What is the unemployment rate in the EU?' },
      answer: {
        en: 'The EU unemployment rate was 6.2% in September 2026, seasonally adjusted. In September 2025, it was 6.0%.'
      },
      highlight: { en: '6.2%' },
      source: 'Eurostat, table une_rt_m',
      sourceUrl:
        'https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en',
      seriesLabel: { en: 'EU27 unemployment rate, seasonally adjusted, %' },
      decimals: 1,
      series: [
        { period: '2023M12', value: 6.1 },
        { period: '2024M03', value: 6 },
        { period: '2024M06', value: 6 },
        { period: '2024M09', value: 5.9 },
        { period: '2024M12', value: 5.9 },
        { period: '2025M03', value: 6 },
        { period: '2025M06', value: 6 },
        { period: '2025M09', value: 6 },
        { period: '2025M12', value: 6 },
        { period: '2026M03', value: 6.1 },
        { period: '2026M06', value: 6.2 },
        { period: '2026M09', value: 6.2 }
      ]
    }
  },
  {
    id: 'ca',
    slug: 'canada',
    code: 'CA',
    name: { en: 'Canada', sl: 'Kanada', nb: 'Canada' },
    database: {
      name: 'Statistics Canada data tables',
      url: 'https://www150.statcan.gc.ca/n1/en/type/data'
    },
    office: {
      name: 'Statistics Canada',
      fullName: {
        en: 'Statistics Canada',
        sl: 'Statistični urad Kanade',
        nb: 'Canadas statistikkbyrå'
      },
      url: 'https://www.statcan.gc.ca/en/start'
    },
    licence: {
      label: { en: 'Open Licence', sl: 'Odprta licenca', nb: 'Åpen lisens' },
      url: 'https://www.statcan.gc.ca/en/reference/licence'
    },
    dataLanguages: ['en', 'fr'],
    tables: 8280,
    status: 'live',
    localPackage: '@statsmcp/statcan',
    example: {
      question: { en: 'What is the unemployment rate in Canada?' },
      answer: {
        en: 'The unemployment rate in Canada was 6.5% in September 2026, seasonally adjusted. In September 2025, it was 7.1%.'
      },
      highlight: { en: '6.5%' },
      source: 'Statistics Canada, table 14-10-0287',
      sourceUrl:
        'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701',
      seriesLabel: { en: 'Unemployment rate, seasonally adjusted, %' },
      decimals: 1,
      series: [
        { period: '2023M12', value: 5.8 },
        { period: '2024M03', value: 6.1 },
        { period: '2024M06', value: 6.4 },
        { period: '2024M09', value: 6.5 },
        { period: '2024M12', value: 6.7 },
        { period: '2025M03', value: 6.8 },
        { period: '2025M06', value: 6.9 },
        { period: '2025M09', value: 7.1 },
        { period: '2025M12', value: 6.8 },
        { period: '2026M03', value: 6.7 },
        { period: '2026M06', value: 6.5 },
        { period: '2026M09', value: 6.5 }
      ]
    }
  },
  {
    id: 'is',
    slug: 'iceland',
    code: 'IS',
    name: { en: 'Iceland', sl: 'Islandija', nb: 'Island' },
    database: {
      name: 'PX-Web',
      url: 'https://px.hagstofa.is/pxen/pxweb/en/'
    },
    office: {
      name: 'Statistics Iceland',
      fullName: {
        en: 'Statistics Iceland',
        sl: 'Statistični urad Islandije',
        nb: 'Islands statistikkbyrå'
      },
      url: 'https://www.statice.is/'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://statice.is/publications/open-data-access'
    },
    dataLanguages: ['is', 'en'],
    tables: 1906,
    status: 'live',
    localPackage: '@statsmcp/statice',
    example: {
      question: { en: 'How fast are wages rising in Iceland?' },
      answer: {
        en: 'Wages in Iceland were 5.6% higher in September 2026 than one year earlier. In September 2025, the annual increase was 7.8%.'
      },
      highlight: { en: '5.6%' },
      source: 'Statistics Iceland, table LAU04000',
      sourceUrl:
        'https://px.hagstofa.is/pxen/pxweb/en/Samfelag/Samfelag__launogtekjur__2_lvt__1_manadartolur/LAU04000.px/',
      seriesLabel: { en: 'Wage index, annual change, %' },
      decimals: 1,
      series: [
        { period: '2023M12', value: 6.7 },
        { period: '2024M03', value: 8.3 },
        { period: '2024M06', value: 6 },
        { period: '2024M09', value: 6.1 },
        { period: '2024M12', value: 6.4 },
        { period: '2025M03', value: 6.9 },
        { period: '2025M06', value: 8.2 },
        { period: '2025M09', value: 7.8 },
        { period: '2025M12', value: 7 },
        { period: '2026M03', value: 6.8 },
        { period: '2026M06', value: 5.8 },
        { period: '2026M09', value: 5.6 }
      ]
    }
  },
  {
    id: 'hr',
    slug: 'croatia',
    code: 'HR',
    name: { en: 'Croatia', sl: 'Hrvaška', nb: 'Kroatia' },
    database: {
      name: 'PX-Web',
      url: 'https://web.dzs.hr/PXWeb/pxweb/en/'
    },
    office: {
      name: 'DZS',
      fullName: {
        en: 'Croatian Bureau of Statistics',
        sl: 'Hrvaški statistični urad',
        nb: 'Kroatias statistikkbyrå'
      },
      url: 'https://dzs.gov.hr/'
    },
    licence: {
      label: {
        en: 'Open Licence (Croatia)',
        sl: 'Odprta licenca (Hrvaška)',
        nb: 'Åpen lisens (Kroatia)'
      },
      url: 'https://web.dzs.hr/Hrv/about_us/Legals/Open%20Licence.pdf'
    },
    dataLanguages: ['hr', 'en'],
    tables: 874,
    status: 'live',
    localPackage: '@statsmcp/dzs',
    example: {
      question: { en: 'How many tourist arrivals did Croatia have in August?' },
      answer: {
        en: 'In August 2026, there were 4,823,649 tourist arrivals at commercial accommodation in Croatia. In August 2025, there were 4,714,658.'
      },
      highlight: { en: '4,823,649' },
      source: 'DZS, table BS_TU11',
      sourceUrl:
        'https://web.dzs.hr/PXWeb/pxweb/en/Turizam/Turizam__Dolasci%20i%20no%C4%87enja%20turista%20u%20komercijalnim%20smje%C5%A1tajnim%20objektima/BS_TU11.px/',
      seriesLabel: { en: 'Tourist arrivals, persons' },
      decimals: 0,
      series: [
        { period: '2023M11', value: 368797 },
        { period: '2024M02', value: 312454 },
        { period: '2024M05', value: 1941800 },
        { period: '2024M08', value: 4692918 },
        { period: '2024M11', value: 444234 },
        { period: '2025M02', value: 313006 },
        { period: '2025M05', value: 1842725 },
        { period: '2025M08', value: 4714658 },
        { period: '2025M11', value: 414355 },
        { period: '2026M02', value: 328139 },
        { period: '2026M05', value: 2010430 },
        { period: '2026M08', value: 4823649 }
      ]
    }
  },
  {
    id: 'ie',
    slug: 'ireland',
    code: 'IE',
    name: { en: 'Ireland', sl: 'Irska', nb: 'Irland' },
    database: { name: 'PxStat', url: 'https://data.cso.ie/' },
    office: {
      name: 'CSO',
      fullName: {
        en: 'Central Statistics Office',
        sl: 'Centralni statistični urad Irske',
        nb: 'Irlands sentrale statistikkontor'
      },
      url: 'https://www.cso.ie/en/'
    },
    licence: {
      label: { en: 'CC BY 4.0', sl: 'CC BY 4.0', nb: 'CC BY 4.0' },
      url: 'https://www.cso.ie/en/aboutus/whoweare/copyrightpolicy/'
    },
    dataLanguages: ['en'],
    tables: 13164,
    status: 'live',
    localPackage: '@statsmcp/cso',
    example: {
      question: { en: 'How fast are property prices rising in Ireland?' },
      answer: {
        en: 'Residential property prices in Ireland rose 5.1% in the 12 months to August 2026. In August 2025, the annual rise was 7.5%.'
      },
      highlight: { en: '5.1%' },
      source: 'CSO, table HPM09',
      sourceUrl: 'https://data.cso.ie/table/HPM09',
      seriesLabel: { en: 'Property prices, 12-month change, %' },
      decimals: 1,
      series: [
        { period: '2023M11', value: 3 },
        { period: '2024M02', value: 6.2 },
        { period: '2024M05', value: 8.5 },
        { period: '2024M08', value: 10.1 },
        { period: '2024M11', value: 9.6 },
        { period: '2025M02', value: 8 },
        { period: '2025M05', value: 7.8 },
        { period: '2025M08', value: 7.5 },
        { period: '2025M11', value: 6.8 },
        { period: '2026M02', value: 6.7 },
        { period: '2026M05', value: 6.1 },
        { period: '2026M08', value: 5.1 }
      ]
    }
  },
  {
    id: 'au',
    slug: 'australia',
    code: 'AU',
    name: { en: 'Australia' },
    database: {
      name: 'ABS Data API',
      url: 'https://www.abs.gov.au/about/data-services/application-programming-interfaces-apis/data-api-user-guide'
    },
    office: {
      name: 'ABS',
      fullName: { en: 'Australian Bureau of Statistics' },
      url: 'https://www.abs.gov.au/'
    },
    licence: {
      label: { en: 'CC BY 4.0' },
      url: 'https://www.abs.gov.au/website-privacy-copyright-and-disclaimer#copyright-and-creative-commons'
    },
    dataLanguages: ['en'],
    tables: 1228,
    status: 'live',
    localPackage: '@statsmcp/abs',
    example: {
      question: { en: 'How fast are prices rising in Australia?' },
      answer: {
        en: 'Consumer prices in Australia rose 4.3% in the 12 months to September 2026. In September 2025, the annual rise was 3.6%.'
      },
      highlight: { en: '4.3%' },
      source: 'ABS, table CPI',
      sourceUrl:
        'https://dataexplorer.abs.gov.au/vis?df[ds]=ABS_ABS_TOPICS&df[id]=CPI&df[ag]=ABS',
      seriesLabel: { en: 'Consumer prices, 12-month change, %' },
      decimals: 1,
      series: [
        { period: '2025M10', value: 3.8 },
        { period: '2025M11', value: 3.4 },
        { period: '2025M12', value: 3.8 },
        { period: '2026M01', value: 3.8 },
        { period: '2026M02', value: 3.7 },
        { period: '2026M03', value: 4.6 },
        { period: '2026M04', value: 4.2 },
        { period: '2026M05', value: 4 },
        { period: '2026M06', value: 3.8 },
        { period: '2026M07', value: 3.5 },
        { period: '2026M08', value: 4 },
        { period: '2026M09', value: 4.3 }
      ]
    }
  }
];

function withText(
  value: Localized,
  pick: (text: CountryText[string]) => string | undefined,
  id: string
): Localized {
  const added = Object.fromEntries(
    Object.entries(countryTexts).flatMap(([locale, texts]) => {
      const text = texts?.[id];
      const translated = text ? pick(text) : undefined;
      return translated === undefined ? [] : [[locale, translated]];
    })
  );
  return { ...added, ...value };
}

function translate(country: Country): Country {
  const id = country.id;
  const example = country.example;
  return {
    ...country,
    name: withText(country.name, (text) => text.name, id),
    office: {
      ...country.office,
      fullName: withText(country.office.fullName, (text) => text.office, id)
    },
    licence: {
      ...country.licence,
      label: withText(country.licence.label, (text) => text.licence, id)
    },
    ...(example
      ? {
          example: {
            ...example,
            question: withText(
              example.question,
              (text) => text.example?.question,
              id
            ),
            answer: withText(
              example.answer,
              (text) => text.example?.answer,
              id
            ),
            highlight: withText(
              example.highlight,
              (text) => text.example?.highlight,
              id
            ),
            seriesLabel: withText(
              example.seriesLabel,
              (text) => text.example?.seriesLabel,
              id
            )
          }
        }
      : {})
  };
}

export const countries: Country[] = baseCountries.map(translate);

validateCountries(countries);
