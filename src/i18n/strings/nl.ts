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
    eyebrow: 'Gratis en open source',
    title:
      'Officiële statistiek uit {countries} landen en de EU, in uw AI-assistent.',
    lead: 'StatsMCP verbindt Claude, ChatGPT, Cursor en VS Code met {offices} statistische bureaus. Elk antwoord noemt de bron en linkt naar de tabel.',
    addToClaude: 'Toevoegen aan Claude',
    addToChatgpt: 'Toevoegen aan ChatGPT',
    endpointLabel: 'Endpoint',
    countryTabs: 'Land',
    status: { live: 'Live', planned: 'Gepland', limited: 'Alleen zoeken' },
    limitedNote:
      'Zoeken in tabellen werkt. Het bureau blokkeert op dit moment dataverzoeken van onze host. Het npm-pakket werkt volledig.',
    privacy: 'Geen logs · Geen aanmelding · Geen cookies'
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
    { value: '{live}', label: 'statistische bureaus live' },
    { value: '{tables}', label: 'officiële tabellen in de zoekindex' },
    { value: '0', label: 'logbestanden, accounts of API-sleutels' },
    {
      value: '100 %',
      label: 'van de resultaten noemt de bron en linkt naar de tabel'
    }
  ],
  audiences: {
    title: 'Wie gebruikt StatsMCP',
    items: [
      {
        who: 'Ontwikkelaars',
        text: 'Voeg met één URL officiële data toe aan uw agent.',
        prompt: 'Welke Deense gemeenten groeiden het snelst in 2025?'
      },
      {
        who: 'Journalisten',
        text: 'Controleer een cijfer en krijg de link naar de tabel voor uw artikel.',
        prompt: 'Is de werkloosheid in Finland hoger dan een jaar geleden?'
      },
      {
        who: 'Analisten',
        text: 'Vergelijk landen zonder spreadsheets te downloaden.',
        prompt: 'Vergelijk de huizenprijzen in Noorwegen en Ierland sinds 2020.'
      },
      {
        who: 'Onderzoekers',
        text: 'Vind de juiste tabel, de codes en de licentie.',
        prompt:
          'Welke tabel bevat geboorten naar leeftijd van de moeder in IJsland?'
      }
    ]
  },
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
    title: 'Verbinden in minder dan een minuut',
    meta: 'Streamable HTTP · alleen-lezen · zonder aanmelding · 60 verzoeken/min',
    clientTabs: 'Client',
    otherClients: 'Andere clients',
    runLocally: 'Lokaal draaien',
    allCountries: 'elk land',
    oneOfficeLink: 'Maak verbinding met één bureau'
  },
  countryPage: {
    title: '{country}: officiële statistiek in uw AI-assistent.',
    leadIndexed:
      'Doorzoek {tables} tabellen. Bron: {office}. Licentie: {licence}. Gratis, zonder aanmelding.',
    leadOffice:
      'Doorzoek de tabellen van het bureau. Bron: {office}. Licentie: {licence}. Gratis, zonder aanmelding.',
    seeAll: 'Alle {count} bronnen bekijken'
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
    pageIntro: 'Dekking, licentie en endpoint per bron.',
    tablesNote:
      'Tabellen: tabellen in onze zoekindex. Zoekfunctie van het bureau: de server gebruikt de eigen zoekfunctie van het bureau.'
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
          'Nee. We bewaren geen logbestanden, en deze website gebruikt geen cookies of analytics. Uw assistent stuurt alleen zoekwoorden en tabelcodes naar onze server. Uw AI-aanbieder ziet uw gesprek wel. Lees de privacypagina.'
      },
      {
        question: 'Kan ik meerdere landen verbinden?',
        answer:
          'Ja. Voeg voor elk land één connector toe. De assistent gebruikt de juiste connector voor uw vraag.'
      },
      {
        question: 'Kan ik het op mijn eigen computer draaien?',
        answer:
          'Ja. De servers staan op npm. Open bij ‘Verbinden’ het tabblad ‘Lokaal draaien’. Dan gaan uw vragen alleen naar het statistisch bureau.'
      },
      {
        question: 'Hoe kan mijn land worden toegevoegd?',
        answer:
          'Open een issue op GitHub. We kunnen de meeste bureaus met een openbare API toevoegen.'
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
      'De statistische bureaus ontvangen de dataverzoeken die de server naar hun API’s stuurt. Deze verzoeken bevatten uw IP-adres niet.',
      'Uw AI-aanbieder, bijvoorbeeld Anthropic of OpenAI, ziet uw gesprek volgens de eigen voorwaarden van die aanbieder.'
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
