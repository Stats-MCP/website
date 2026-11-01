import type { UiStrings } from '@/i18n/ui';

export const da: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Officiel statistik til AI-assistenter',
      description:
        'Forbind Claude, ChatGPT, Cursor og andre AI-assistenter til nationale statistikkontorer og Eurostat med ét MCP-endpoint. Gratis, kun læseadgang og open source. Hvert svar angiver kilden.'
    },
    privacy: {
      title: 'Privatliv — StatsMCP',
      description:
        'StatsMCP logger intet: ingen forespørgselslogge, ingen cookies, ingen analyseværktøjer. Læs, hvad endpointet og dette websted gør med dine data.'
    },
    countries: {
      title: 'Forbind til ét statistikkontor — StatsMCP',
      description:
        'MCP-endpointet, datasprogene, antallet af tabeller og licensen for hvert statistikkontor i StatsMCP. Kopiér ét endpoint, eller forbind alle kontorer på én gang.'
    },
    licences: {
      title: 'Datalicenser — StatsMCP',
      description:
        'Datalicensen og reglerne for kildeangivelse for hvert statistikkontor i StatsMCP med links til de officielle vilkår for genbrug i hvert land.'
    },
    notFound: {
      title: 'Siden blev ikke fundet — StatsMCP',
      description: 'Denne side findes ikke på StatsMCP.'
    },
    countryLive: {
      title: 'Statistik om {country} til AI-assistenter — StatsMCP',
      description:
        'Spørg Claude, ChatGPT eller Cursor om den officielle statistik for {country} i {database} ({office}). Gratis MCP-endpoint, kilder i hvert svar.'
    },
    countryPlanned: {
      title: 'Statistik om {country} til AI-assistenter — StatsMCP',
      description:
        'Officiel statistik for {country} kommer snart på StatsMCP til Claude, ChatGPT og andre AI-assistenter. Følg køreplanen på GitHub.'
    },
    countryCard: 'Statistik om {country} til AI-assistenter',
    figureNumber: 'Figur 1'
  },
  nav: {
    tagline: 'Uafhængig · Open source',
    howItWorks: 'Sådan virker det',
    connect: 'Forbind',
    countries: 'Lande',
    faq: 'Spørgsmål',
    language: 'Sprog',
    github: 'Se på GitHub',
    menu: 'Menu'
  },
  hero: {
    eyebrow: 'Gratis og open source',
    addToClaude: 'Tilføj til Claude',
    addToChatgpt: 'Tilføj til ChatGPT',
    allEndpointLabel: 'Ét endpoint for alle lande',
    otherAssistants: 'Andre assistenter',
    oneCountry:
      'Har du kun brug for ét land? Hvert kontor har også sit eget endpoint.',
    endpointLabel: 'Endpoint',
    countryTabs: 'Land',
    status: { live: 'I drift', planned: 'Planlagt', limited: 'Kun søgning' },
    limitedNote:
      'Tabelsøgningen virker. Kontoret blokerer i øjeblikket dataforespørgsler fra vores hostingudbyder. npm-pakken virker fuldt ud.',
    privacy: 'Ingen logge · Ingen tilmelding · Ingen cookies'
  },
  copy: { copy: 'Kopiér', copied: 'Kopieret' },
  home: {
    title: '{offices} statistikkontorer, én forbindelse.',
    lead: 'Tilføj én MCP-server til din AI-assistent. Spørg om et hvilket som helst af {offices} kontorer, fra Slovenien til Australien. Assistenten søger i {tables} officielle tabeller og angiver kilden.',
    compareQuestion: 'Sammenlign ledigheden i Canada og EU.',
    compareAnswer:
      'I {period} var ledigheden {canada} i Canada og {eu} i EU. Begge tal er sæsonkorrigerede.',
    euShort: 'EU',
    tryTitle: 'Prøv at spørge'
  },
  figure: {
    caption: 'Figur 1 · Eksempel på en samtale',
    you: 'Du',
    assistant: 'Claude',
    toolCalls: '{count} værktøjskald',
    sourceLabel: 'Kilde:',
    plannedTitle: '{country} er planlagt.',
    plannedText:
      'Serveren til {database} er den næste på køreplanen. Eksempler på svar vises her, når den er i drift.',
    plannedLink: 'Følg udviklingen på GitHub'
  },
  keyFiguresLabel: 'Nøgletal',
  keyFigures: [
    { value: '{live}', label: 'statistikkontorer i drift' },
    { value: '{tables}', label: 'officielle tabeller i søgeindekset' },
    { value: '0', label: 'logge, konti eller API-nøgler' },
    {
      value: '100 %',
      label: 'af resultaterne angiver kilden og linker til tabellen'
    }
  ],
  audiences: {
    title: 'Hvem bruger StatsMCP',
    items: [
      {
        who: 'Udviklere',
        text: 'Tilføj officielle data til din agent med én URL.',
        prompt: 'Hvilke danske kommuner voksede hurtigst i 2025?'
      },
      {
        who: 'Journalister',
        text: 'Tjek et tal, og få linket til tabellen til din artikel.',
        prompt: 'Er arbejdsløsheden i Finland højere end for et år siden?'
      },
      {
        who: 'Analytikere',
        text: 'Sammenlign lande uden at downloade regneark.',
        prompt: 'Sammenlign boligpriserne i Norge og Irland siden 2020.'
      },
      {
        who: 'Forskere',
        text: 'Find den rigtige tabel, dens koder og dens licens.',
        prompt: 'Hvilken tabel har fødte efter moderens alder på Island?'
      }
    ]
  },
  howItWorks: {
    title: 'Sådan virker det',
    stepLabel: 'Trin',
    steps: [
      {
        tool: 'search_tables',
        title: 'Find tabellen',
        text: 'Assistenten søger efter nøgleord i tusindvis af officielle tabeller.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Læs variablerne',
        text: 'Den læser perioder, områder og enheder og finder koderne.'
      },
      {
        tool: 'query_table',
        title: 'Hent tallene',
        text: 'Den henter data med letlæselige betegnelser, kilden og et link til tabellen.'
      }
    ]
  },
  connect: {
    title: 'Forbind på under et minut',
    meta: 'Streamable HTTP · kun læseadgang · intet login · 60 forespørgsler/min',
    clientTabs: 'Klient',
    otherClients: 'Andre klienter',
    runLocally: 'Kør lokalt',
    allCountries: 'et hvilket som helst land',
    oneOfficeLink: 'Forbind kun til ét kontor'
  },
  countryPage: {
    title: '{country}: officiel statistik i din AI-assistent.',
    leadIndexed:
      'Søg i {tables} tabeller fra {office}. Datalicens: {licence}. Gratis, ingen tilmelding.',
    leadOffice:
      'Søg i tabellerne fra {office}. Datalicens: {licence}. Gratis, ingen tilmelding.',
    seeAll: 'Se alle {count} kilder'
  },
  countries: {
    title: 'Lande',
    headers: {
      code: 'Kode',
      country: 'Land',
      source: 'Officiel kilde',
      languages: 'Sprog',
      licence: 'Datalicens',
      endpoint: 'Endpoint',
      status: 'Status',
      tables: 'Tabeller'
    },
    details: 'Detaljer',
    propose: 'Mangler dit land?',
    proposeLink: 'Foreslå det på GitHub.',
    tableCount: '{count} tabeller',
    officeSearch: 'Kontorets søgning',
    compareAll: 'Alle endpoints og dækning',
    pageTitle: '{offices} kontorer. Forbind til alle eller kun ét.',
    pageIntro:
      'Med ét endpoint forbinder du dig til alle kontorer. Vil du kun bruge ét kontor, kopierer du dets endpoint nedenfor.',
    tablesNote:
      'Tabeller: tabeller i vores søgeindeks. Kontorets søgning: serveren bruger kontorets egen søgning.'
  },
  faq: {
    title: 'Spørgsmål',
    items: [
      {
        question: 'Er det gratis?',
        answer:
          'Ja. De hostede endpoints er gratis med en grænse på 60 forespørgsler i minuttet. Koden er udgivet under MIT-licensen.'
      },
      {
        question: 'Er StatsMCP officiel?',
        answer:
          'Nej. StatsMCP er uafhængig og er hverken tilknyttet eller godkendt af et statistikkontor. Data kommer direkte fra hvert kontors offentlige API.'
      },
      {
        question: 'Gemmer I mine spørgsmål?',
        answer:
          'Nej. Vi gemmer ingen logge, og dette websted bruger ingen cookies eller analyseværktøjer. Din assistent sender kun søgeord og tabelkoder til vores server. Din AI-udbyder ser stadig din samtale. Læs siden om privatliv.'
      },
      {
        question: 'Kan jeg forbinde flere lande?',
        answer:
          'Ja. Forbind https://statsmcp.dev/mcp én gang, og spørg om et hvilket som helst land. Vil du kun bruge ét kontor, forbinder du dets eget endpoint fra siden Lande.',
        link: 'countries/'
      },
      {
        question: 'Kan jeg køre det på min egen computer?',
        answer:
          'Ja. Serverne ligger på npm. Åbn fanen »Kør lokalt« under Forbind. Så går dine spørgsmål kun til statistikkontoret.'
      },
      {
        question: 'Hvordan kan mit land blive tilføjet?',
        answer:
          'Opret et issue på GitHub. Vi kan tilføje de fleste kontorer, der har et offentligt API.'
      }
    ]
  },
  footer: {
    disclaimer: 'Hverken tilknyttet eller godkendt af et statistikkontor.',
    product: 'Produkt',
    openSource: 'Open source',
    legal: 'Juridisk',
    documentation: 'Dokumentation',
    licences: 'Datalicenser pr. land',
    privacy: 'Privatliv',
    security: 'Sikkerhed'
  },
  privacy: {
    title: 'Privatliv',
    intro: 'StatsMCP logger ikke dine forespørgsler.',
    points: [
      'Det hostede endpoint skriver ingen logge. Vi gemmer ikke dine spørgsmål, værktøjskaldene eller resultaterne.',
      'Hastighedsbegrænsningen tæller forespørgsler for hver IP-adresse i ét minut. Den gemmer dem ikke derefter.',
      'Dette websted bruger ingen cookies, ingen analyseværktøjer og ingen scripts fra tredjeparter. Skrifttyperne ligger på vores egen server.',
      'Cloudflare driver endpointet og dette websted. Cloudflare behandler forespørgsler som vores hostingudbyder i henhold til Cloudflares privatlivspolitik.',
      "Statistikkontorerne modtager de dataforespørgsler, som serveren sender til deres API'er. Disse forespørgsler indeholder ikke din IP-adresse.",
      'Udbyderen af din AI-assistent, for eksempel Anthropic eller OpenAI, ser din samtale i henhold til sine egne vilkår.'
    ],
    questions: 'Spørgsmål: opret et issue på GitHub.'
  },
  licences: {
    title: 'Datalicenser',
    intro:
      'Koden til StatsMCP er udgivet under MIT-licensen. Data tilhører det enkelte statistikkontor, og kontorets vilkår gælder.',
    attribution:
      'Hvis du beregner nye tal ud fra data, skal du oplyse det, for eksempel: »Kilde: SURS / Beregnet af <dit navn>«.'
  },
  notFound: {
    title: 'Siden blev ikke fundet',
    text: 'Denne side findes ikke.',
    home: 'Gå til forsiden'
  }
};
