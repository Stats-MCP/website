import type { UiStrings } from '@/i18n/ui';

export const sv: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Officiell statistik för AI-assistenter',
      description:
        'Anslut Claude, ChatGPT, Cursor och andra AI-assistenter till nationella statistikmyndigheter och Eurostat med en enda MCP-slutpunkt. Gratis, endast läsåtkomst och öppen källkod. Varje svar anger källan.'
    },
    privacy: {
      title: 'Integritet — StatsMCP',
      description:
        'StatsMCP loggar ingenting: inga förfrågningsloggar, inga kakor, ingen analys. Läs vad slutpunkten och den här webbplatsen gör med dina data.'
    },
    countries: {
      title: 'Anslut till en enskild statistikmyndighet — StatsMCP',
      description:
        'MCP-slutpunkten, dataspråken, antalet tabeller och licensen för varje statistikmyndighet i StatsMCP. Kopiera en slutpunkt eller anslut alla myndigheter på en gång.'
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
    eyebrow: 'Gratis och öppen källkod',
    title:
      'Officiell statistik från {countries} länder och EU, i din AI-assistent.',
    lead: 'StatsMCP kopplar Claude, ChatGPT, Cursor och VS Code till {offices} statistikmyndigheter. Varje svar anger källan och länkar till tabellen.',
    addToClaude: 'Lägg till i Claude',
    addToChatgpt: 'Lägg till i ChatGPT',
    allEndpointLabel: 'En slutpunkt för alla länder',
    otherAssistants: 'Andra assistenter',
    oneCountry:
      'Behöver du bara ett land? Varje myndighet har också en egen slutpunkt.',
    endpointLabel: 'Slutpunkt',
    countryTabs: 'Land',
    status: {
      live: 'I drift',
      planned: 'Planerad',
      limited: 'Endast sökning'
    },
    limitedNote:
      'Tabellsökningen fungerar. Myndigheten blockerar just nu dataförfrågningar från vår värd. npm-paketet fungerar fullt ut.',
    privacy: 'Inga loggar · Ingen registrering · Inga kakor'
  },
  copy: { copy: 'Kopiera', copied: 'Kopierat' },
  home: {
    title: '{offices} statistikmyndigheter, en enda anslutning.',
    lead: 'Lägg till en MCP-server i din AI-assistent. Fråga om vilken som helst av {offices} myndigheter, från Slovenien till Australien. Assistenten söker i {tables} officiella tabeller och anger källan.',
    compareQuestion: 'Jämför arbetslösheten i Kanada och EU.',
    compareAnswer:
      'I {period} var arbetslösheten {canada} i Kanada och {eu} i EU. Båda talen är säsongsjusterade.',
    euShort: 'EU',
    tryTitle: 'Prova att fråga'
  },
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
    { value: '{live}', label: 'statistikmyndigheter i drift' },
    { value: '{tables}', label: 'officiella tabeller i sökindexet' },
    { value: '0', label: 'loggar, konton eller API-nycklar' },
    {
      value: '100 %',
      label: 'av resultaten anger källan och länkar till tabellen'
    }
  ],
  audiences: {
    title: 'Vem använder StatsMCP',
    items: [
      {
        who: 'Utvecklare',
        text: 'Lägg till officiella data i din agent med en enda URL.',
        prompt: 'Vilka danska kommuner växte snabbast 2025?'
      },
      {
        who: 'Journalister',
        text: 'Kontrollera en siffra och få länken till tabellen för din artikel.',
        prompt: 'Är arbetslösheten i Finland högre än för ett år sedan?'
      },
      {
        who: 'Analytiker',
        text: 'Jämför länder utan att ladda ner kalkylblad.',
        prompt: 'Jämför bostadspriserna i Norge och Irland sedan 2020.'
      },
      {
        who: 'Forskare',
        text: 'Hitta rätt tabell, dess koder och dess licens.',
        prompt: 'Vilken tabell visar födda efter moderns ålder på Island?'
      }
    ]
  },
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
    title: 'Anslut på under en minut',
    meta: 'Streamable HTTP · endast läsning · ingen inloggning · 60 förfrågningar/min',
    clientTabs: 'Klient',
    otherClients: 'Andra klienter',
    runLocally: 'Kör lokalt',
    allCountries: 'vilket land som helst',
    oneOfficeLink: 'Anslut till bara en myndighet'
  },
  countryPage: {
    title: '{country}: officiell statistik i din AI-assistent.',
    leadIndexed:
      'Sök i {tables} tabeller från {office}. Datalicens: {licence}. Gratis, ingen registrering.',
    leadOffice:
      'Sök i tabellerna från {office}. Datalicens: {licence}. Gratis, ingen registrering.',
    seeAll: 'Se alla {count} källor'
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
    compareAll: 'Alla slutpunkter och täckning',
    pageTitle: '{offices} myndigheter. Anslut alla, eller bara en.',
    pageIntro:
      'Med en slutpunkt ansluter du till alla myndigheter. Vill du bara använda en myndighet kopierar du dess slutpunkt nedan.',
    tablesNote:
      'Tabeller: tabeller i vårt sökindex. Myndighetens sökning: servern använder myndighetens egen sökning.'
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
          'Nej. Vi sparar inga loggar, och den här webbplatsen använder inga kakor eller analysverktyg. Din assistent skickar bara sökord och tabellkoder till vår server. Din AI-leverantör ser ändå ditt samtal. Läs integritetssidan.'
      },
      {
        question: 'Kan jag ansluta flera länder?',
        answer:
          'Ja. Anslut https://statsmcp.dev/mcp en gång och fråga om vilket land som helst. Vill du bara använda en myndighet ansluter du dess egen slutpunkt från sidan Länder.'
      },
      {
        question: 'Kan jag köra den på min egen dator?',
        answer:
          'Ja. Servrarna finns på npm. Öppna fliken ”Kör lokalt” under Anslut. Då går dina frågor bara till statistikmyndigheten.'
      },
      {
        question: 'Hur kan mitt land läggas till?',
        answer:
          'Öppna ett ärende på GitHub. Vi kan lägga till de flesta myndigheter som har ett öppet API.'
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
      'Statistikmyndigheterna tar emot de dataförfrågningar som servern skickar till deras API:er. Förfrågningarna innehåller inte din IP-adress.',
      'Leverantören av din AI-assistent, till exempel Anthropic eller OpenAI, ser ditt samtal enligt sina egna villkor.'
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
