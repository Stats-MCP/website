import type { UiStrings } from '@/i18n/ui';

export const sv: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Officiell statistik för AI-assistenter',
      description:
        'Koppla Claude, ChatGPT, Cursor och andra AI-assistenter till nationella statistikdatabaser. Gratis, endast läsning, öppen källkod. Varje svar anger källan.'
    },
    privacy: {
      title: 'Integritet — StatsMCP',
      description:
        'StatsMCP loggar ingenting: inga förfrågningsloggar, inga kakor, ingen analys. Läs vad slutpunkten och den här webbplatsen gör med dina data.'
    },
    countries: {
      title: 'Länder och täckning — StatsMCP',
      description:
        'Alla länder i StatsMCP med statistikmyndighet, dataspråk, antal tabeller, datalicens och MCP-slutpunkt.'
    },
    licences: {
      title: 'Datalicenser — StatsMCP',
      description:
        'Datalicens och regler för källhänvisning för varje statistikmyndighet i StatsMCP, med länkar till de officiella villkoren för vidareutnyttjande i varje land.'
    },
    notFound: {
      title: 'Sidan hittades inte — StatsMCP',
      description: 'Den här sidan finns inte på StatsMCP.'
    },
    countryLive: {
      title: 'Statistik om {country} för AI-assistenter — StatsMCP',
      description:
        'Fråga Claude, ChatGPT eller Cursor om officiell statistik om {country} från {database} ({office}). Gratis MCP-slutpunkt, källa i varje svar.'
    },
    countryPlanned: {
      title: 'Statistik om {country} för AI-assistenter — StatsMCP',
      description:
        'Officiell statistik om {country} för Claude, ChatGPT och andra AI-assistenter kommer till StatsMCP. Följ färdplanen på GitHub.'
    },
    countryCard: 'Statistik om {country} för AI-assistenter',
    figureNumber: 'Figur 1'
  },
  nav: {
    tagline: 'Oberoende · Öppen källkod',
    howItWorks: 'Så fungerar det',
    connect: 'Anslut',
    countries: 'Länder',
    faq: 'Vanliga frågor',
    language: 'Språk',
    github: 'Visa på GitHub',
    menu: 'Meny'
  },
  hero: {
    eyebrow: 'Officiella data, redo för din assistent',
    title: 'Officiell nationell statistik för alla AI-assistenter.',
    lead: 'StatsMCP kopplar Claude, ChatGPT, Cursor och andra assistenter till databaserna hos nationella statistikmyndigheter. Varje resultat anger sin källa.',
    addToClaude: 'Lägg till i Claude',
    addToChatgpt: 'Lägg till i ChatGPT',
    endpointLabel: 'Slutpunkt',
    countryTabs: 'Land',
    status: { live: 'I drift', planned: 'Planerad' }
  },
  copy: { copy: 'Kopiera', copied: 'Kopierat' },
  figure: {
    caption: 'Figur 1 · Exempelsamtal',
    you: 'Du',
    assistant: 'Claude',
    toolCalls: '{count} verktygsanrop',
    sourceLabel: 'Källa:',
    plannedTitle: '{country} är planerat.',
    plannedText:
      'Servern för {database} står näst på tur i färdplanen. Exempelsvar visas här när den tas i drift.',
    plannedLink: 'Följ arbetet på GitHub'
  },
  keyFiguresLabel: 'Nyckeltal',
  keyFigures: [
    { value: '{live}', label: 'nationella statistikdatabaser i drift' },
    { value: '<1 s', label: 'typisk svarstid från slutpunkten' },
    { value: '0', label: 'konton eller API-nycklar krävs' },
    { value: 'Källa + länk', label: 'i varje resultat' }
  ],
  howItWorks: {
    title: 'Så fungerar det',
    stepLabel: 'Steg',
    steps: [
      {
        tool: 'search_tables',
        title: 'Hitta tabellen',
        text: 'Assistenten söker bland tusentals officiella tabeller med nyckelord.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Läs variablerna',
        text: 'Den läser perioder, regioner och mått och hittar koderna.'
      },
      {
        tool: 'query_table',
        title: 'Hämta siffrorna',
        text: 'Den hämtar data med läsbara etiketter, källan och en länk till tabellen.'
      }
    ]
  },
  connect: {
    title: 'Anslut i ett steg',
    meta: 'Streamable HTTP · endast läsning · ingen inloggning',
    clientTabs: 'Klient'
  },
  countries: {
    title: 'Länder',
    headers: {
      code: 'Kod',
      country: 'Land',
      source: 'Officiell källa',
      languages: 'Språk',
      licence: 'Datalicens',
      endpoint: 'Slutpunkt',
      status: 'Status',
      tables: 'Tabeller'
    },
    details: 'Detaljer',
    propose: 'Saknas ditt land?',
    proposeLink: 'Föreslå det på GitHub.',
    tableCount: '{count} tabeller',
    officeSearch: 'Myndighetens sökning',
    compareAll: 'Jämför alla länder',
    pageTitle: 'Länder och täckning',
    pageIntro:
      'Alla länder med statistikmyndighet, dataspråk, antal tabeller, datalicens och slutpunkt.',
    tablesNote:
      'Tabeller: antalet tabeller i det tabellindex som StatsMCP söker i, på det första dataspråket. ”Myndighetens sökning” betyder att servern använder statistikmyndighetens egen sökfunktion.'
  },
  faq: {
    title: 'Frågor',
    items: [
      {
        question: 'Är det gratis?',
        answer:
          'Ja. De hostade slutpunkterna är gratis, med en gräns på 60 förfrågningar per minut. Koden omfattas av MIT-licensen.'
      },
      {
        question: 'Är StatsMCP officiellt?',
        answer:
          'Nej. StatsMCP är oberoende. Ingen statistikmyndighet står bakom eller stöder projektet. Data hämtas direkt från varje myndighets öppna API.'
      },
      {
        question: 'Sparar ni mina frågor?',
        answer:
          'Nej. Slutpunkten skriver inga loggar, och den här webbplatsen använder inga kakor eller analysverktyg. Läs integritetssidan.'
      },
      {
        question: 'Kan jag ansluta flera länder?',
        answer:
          'Ja. Lägg till en anslutning för varje land. Assistenten använder rätt anslutning för din fråga.'
      },
      {
        question: 'Hur kan mitt land läggas till?',
        answer:
          'Om myndigheten publicerar sina data via PxWeb kan vi lägga till det. Öppna ett ärende på GitHub.'
      }
    ]
  },
  footer: {
    disclaimer: 'Inte knutet till eller godkänt av någon statistikmyndighet.',
    product: 'Produkt',
    openSource: 'Öppen källkod',
    legal: 'Juridik',
    documentation: 'Dokumentation',
    licences: 'Datalicenser per land',
    privacy: 'Integritet',
    security: 'Säkerhet'
  },
  privacy: {
    title: 'Integritet',
    intro: 'StatsMCP loggar inte dina förfrågningar.',
    points: [
      'Den hostade slutpunkten skriver inga loggar. Vi sparar inte dina frågor, verktygsanropen eller resultaten.',
      'Hastighetsbegränsningen räknar förfrågningar per IP-adress under en minut. Den sparar dem inte efter det.',
      'Den här webbplatsen använder inga kakor, ingen analys och inga skript från tredje part. Typsnitten ligger på vår egen server.',
      'Cloudflare driver slutpunkten och den här webbplatsen. Cloudflare behandlar förfrågningar som vår värd enligt Cloudflares integritetspolicy.',
      'Statistikmyndigheterna tar emot de dataförfrågningar som servern skickar till deras API:er. Förfrågningarna innehåller inte din IP-adress.'
    ],
    questions: 'Frågor: öppna ett ärende på GitHub.'
  },
  licences: {
    title: 'Datalicenser',
    intro:
      'Koden i StatsMCP omfattas av MIT-licensen. Data tillhör respektive statistikmyndighet, och dess villkor gäller.',
    attribution:
      'Om du räknar fram nya siffror ur data ska du ange det, till exempel: ”Källa: SURS / Bearbetning: <ditt namn>”.'
  },
  notFound: {
    title: 'Sidan hittades inte',
    text: 'Den här sidan finns inte.',
    home: 'Gå till startsidan'
  }
};
