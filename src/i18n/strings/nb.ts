import type { UiStrings } from '@/i18n/ui';

export const nb: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Offisiell statistikk for KI-assistenter',
      description:
        'Koble Claude, ChatGPT, Cursor og andre KI-assistenter til nasjonale statistikkdatabaser. Gratis, kun lesetilgang, åpen kildekode. Hvert svar oppgir kilden.'
    },
    privacy: {
      title: 'Personvern — StatsMCP',
      description:
        'StatsMCP logger ingenting: ingen forespørselslogger, ingen informasjonskapsler, ingen analyseverktøy. Les hva endepunktet og dette nettstedet gjør med dataene dine.'
    },
    countries: {
      title: 'Land og dekning — StatsMCP',
      description:
        'Alle land i StatsMCP med statistikkbyrå, dataspråk, antall tabeller, datalisens og MCP-endepunkt.'
    },
    licences: {
      title: 'Datalisenser — StatsMCP',
      description:
        'Datalisensen og reglene for kildehenvisning for hvert statistikkbyrå i StatsMCP, med lenker til de offisielle vilkårene for gjenbruk i hvert land.'
    },
    notFound: {
      title: 'Fant ikke siden — StatsMCP',
      description: 'Denne siden finnes ikke på StatsMCP.'
    },
    countryLive: {
      title: 'Statistikk om {country} for KI-assistenter — StatsMCP',
      description:
        'Spør Claude, ChatGPT eller Cursor om den offisielle statistikken for {country} i {database} ({office}). Gratis MCP-endepunkt, kilder i hvert svar.'
    },
    countryPlanned: {
      title: 'Statistikk om {country} for KI-assistenter — StatsMCP',
      description:
        'Offisiell statistikk for {country} kommer snart til StatsMCP for Claude, ChatGPT og andre KI-assistenter. Følg veikartet på GitHub.'
    },
    countryCard: 'Statistikk om {country} for KI-assistenter',
    figureNumber: 'Figur 1'
  },
  nav: {
    tagline: 'Uavhengig · Åpen kildekode',
    howItWorks: 'Slik fungerer det',
    connect: 'Koble til',
    countries: 'Land',
    faq: 'Spørsmål',
    language: 'Språk',
    github: 'Se på GitHub',
    menu: 'Meny'
  },
  hero: {
    eyebrow: 'Offisielle data, klare for assistenten din',
    title: 'Offisiell nasjonal statistikk for alle KI-assistenter.',
    lead: 'StatsMCP kobler Claude, ChatGPT, Cursor og andre assistenter til databasene til nasjonale statistikkbyråer. Hvert resultat oppgir kilden.',
    addToClaude: 'Legg til i Claude',
    addToChatgpt: 'Legg til i ChatGPT',
    endpointLabel: 'Endepunkt',
    countryTabs: 'Land',
    status: { live: 'I drift', planned: 'Planlagt' }
  },
  copy: { copy: 'Kopier', copied: 'Kopiert' },
  figure: {
    caption: 'Figur 1 · Eksempel på samtale',
    you: 'Du',
    assistant: 'Claude',
    toolCalls: '{count} verktøykall',
    sourceLabel: 'Kilde:',
    plannedTitle: '{country} er planlagt.',
    plannedText:
      'Serveren for {database} er neste på veikartet. Eksempelsvar vises her når den er i drift.',
    plannedLink: 'Følg fremdriften på GitHub'
  },
  keyFiguresLabel: 'Nøkkeltall',
  keyFigures: [
    { value: '{live}', label: 'nasjonale statistikkdatabaser i drift' },
    { value: '<1 s', label: 'typisk svartid fra endepunktet' },
    { value: '0', label: 'brukerkontoer eller API-nøkler som trengs' },
    { value: 'Kilde + lenke', label: 'i hvert resultat' }
  ],
  howItWorks: {
    title: 'Slik fungerer det',
    stepLabel: 'Steg',
    steps: [
      {
        tool: 'search_tables',
        title: 'Finn tabellen',
        text: 'Assistenten søker etter nøkkelord i tusenvis av offisielle tabeller.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Les variablene',
        text: 'Den leser perioder, regioner og statistikkvariabler, og finner kodene.'
      },
      {
        tool: 'query_table',
        title: 'Hent tallene',
        text: 'Den henter dataene med lesbare etiketter, kilden og en lenke til tabellen.'
      }
    ]
  },
  connect: {
    title: 'Koble til i ett steg',
    meta: 'Streamable HTTP · kun lesetilgang · ingen innlogging',
    clientTabs: 'Klient'
  },
  countries: {
    title: 'Land',
    headers: {
      code: 'Kode',
      country: 'Land',
      source: 'Offisiell kilde',
      languages: 'Språk',
      licence: 'Datalisens',
      endpoint: 'Endepunkt',
      status: 'Status',
      tables: 'Tabeller'
    },
    details: 'Detaljer',
    propose: 'Mangler landet ditt?',
    proposeLink: 'Foreslå det på GitHub.',
    tableCount: '{count} tabeller',
    officeSearch: 'Byråets søk',
    compareAll: 'Sammenlign alle land',
    pageTitle: 'Land og dekning',
    pageIntro:
      'Alle land med statistikkbyrå, dataspråk, antall tabeller, datalisens og endepunkt.',
    tablesNote:
      'Tabeller: antall tabeller i tabellindeksen som StatsMCP søker i, på det første dataspråket. «Byråets søk» betyr at serveren bruker søket til statistikkbyrået.'
  },
  faq: {
    title: 'Spørsmål',
    items: [
      {
        question: 'Er det gratis?',
        answer:
          'Ja. De driftede endepunktene er gratis, med en grense på 60 forespørsler per minutt. Koden er lisensiert under MIT-lisensen.'
      },
      {
        question: 'Er StatsMCP offisielt?',
        answer:
          'Nei. StatsMCP er uavhengig og er ikke tilknyttet eller godkjent av noe statistikkbyrå. Dataene kommer direkte fra det offentlige API-et til hvert byrå.'
      },
      {
        question: 'Lagrer dere spørsmålene mine?',
        answer:
          'Nei. Endepunktet skriver ingen logger, og dette nettstedet bruker ingen informasjonskapsler eller analyseverktøy. Les personvernsiden.'
      },
      {
        question: 'Kan jeg koble til flere land?',
        answer:
          'Ja. Legg til én kobling for hvert land. Assistenten bruker den riktige for spørsmålet ditt.'
      },
      {
        question: 'Hvordan kan landet mitt bli lagt til?',
        answer:
          'Hvis byrået publiserer dataene sine gjennom PxWeb, kan vi legge det til. Opprett en issue på GitHub.'
      }
    ]
  },
  footer: {
    disclaimer: 'Ikke tilknyttet eller godkjent av noe statistikkbyrå.',
    product: 'Produkt',
    openSource: 'Åpen kildekode',
    legal: 'Juridisk',
    documentation: 'Dokumentasjon',
    licences: 'Datalisenser per land',
    privacy: 'Personvern',
    security: 'Sikkerhet'
  },
  privacy: {
    title: 'Personvern',
    intro: 'StatsMCP logger ikke forespørslene dine.',
    points: [
      'Det driftede endepunktet skriver ingen logger. Vi lagrer ikke spørsmålene dine, verktøykallene eller resultatene.',
      'Hastighetsbegrensningen teller forespørsler per IP-adresse i ett minutt. Den beholder dem ikke etter det.',
      'Dette nettstedet bruker ingen informasjonskapsler, ingen analyseverktøy og ingen skript fra tredjeparter. Skriftene ligger på vår egen server.',
      'Cloudflare drifter endepunktet og dette nettstedet. Cloudflare behandler forespørsler som vår vertsleverandør i henhold til Cloudflares personvernerklæring.',
      'Statistikkbyråene mottar dataforespørslene som serveren sender til API-ene deres. Disse forespørslene inneholder ikke IP-adressen din.'
    ],
    questions: 'Spørsmål: opprett en issue på GitHub.'
  },
  licences: {
    title: 'Datalisenser',
    intro:
      'Koden til StatsMCP er lisensiert under MIT-lisensen. Dataene tilhører hvert statistikkbyrå, og byråets vilkår gjelder.',
    attribution:
      'Hvis du beregner nye tall fra dataene, må du opplyse om det, for eksempel: «Kilde: SURS / Beregnet av <navnet ditt>».'
  },
  notFound: {
    title: 'Fant ikke siden',
    text: 'Denne siden finnes ikke.',
    home: 'Gå til forsiden'
  }
};
