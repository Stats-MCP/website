import type { Locale } from '@/i18n/locales';
import { da } from '@/i18n/strings/da';
import { de } from '@/i18n/strings/de';
import { et } from '@/i18n/strings/et';
import { fi } from '@/i18n/strings/fi';
import { fo } from '@/i18n/strings/fo';
import { fr } from '@/i18n/strings/fr';
import { hr } from '@/i18n/strings/hr';
import { isl } from '@/i18n/strings/is';
import { nb } from '@/i18n/strings/nb';
import { nl } from '@/i18n/strings/nl';
import { sl } from '@/i18n/strings/sl';
import { sv } from '@/i18n/strings/sv';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageSeo {
  title: string;
  description: string;
}

export interface UiStrings {
  seo: {
    home: PageSeo;
    privacy: PageSeo;
    licences: PageSeo;
    countries: PageSeo;
    notFound: PageSeo;
    /** `{country}`, `{database}` and `{office}` are replaced per country. */
    countryLive: PageSeo;
    countryPlanned: PageSeo;
    /** Open Graph card heading for a country, without the site name. */
    countryCard: string;
    figureNumber: string;
  };
  nav: {
    tagline: string;
    howItWorks: string;
    connect: string;
    countries: string;
    faq: string;
    language: string;
    github: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    addToClaude: string;
    addToChatgpt: string;
    endpointLabel: string;
    countryTabs: string;
    status: { live: string; planned: string };
  };
  copy: { copy: string; copied: string };
  figure: {
    caption: string;
    you: string;
    assistant: string;
    toolCalls: string;
    sourceLabel: string;
    plannedTitle: string;
    plannedText: string;
    plannedLink: string;
  };
  keyFiguresLabel: string;
  keyFigures: { value: string; label: string }[];
  howItWorks: {
    title: string;
    stepLabel: string;
    steps: { tool: string; title: string; text: string }[];
  };
  connect: {
    title: string;
    meta: string;
    clientTabs: string;
  };
  countries: {
    title: string;
    headers: {
      code: string;
      country: string;
      source: string;
      languages: string;
      licence: string;
      endpoint: string;
      status: string;
      tables: string;
    };
    details: string;
    propose: string;
    proposeLink: string;
    /** `{count}` is the formatted number of tables. */
    tableCount: string;
    officeSearch: string;
    compareAll: string;
    pageTitle: string;
    pageIntro: string;
    tablesNote: string;
  };
  faq: { title: string; items: FaqItem[] };
  footer: {
    disclaimer: string;
    product: string;
    openSource: string;
    legal: string;
    documentation: string;
    licences: string;
    privacy: string;
    security: string;
  };
  privacy: {
    title: string;
    intro: string;
    points: string[];
    questions: string;
  };
  licences: { title: string; intro: string; attribution: string };
  notFound: { title: string; text: string; home: string };
}

