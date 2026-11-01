import type { UiStrings } from '@/i18n/ui';

export const et: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — ametlik statistika tehisintellekti assistentidele',
      description:
        'Ühenda Claude, ChatGPT, Cursor ja teised tehisintellekti assistendid riiklike statistikaametite ja Eurostatiga ühe MCP lõpp-punkti kaudu. Tasuta, ainult lugemiseks ja avatud lähtekoodiga. Iga vastus viitab allikale.'
    },
    privacy: {
      title: 'Privaatsus — StatsMCP',
      description:
        'StatsMCP ei logi midagi: ei päringulogisid, küpsiseid ega analüütikat. Loe, mida lõpp-punkt ja see veebisait sinu andmetega teevad.'
    },
    countries: {
      title: 'Ühenda üks statistikaamet — StatsMCP',
      description:
        'StatsMCP iga statistikaameti MCP lõpp-punkt, andmekeeled, tabelite arv ja litsents. Kopeeri üks lõpp-punkt või ühenda kõik ametid korraga.'
    },
    licences: {
      title: 'Andmelitsentsid — StatsMCP',
      description:
        'Iga StatsMCP statistikaameti andmelitsents ja viitamisreeglid ning lingid iga riigi ametlikele taaskasutustingimustele.'
    },
    notFound: {
      title: 'Lehte ei leitud — StatsMCP',
      description: 'Seda lehte StatsMCP-s ei ole.'
    },
    countryLive: {
      title: '{country}: statistika tehisintellekti assistentidele — StatsMCP',
      description:
        "Ametlik statistika ({country}) andmebaasist {database} ({office}) Claude'ile, ChatGPT-le ja Cursorile. Tasuta MCP lõpp-punkt, allikas igas vastuses."
    },
    countryPlanned: {
      title: '{country}: statistika tehisintellekti assistentidele — StatsMCP',
      description:
        "Ametlik statistika ({country}) Claude'ile, ChatGPT-le ja teistele tehisintellekti assistentidele jõuab peagi StatsMCP-sse. Jälgi tegevuskava GitHubis."
    },
    countryCard: '{country}: statistika tehisintellekti assistentidele',
    figureNumber: 'Joonis 1'
  },
  nav: {
    tagline: 'Sõltumatu · Avatud lähtekood',
    howItWorks: 'Kuidas see töötab',
    connect: 'Ühenda',
    countries: 'Riigid',
    faq: 'KKK',
    language: 'Keel',
    github: 'Vaata GitHubis',
    menu: 'Menüü'
  },
  hero: {
    eyebrow: 'Tasuta ja avatud lähtekoodiga',
    addToClaude: "Lisa Claude'ile",
    addToChatgpt: 'Lisa ChatGPT-le',
    allEndpointLabel: 'Üks lõpp-punkt kõigile riikidele',
    otherAssistants: 'Muud assistendid',
    oneCountry: 'Vajad ainult üht riiki? Igal ametil on ka oma lõpp-punkt.',
    endpointLabel: 'Lõpp-punkt',
    countryTabs: 'Riik',
    status: { live: 'Töös', planned: 'Plaanis', limited: 'Ainult otsing' },
    limitedNote:
      'Tabelite otsing töötab. Amet blokeerib praegu meie majutaja andmepäringud. npm-pakett töötab täielikult.',
    privacy: 'Logideta · Registreerumiseta · Küpsisteta'
  },
  copy: { copy: 'Kopeeri', copied: 'Kopeeritud' },
  home: {
    title: '{offices} statistikaametit, üks ühendus.',
    lead: 'Lisa oma tehisintellekti assistendile üks MCP-server. Küsi ükskõik millise ameti andmete kohta – kokku {offices} ametit Sloveeniast Austraaliani. Assistent otsib {tables} ametlikust tabelist ja viitab allikale.',
    compareQuestion: 'Võrdle töötust Kanadas ja ELis.',
    compareAnswer:
      'Perioodil {period} oli töötuse määr Kanadas {canada} ja ELis {eu}. Mõlemad määrad on sesoonselt korrigeeritud.',
    euShort: 'EL',
    tryTitle: 'Proovi küsida'
  },
  figure: {
    caption: 'Joonis 1 · Näidisvestlus',
    you: 'Sina',
    assistant: 'Claude',
    toolCalls: '{count} tööriistakutset',
    sourceLabel: 'Allikas:',
    plannedTitle: '{country} on plaanis.',
    plannedText:
      'Server {database} on tegevuskavas järgmine. Näidisvastused ilmuvad siia, kui server käivitatakse.',
    plannedLink: 'Jälgi edenemist GitHubis'
  },
  keyFiguresLabel: 'Põhinäitajad',
  keyFigures: [
    { value: '{live}', label: 'statistikaametit töös' },
    { value: '{tables}', label: 'ametlikku tabelit otsinguindeksis' },
    { value: '0', label: 'logi, kontot ega API-võtit' },
    { value: '100%', label: 'tulemustest nimetab allika ja lingib tabeli' }
  ],
  audiences: {
    title: 'Kes kasutavad StatsMCP-d',
    items: [
      {
        who: 'Arendajad',
        text: 'Lisa oma agendile ametlikud andmed ühe URL-iga.',
        prompt:
          'Millised Taani omavalitsused kasvasid 2025. aastal kõige kiiremini?'
      },
      {
        who: 'Ajakirjanikud',
        text: 'Kontrolli arvu ja saa oma artikli jaoks tabeli link.',
        prompt: 'Kas töötus on Soomes kõrgem kui aasta tagasi?'
      },
      {
        who: 'Analüütikud',
        text: 'Võrdle riike ilma tabelifaile alla laadimata.',
        prompt: 'Võrdle eluasemehindu Norras ja Iirimaal alates 2020. aastast.'
      },
      {
        who: 'Teadlased',
        text: 'Leia õige tabel, selle koodid ja litsents.',
        prompt: 'Millises tabelis on Islandi sünnid ema vanuse järgi?'
      }
    ]
  },
  howItWorks: {
    title: 'Kuidas see töötab',
    stepLabel: 'Samm',
    steps: [
      {
        tool: 'search_tables',
        title: 'Leia tabel',
        text: 'Assistent otsib märksõna järgi tuhandete ametlike tabelite seast.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Loe tunnuseid',
        text: 'See loeb perioodid, piirkonnad ja näitajad ning leiab nende koodid.'
      },
      {
        tool: 'query_table',
        title: 'Hangi arvud',
        text: 'See hangib andmed loetavate siltidega, koos allika ja lingiga tabelile.'
      }
    ]
  },
  connect: {
    title: 'Ühenda vähem kui minutiga',
    meta: 'Streamable HTTP · ainult lugemiseks · sisselogimiseta · 60 päringut minutis',
    clientTabs: 'Klient',
    otherClients: 'Muud kliendid',
    runLocally: 'Käivita kohapeal',
    allCountries: 'mis tahes riik',
    oneOfficeLink: 'Ühenda ainult ühe ametiga'
  },
  countryPage: {
    title: '{country}: ametlik statistika sinu tehisintellekti assistendis.',
    leadIndexed:
      'Otsi {tables} tabeli seast. Allikas: {office}. Litsents: {licence}. Tasuta, registreerumiseta.',
    leadOffice:
      'Otsi tabeleid. Allikas: {office}. Litsents: {licence}. Tasuta, registreerumiseta.',
    seeAll: 'Vaata kõiki allikaid ({count})'
  },
  countries: {
    title: 'Riigid',
    headers: {
      code: 'Kood',
      country: 'Riik',
      source: 'Ametlik allikas',
      languages: 'Keeled',
      licence: 'Andmelitsents',
      endpoint: 'Lõpp-punkt',
      status: 'Olek',
      tables: 'Tabelid'
    },
    details: 'Üksikasjad',
    propose: 'Sinu riiki pole loendis?',
    proposeLink: 'Tee ettepanek GitHubis.',
    tableCount: '{count} tabelit',
    officeSearch: 'Ameti otsing',
    compareAll: 'Kõik lõpp-punktid ja katvus',
    pageTitle: '{offices} ametit. Ühenda kõigiga või ainult ühega.',
    pageIntro:
      'Ühe lõpp-punktiga ühendud kõigi ametitega. Kui soovid kasutada ainult üht ametit, kopeeri allpool selle lõpp-punkt.',
    tablesNote:
      'Tabelid: tabelid meie otsinguindeksis. Ameti otsing: server kasutab ameti enda otsingut.'
  },
  faq: {
    title: 'Küsimused',
    items: [
      {
        question: 'Kas see on tasuta?',
        answer:
          'Jah. Meie majutatud lõpp-punktid on tasuta, piiranguga 60 päringut minutis. Kood on MIT-litsentsi all.'
      },
      {
        question: 'Kas StatsMCP on ametlik?',
        answer:
          'Ei. StatsMCP on sõltumatu. Ükski statistikaamet ei ole sellega seotud ega ole seda heaks kiitnud. Andmed tulevad otse iga ameti avalikust API-st.'
      },
      {
        question: 'Kas te salvestate minu küsimusi?',
        answer:
          'Ei. Me ei pea logisid ja see veebisait ei kasuta küpsiseid ega analüütikat. Sinu assistent saadab meie serverisse ainult otsingusõnad ja tabelikoodid. Sinu tehisintellekti teenuse pakkuja näeb vestlust siiski. Loe privaatsuslehte.'
      },
      {
        question: 'Kas ma saan ühendada mitu riiki?',
        answer:
          'Jah. Ühenda https://statsmcp.dev/mcp üks kord ja küsi ükskõik millise riigi kohta. Kui soovid kasutada ainult üht ametit, ühenda lehelt Riigid selle enda lõpp-punkt.',
        link: 'countries/'
      },
      {
        question: 'Kas ma saan seda oma arvutis käitada?',
        answer:
          'Jah. Serverid on npm-is. Ava jaotises „Ühenda“ vahekaart „Käivita kohapeal“. Siis lähevad sinu küsimused ainult statistikaametile.'
      },
      {
        question: 'Kuidas saab minu riigi lisada?',
        answer:
          'Ava GitHubis issue. Saame lisada enamiku ameteid, millel on avalik API.'
      }
    ]
  },
  footer: {
    disclaimer:
      'Ükski statistikaamet ei ole sellega seotud ega ole seda heaks kiitnud.',
    product: 'Toode',
    openSource: 'Avatud lähtekood',
    legal: 'Õiguslik teave',
    documentation: 'Dokumentatsioon',
    licences: 'Andmelitsentsid riigiti',
    privacy: 'Privaatsus',
    security: 'Turvalisus'
  },
  privacy: {
    title: 'Privaatsus',
    intro: 'StatsMCP ei logi sinu päringuid.',
    points: [
      'Meie majutatud lõpp-punkt ei kirjuta logisid. Me ei salvesta sinu küsimusi, tööriistakutseid ega tulemusi.',
      'Päringute piiraja loendab iga IP-aadressi päringuid ühe minuti jooksul. Pärast seda neid ei säilitata.',
      'See veebisait ei kasuta küpsiseid, analüütikat ega kolmandate osapoolte skripte. Fondid on meie enda serveris.',
      "Lõpp-punkti ja seda veebisaiti käitab Cloudflare. Cloudflare töötleb päringuid meie majutajana Cloudflare'i privaatsuspoliitika alusel.",
      'Statistikaametid saavad andmepäringud, mille server nende API-dele saadab. Need päringud ei sisalda sinu IP-aadressi.',
      'Sinu tehisintellekti assistendi pakkuja, näiteks Anthropic või OpenAI, näeb sinu vestlust oma tingimuste alusel.'
    ],
    questions: 'Küsimused: ava GitHubis issue.'
  },
  licences: {
    title: 'Andmelitsentsid',
    intro:
      'StatsMCP kood on MIT-litsentsi all. Andmed kuuluvad igale statistikaametile ja kehtivad selle tingimused.',
    attribution:
      'Kui arvutad andmetest uusi näitajaid, märgi see ära, näiteks: „Allikas: SURS / Arvutanud <sina>“.'
  },
  notFound: {
    title: 'Lehte ei leitud',
    text: 'Seda lehte ei ole.',
    home: 'Mine avalehele'
  }
};
