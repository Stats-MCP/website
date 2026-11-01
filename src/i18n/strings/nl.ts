import type { UiStrings } from '@/i18n/ui';

export const nl: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Officiële statistiek voor AI-assistenten',
      description:
        'Verbind Claude, ChatGPT, Cursor en andere AI-assistenten met nationale statistische databanken. Gratis, alleen-lezen, open source. Elk antwoord vermeldt de bron.'
    },
    privacy: {
      title: 'Privacy — StatsMCP',
      description:
        'StatsMCP registreert niets: geen logbestanden, geen cookies, geen analytics. Lees wat het endpoint en deze website met uw gegevens doen.'
    },
    countries: {
      title: 'Landen en dekking — StatsMCP',
      description:
        'Elk land in StatsMCP met het statistisch bureau, de talen van de data, het aantal tabellen, de datalicentie en het MCP-endpoint.'
    },
    licences: {
      title: 'Datalicenties — StatsMCP',
      description:
        'De datalicentie en de regels voor bronvermelding van elk statistisch bureau in StatsMCP, met links naar de officiële hergebruiksvoorwaarden per land.'
    },
    notFound: {
      title: 'Pagina niet gevonden — StatsMCP',
      description: 'Deze pagina bestaat niet op StatsMCP.'
    },
    countryLive: {
      title: '{country}: statistiek voor AI-assistenten — StatsMCP',
      description:
        '{country}: vraag Claude, ChatGPT of Cursor naar de officiële statistiek uit {database} ({office}). Gratis MCP-endpoint, bronnen in elk antwoord.'
    },
    countryPlanned: {
      title: '{country}: statistiek voor AI-assistenten — StatsMCP',
      description:
        '{country}: de officiële statistiek voor Claude, ChatGPT en andere AI-assistenten komt binnenkort naar StatsMCP. Volg de roadmap op GitHub.'
    },
    countryCard: '{country}: statistiek voor AI-assistenten',
    figureNumber: 'Figuur 1'
  },
  nav: {
    tagline: 'Onafhankelijk · Open source',
    howItWorks: 'Hoe het werkt',
    connect: 'Verbinden',
    countries: 'Landen',
    faq: 'Vragen',
    language: 'Taal',
    github: 'Bekijk op GitHub',
    menu: 'Menu'
  },
  hero: {
    eyebrow: 'Officiële data, klaar voor uw assistent',
    title: 'Officiële nationale statistiek voor elke AI-assistent.',
    lead: 'StatsMCP verbindt Claude, ChatGPT, Cursor en andere assistenten met de databanken van nationale statistische bureaus. Elk resultaat vermeldt de bron.',
    addToClaude: 'Toevoegen aan Claude',
    addToChatgpt: 'Toevoegen aan ChatGPT',
    endpointLabel: 'Endpoint',
    countryTabs: 'Land',
    status: { live: 'Live', planned: 'Gepland' }
  },
  copy: { copy: 'Kopiëren', copied: 'Gekopieerd' },
  figure: {
    caption: 'Figuur 1 · Voorbeeldgesprek',
    you: 'U',
    assistant: 'Claude',
    toolCalls: '{count} tool-aanroepen',
    sourceLabel: 'Bron:',
    plannedTitle: '{country}: gepland.',
    plannedText:
      'De server voor {database} staat als volgende op de roadmap. Voorbeeldantwoorden verschijnen hier zodra de server live is.',
    plannedLink: 'Volg de voortgang op GitHub'
  },
  keyFiguresLabel: 'Kerncijfers',
  keyFigures: [
    { value: '{live}', label: 'nationale statistische databanken live' },
    { value: '<1 s', label: 'gebruikelijke antwoordtijd van het endpoint' },
    { value: '0', label: 'accounts of API-sleutels nodig' },
    { value: 'Bron + link', label: 'in elk resultaat' }
  ],
  howItWorks: {
    title: 'Hoe het werkt',
    stepLabel: 'Stap',
    steps: [
      {
        tool: 'search_tables',
        title: 'De tabel vinden',
        text: 'De assistent doorzoekt duizenden officiële tabellen op trefwoord.'
      },
      {
        tool: 'get_table_metadata',
        title: 'De variabelen lezen',
        text: 'De assistent leest de perioden, regio’s en onderwerpen, en vindt de codes.'
      },
      {
        tool: 'query_table',
        title: 'De cijfers ophalen',
        text: 'De assistent haalt de data op met leesbare labels, de bron en een link naar de tabel.'
      }
    ]
  },
  connect: {
    title: 'Verbinden in één stap',
    meta: 'Streamable HTTP · alleen-lezen · zonder aanmelding',
    clientTabs: 'Client'
  },
  countries: {
    title: 'Landen',
    headers: {
      code: 'Code',
      country: 'Land',
      source: 'Officiële bron',
      languages: 'Talen',
      licence: 'Datalicentie',
      endpoint: 'Endpoint',
      status: 'Status',
      tables: 'Tabellen'
    },
    details: 'Details',
    propose: 'Ontbreekt uw land?',
    proposeLink: 'Stel het voor op GitHub.',
    tableCount: '{count} tabellen',
    officeSearch: 'Zoekfunctie van het bureau',
    compareAll: 'Alle landen vergelijken',
    pageTitle: 'Landen en dekking',
    pageIntro:
      'Elk land, het statistisch bureau, de talen van de data, het aantal tabellen, de datalicentie en het endpoint.',
    tablesNote:
      'Tabellen: het aantal tabellen in de tabelindex die StatsMCP doorzoekt, in de eerste taal van de data. ‘Zoekfunctie van het bureau’ betekent dat de server de zoekfunctie van het statistisch bureau gebruikt.'
  },
  faq: {
    title: 'Vragen',
    items: [
      {
        question: 'Is het gratis?',
        answer:
          'Ja. De gehoste endpoints zijn gratis, met een limiet van 60 verzoeken per minuut. De code valt onder de MIT-licentie.'
      },
      {
        question: 'Is StatsMCP officieel?',
        answer:
          'Nee. StatsMCP is onafhankelijk en is niet verbonden aan of goedgekeurd door een statistisch bureau. De data komt rechtstreeks uit de openbare API van elk bureau.'
      },
      {
        question: 'Slaan jullie mijn vragen op?',
        answer:
          'Nee. Het endpoint schrijft geen logbestanden en deze website gebruikt geen cookies of analytics. Lees de privacypagina.'
      },
      {
        question: 'Kan ik meerdere landen verbinden?',
        answer:
          'Ja. Voeg voor elk land één connector toe. De assistent gebruikt de juiste connector voor uw vraag.'
      },
      {
        question: 'Hoe kan mijn land worden toegevoegd?',
        answer:
          'Als het bureau zijn data via PxWeb publiceert, kunnen we het toevoegen. Open een issue op GitHub.'
      }
    ]
  },
  footer: {
    disclaimer:
      'Niet verbonden aan of goedgekeurd door een statistisch bureau.',
    product: 'Product',
    openSource: 'Open source',
    legal: 'Juridisch',
    documentation: 'Documentatie',
    licences: 'Datalicenties per land',
    privacy: 'Privacy',
    security: 'Beveiliging'
  },
  privacy: {
    title: 'Privacy',
    intro: 'StatsMCP registreert uw verzoeken niet.',
    points: [
      'Het gehoste endpoint schrijft geen logbestanden. We slaan uw vragen, de tool-aanroepen en de resultaten niet op.',
      'De snelheidsbegrenzer telt de verzoeken per IP-adres gedurende één minuut. Daarna bewaart hij ze niet.',
      'Deze website gebruikt geen cookies, geen analytics en geen scripts van derden. De lettertypen staan op onze eigen server.',
      'Cloudflare host het endpoint en deze website. Cloudflare verwerkt verzoeken als onze hostingpartij volgens het privacybeleid van Cloudflare.',
      'De statistische bureaus ontvangen de dataverzoeken die de server naar hun API’s stuurt. Deze verzoeken bevatten uw IP-adres niet.'
    ],
    questions: 'Vragen: open een issue op GitHub.'
  },
  licences: {
    title: 'Datalicenties',
    intro:
      'De code van StatsMCP valt onder de MIT-licentie. De data is van elk statistisch bureau, en de voorwaarden van dat bureau gelden.',
    attribution:
      'Als u met de data nieuwe cijfers berekent, vermeld dat dan, bijvoorbeeld: ‘Bron: SURS / Berekend door <uw naam>’.'
  },
  notFound: {
    title: 'Pagina niet gevonden',
    text: 'Deze pagina bestaat niet.',
    home: 'Naar de startpagina'
  }
};