const en: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Official statistics for AI assistants',
      description:
        'Connect Claude, ChatGPT, Cursor and other AI assistants to national statistics databases. Free, read-only, open source. Every answer cites the source.'
    },
    privacy: {
      title: 'Privacy — StatsMCP',
      description:
        'StatsMCP logs nothing: no request logs, no cookies, no analytics. Read what the endpoint and this website do with your data.'
    },
    countries: {
      title: 'Countries and coverage — StatsMCP',
      description:
        'Every country in StatsMCP with its statistics office, data languages, number of tables, data licence and MCP endpoint.'
    },
    licences: {
      title: 'Data licences — StatsMCP',
      description:
        'The data licence and attribution rules of every statistics office in StatsMCP, with links to the official terms of reuse for each country.'
    },
    notFound: {
      title: 'Page not found — StatsMCP',
      description: 'This page does not exist on StatsMCP.'
    },
    countryLive: {
      title: '{country} statistics for AI assistants — StatsMCP',
      description:
        "Ask Claude, ChatGPT or Cursor about {country}'s official statistics from {database} ({office}). Free MCP endpoint, sources in every answer."
    },
    countryPlanned: {
      title: '{country} statistics for AI assistants — StatsMCP',
      description:
        "{country}'s official statistics for Claude, ChatGPT and other AI assistants are coming to StatsMCP. Follow the roadmap on GitHub."
    },
    countryCard: '{country} statistics for AI assistants',
    figureNumber: 'Figure 1'
  },
  nav: {
    tagline: 'Independent · Open source',
    howItWorks: 'How it works',
    connect: 'Connect',
    countries: 'Countries',
    faq: 'FAQ',
    language: 'Language',
    github: 'View on GitHub',
    menu: 'Menu'
  },
  hero: {
    eyebrow: 'Official data, ready for your assistant',
    title: 'Official national statistics for every AI assistant.',
    lead: 'StatsMCP connects Claude, ChatGPT, Cursor and other assistants to the databases of national statistics offices. Every result names its source.',
    addToClaude: 'Add to Claude',
    addToChatgpt: 'Add to ChatGPT',
    endpointLabel: 'Endpoint',
    countryTabs: 'Country',
    status: { live: 'Live', planned: 'Planned' }
  },
  copy: { copy: 'Copy', copied: 'Copied' },
  figure: {
    caption: 'Figure 1 · Example conversation',
    you: 'You',
    assistant: 'Claude',
    toolCalls: '{count} tool calls',
    sourceLabel: 'Source:',
    plannedTitle: '{country} is planned.',
    plannedText:
      'The {database} server is next on the roadmap. Example answers appear here when it goes live.',
    plannedLink: 'Follow progress on GitHub'
  },
  keyFiguresLabel: 'Key figures',
  keyFigures: [
    { value: '{live}', label: 'national statistics databases live' },
    { value: '<1 s', label: 'typical answer from the endpoint' },
    { value: '0', label: 'accounts or API keys needed' },
    { value: 'Source + link', label: 'in every result' }
  ],
  howItWorks: {
    title: 'How it works',
    stepLabel: 'Step',
    steps: [
      {
        tool: 'search_tables',
        title: 'Find the table',
        text: 'The assistant searches thousands of official tables by keyword.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Read the variables',
        text: 'It reads the periods, regions and measures, and finds the codes.'
      },
      {
        tool: 'query_table',
        title: 'Get the figures',
        text: 'It gets the data with readable labels, the source and a link to the table.'
      }
    ]
  },
  connect: {
    title: 'Connect in one step',
    meta: 'Streamable HTTP · read-only · no sign-in',
    clientTabs: 'Client'
  },
  countries: {
    title: 'Countries',
    headers: {
      code: 'Code',
      country: 'Country',
      source: 'Official source',
      languages: 'Languages',
      licence: 'Data licence',
      endpoint: 'Endpoint',
      status: 'Status',
      tables: 'Tables'
    },
    details: 'Details',
    propose: 'Missing your country?',
    proposeLink: 'Propose it on GitHub.',
    tableCount: '{count} tables',
    officeSearch: 'Office search',
    compareAll: 'Compare all countries',
    pageTitle: 'Countries and coverage',
    pageIntro:
      'Every country, its statistics office, the languages of its data, the number of tables, the data licence and the endpoint.',
    tablesNote:
      'Tables: the number of tables in the table index that StatsMCP searches, in the first data language. "Office search" means that the server uses the search of the statistics office.'
  },
  faq: {
    title: 'Questions',
    items: [
      {
        question: 'Is it free?',
        answer:
          'Yes. The hosted endpoints are free, with a limit of 60 requests per minute. The code is under the MIT licence.'
      },
      {
        question: 'Is StatsMCP official?',
        answer:
          "No. StatsMCP is independent and is not affiliated with or endorsed by any statistics office. The data comes directly from each office's public API."
      },
      {
        question: 'Do you store my questions?',
        answer:
          'No. The endpoint writes no logs, and this website uses no cookies or analytics. Read the privacy page.'
      },
      {
        question: 'Can I connect several countries?',
        answer:
          'Yes. Add one connector for each country. The assistant uses the right one for your question.'
      },
      {
        question: 'How can my country be added?',
        answer:
          'If the office publishes its data through PxWeb, we can add it. Open an issue on GitHub.'
      }
    ]
  },
  footer: {
    disclaimer: 'Not affiliated with or endorsed by any statistics office.',
    product: 'Product',
    openSource: 'Open source',
    legal: 'Legal',
    documentation: 'Documentation',
    licences: 'Data licences by country',
    privacy: 'Privacy',
    security: 'Security'
  },
  privacy: {
    title: 'Privacy',
    intro: 'StatsMCP does not log your requests.',
    points: [
      'The hosted endpoint writes no logs. We do not store your questions, the tool calls or the results.',
      'The rate limiter counts requests for each IP address for one minute. It does not keep them after that.',
      'This website uses no cookies, no analytics and no third-party scripts. The fonts are on our own server.',
      'Cloudflare runs the endpoint and this website. Cloudflare processes requests as our host under the Cloudflare privacy policy.',
      'The statistics offices receive the data requests that the server sends to their APIs. These requests do not contain your IP address.'
    ],
    questions: 'Questions: open an issue on GitHub.'
  },
  licences: {
    title: 'Data licences',
    intro:
      'The code of StatsMCP is under the MIT licence. The data belongs to each statistics office, and its terms apply.',
    attribution:
      'If you calculate new figures from the data, say so, for example: "Source: SURS / Calculated by <you>".'
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist.',
    home: 'Go to the home page'
  }
};

/** Slovenian and Norwegian copy is English until a native speaker reviews it (see reviewedLocales). */
export const ui: Record<Locale, UiStrings> = {
  en,
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

export function fill(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template
  );
}
