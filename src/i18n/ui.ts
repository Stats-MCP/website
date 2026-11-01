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
    /** `{countries}` and `{offices}` are numbers. */
    title: string;
    lead: string;
    addToClaude: string;
    addToChatgpt: string;
    allEndpointLabel: string;
    otherAssistants: string;
    oneCountry: string;
    endpointLabel: string;
    countryTabs: string;
    status: { live: string; planned: string; limited: string };
    /** Shown for a source whose data queries do not work from the hosted endpoint. */
    limitedNote: string;
    privacy: string;
  };
  copy: { copy: string; copied: string };
  home: {
    title: string;
    /** `{offices}` and `{tables}` are filled from the country data. */
    lead: string;
    compareQuestion: string;
    /** `{period}`, `{canada}` and `{eu}` come from the Canada and EU examples. */
    compareAnswer: string;
    euShort: string;
    tryTitle: string;
  };
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
  audiences: {
    title: string;
    items: { who: string; text: string; prompt: string }[];
  };
  howItWorks: {
    title: string;
    stepLabel: string;
    steps: { tool: string; title: string; text: string }[];
  };
  connect: {
    title: string;
    meta: string;
    clientTabs: string;
    otherClients: string;
    runLocally: string;
    /** Fills `{country}` in client steps for the all-countries endpoint. */
    allCountries: string;
    oneOfficeLink: string;
  };
  countryPage: {
    /** `{country}` is the country name. */
    title: string;
    /** `{tables}`, `{office}` and `{licence}` are filled per country. */
    leadIndexed: string;
    leadOffice: string;
    /** `{count}` is the number of sources. */
    seeAll: string;
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
    /** `{offices}` is the number of live offices. */
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
        'Connect Claude, ChatGPT, Cursor and other AI assistants to national statistics offices and Eurostat with one MCP endpoint. Free, read-only and open source. Every answer cites the source.'
    },
    privacy: {
      title: 'Privacy — StatsMCP',
      description:
        'StatsMCP logs nothing: no request logs, no cookies, no analytics. Read what the endpoint and this website do with your data.'
    },
    countries: {
      title: 'Connect to one statistics office — StatsMCP',
      description:
        'The MCP endpoint, data languages, number of tables and licence of each statistics office in StatsMCP. Copy one endpoint, or connect every office at once.'
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
    eyebrow: 'Free and open source',
    title:
      'Official statistics from {countries} countries and the EU, in your AI assistant.',
    lead: 'StatsMCP connects Claude, ChatGPT, Cursor and VS Code to {offices} statistics offices. Every answer names its source and links the table.',
    addToClaude: 'Add to Claude',
    addToChatgpt: 'Add to ChatGPT',
    allEndpointLabel: 'One endpoint for every country',
    otherAssistants: 'Other assistants',
    oneCountry: 'Need only one country? Each office also has its own endpoint.',
    endpointLabel: 'Endpoint',
    countryTabs: 'Country',
    status: { live: 'Live', planned: 'Planned', limited: 'Search only' },
    limitedNote:
      'Table search works. The office blocks data requests from our host at the moment. The npm package works fully.',
    privacy: 'No logs · No sign-up · No cookies'
  },
  copy: { copy: 'Copy', copied: 'Copied' },
  home: {
    title: 'Every national statistics office, one connection.',
    lead: 'Add one MCP server to your AI assistant. Ask about any of {offices} offices, from Slovenia to Australia. Your assistant searches {tables} official tables and cites the source.',
    compareQuestion: 'Compare unemployment in Canada and the EU.',
    compareAnswer:
      'In {period}, unemployment was {canada} in Canada and {eu} in the EU. Both rates are seasonally adjusted.',
    euShort: 'EU',
    tryTitle: 'Try asking'
  },
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
    { value: '{live}', label: 'statistics offices live' },
    { value: '{tables}', label: 'official tables in the search index' },
    { value: '0', label: 'logs, accounts or API keys' },
    { value: '100%', label: 'of results name the source and link the table' }
  ],
  audiences: {
    title: 'Who uses StatsMCP',
    items: [
      {
        who: 'Developers',
        text: 'Add official data to your agent with one URL.',
        prompt: 'Which Danish municipalities grew fastest in 2025?'
      },
      {
        who: 'Journalists',
        text: 'Check a figure and get the table link for your article.',
        prompt: 'Is unemployment in Finland higher than a year ago?'
      },
      {
        who: 'Analysts',
        text: 'Compare countries without downloading spreadsheets.',
        prompt: 'Compare house prices in Norway and Ireland since 2020.'
      },
      {
        who: 'Researchers',
        text: 'Find the right table, its codes and its licence.',
        prompt: 'Which table has births by age of mother in Iceland?'
      }
    ]
  },
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
    title: 'Connect in under a minute',
    meta: 'Streamable HTTP · read-only · no sign-in · 60 requests/min',
    clientTabs: 'Client',
    otherClients: 'Other clients',
    runLocally: 'Run locally',
    allCountries: 'any country',
    oneOfficeLink: 'Connect to only one office'
  },
  countryPage: {
    title: '{country}: official statistics in your AI assistant.',
    leadIndexed:
      'Search {tables} tables from {office}. Data under {licence}. Free, no sign-up.',
    leadOffice:
      'Search the tables of {office}. Data under {licence}. Free, no sign-up.',
    seeAll: 'See all {count} sources'
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
    pageTitle: '{offices} offices. Connect to all, or to one.',
    pageIntro:
      'One endpoint connects you to every office. To use only one office, copy its endpoint below.',
    tablesNote:
      'Tables: tables in our search index. Office search: the server uses the office’s own search.'
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
          'No. We keep no logs, and this website uses no cookies or analytics. Your assistant sends only search words and table codes to our server. Your AI provider still sees your conversation. Read the privacy page.'
      },
      {
        question: 'Can I connect several countries?',
        answer:
          'Yes. Connect https://statsmcp.dev/mcp once and ask about any country. To use only one office, connect its own endpoint from the Countries page.'
      },
      {
        question: 'Can I run it on my own computer?',
        answer:
          'Yes. The servers are on npm. Open the Run locally tab in Connect. Then your questions go only to the statistics office.'
      },
      {
        question: 'How can my country be added?',
        answer:
          'Open an issue on GitHub. We can add most offices that have a public API.'
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
      'The statistics offices receive the data requests that the server sends to their APIs. These requests do not contain your IP address.',
      'Your AI assistant provider, for example Anthropic or OpenAI, sees your conversation under its own terms.'
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
