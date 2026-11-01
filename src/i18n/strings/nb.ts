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
    eyebrow: 'Gratis og åpen kildekode',
    title:
      'Offisiell statistikk fra {countries} land og EU, i KI-assistenten din.',
    lead: 'StatsMCP kobler Claude, ChatGPT, Cursor og VS Code til {offices} statistikkbyråer. Hvert svar oppgir kilden og lenker til tabellen.',
    addToClaude: 'Legg til i Claude',
    addToChatgpt: 'Legg til i ChatGPT',
    allEndpointLabel: 'Ett endepunkt for alle land',
    otherAssistants: 'Andre assistenter',
    endpointLabel: 'Endepunkt',
    countryTabs: 'Land',
    status: { live: 'I drift', planned: 'Planlagt', limited: 'Bare søk' },
    limitedNote:
      'Tabellsøket fungerer. Byrået blokkerer for tiden dataforespørsler fra vertsleverandøren vår. npm-pakken fungerer fullt ut.',
    privacy: 'Ingen logger · Ingen registrering · Ingen informasjonskapsler'
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
    { value: '{live}', label: 'statistikkbyråer i drift' },
    { value: '{tables}', label: 'offisielle tabeller i søkeindeksen' },
    { value: '0', label: 'logger, kontoer eller API-nøkler' },
    {
      value: '100 %',
      label: 'av resultatene oppgir kilden og lenker til tabellen'
    }
  ],
  audiences: {
    title: 'Hvem bruker StatsMCP',
    items: [
      {
        who: 'Utviklere',
        text: 'Legg til offisielle data i agenten din med én URL.',
        prompt: 'Hvilke danske kommuner vokste raskest i 2025?'
      },
      {
        who: 'Journalister',
        text: 'Kontroller et tall og få lenken til tabellen for artikkelen din.',
        prompt: 'Er arbeidsledigheten i Finland høyere enn for et år siden?'
      },
      {
        who: 'Analytikere',
        text: 'Sammenlign land uten å laste ned regneark.',
        prompt: 'Sammenlign boligprisene i Norge og Irland siden 2020.'
      },
      {
        who: 'Forskere',
        text: 'Finn riktig tabell, kodene og lisensen.',
        prompt: 'Hvilken tabell har fødte etter morens alder på Island?'
      }
    ]
  },
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
    title: 'Koble til på under ett minutt',
    meta: 'Streamable HTTP · kun lesetilgang · ingen innlogging · 60 forespørsler/min',
    clientTabs: 'Klient',
    otherClients: 'Andre klienter',
    runLocally: 'Kjør lokalt',
    allCountries: 'et hvilket som helst land',
    oneOfficeLink: 'Koble til bare ett byrå'
  },
  countryPage: {
    title: '{country}: offisiell statistikk i KI-assistenten din.',
    leadIndexed:
      'Søk i {tables} tabeller fra {office}. Datalisens: {licence}. Gratis, ingen registrering.',
    leadOffice:
      'Søk i tabellene til {office}. Datalisens: {licence}. Gratis, ingen registrering.',
    seeAll: 'Se alle {count} kildene'
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
    pageTitle: '{offices} byråer. Én tilkobling.',
    pageIntro:
      'Med ett endepunkt kobler du deg til alle byråene. Vil du bare bruke ett byrå, kopierer du endepunktet nedenfor.',
    tablesNote:
      'Tabeller: tabeller i søkeindeksen vår. Byråets søk: serveren bruker byråets eget søk.'
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
          'Nei. Vi lagrer ingen logger, og dette nettstedet bruker ingen informasjonskapsler eller analyseverktøy. Assistenten din sender bare søkeord og tabellkoder til serveren vår. KI-leverandøren din ser fortsatt samtalen. Les personvernsiden.'
      },
      {
        question: 'Kan jeg koble til flere land?',
        answer:
          'Ja. Legg til én kobling for hvert land. Assistenten bruker den riktige for spørsmålet ditt.'
      },
      {
        question: 'Kan jeg kjøre det på min egen datamaskin?',
        answer:
          'Ja. Serverne ligger på npm. Åpne fanen «Kjør lokalt» under Koble til. Da går spørsmålene dine bare til statistikkbyrået.'
      },
      {
        question: 'Hvordan kan landet mitt bli lagt til?',
        answer:
          'Opprett en issue på GitHub. Vi kan legge til de fleste byråer som har et offentlig API.'
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
      'Statistikkbyråene mottar dataforespørslene som serveren sender til API-ene deres. Disse forespørslene inneholder ikke IP-adressen din.',
      'Leverandøren av KI-assistenten din, for eksempel Anthropic eller OpenAI, ser samtalen din i henhold til sine egne vilkår.'
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
