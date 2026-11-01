import type { UiStrings } from '@/i18n/ui';

export const et: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — ametlik statistika tehisintellekti assistentidele',
      description:
        'Ühenda Claude, ChatGPT, Cursor ja teised tehisintellekti assistendid riiklike statistika andmebaasidega. Tasuta, ainult lugemiseks, avatud lähtekoodiga. Iga vastus viitab allikale.'
    },
    privacy: {
      title: 'Privaatsus — StatsMCP',
      description:
        'StatsMCP ei logi midagi: ei päringulogisid, küpsiseid ega analüütikat. Loe, mida lõpp-punkt ja see veebisait sinu andmetega teevad.'
    },
    countries: {
      title: 'Riigid ja kaetus — StatsMCP',
      description:
        'Kõik StatsMCP riigid koos statistikaameti, andmekeelte, tabelite arvu, andmelitsentsi ja MCP lõpp-punktiga.'
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
    eyebrow: 'Ametlikud andmed sinu assistendile',
    title: 'Ametlik riiklik statistika igale tehisintellekti assistendile.',
    lead: "StatsMCP ühendab Claude'i, ChatGPT, Cursori ja teised assistendid riiklike statistikaametite andmebaasidega. Iga tulemus nimetab oma allika.",
    addToClaude: "Lisa Claude'ile",
    addToChatgpt: 'Lisa ChatGPT-le',
    endpointLabel: 'Lõpp-punkt',
    countryTabs: 'Riik',
    status: { live: 'Töös', planned: 'Plaanis' }
  },
  copy: { copy: 'Kopeeri', copied: 'Kopeeritud' },
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
    { value: '{live}', label: 'riiklikku statistika andmebaasi töös' },
    { value: '<1 s', label: 'lõpp-punkti tavaline vastuseaeg' },
    { value: '0', label: 'kontot või API-võtit vaja' },
    { value: 'Allikas + link', label: 'igas tulemuses' }
  ],
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
    title: 'Ühenda ühe sammuga',
    meta: 'Streamable HTTP · ainult lugemiseks · sisselogimist pole vaja',
    clientTabs: 'Klient'
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
    compareAll: 'Võrdle kõiki riike',
    pageTitle: 'Riigid ja kaetus',
    pageIntro:
      'Iga riik, selle statistikaamet, andmete keeled, tabelite arv, andmelitsents ja lõpp-punkt.',
    tablesNote:
      'Tabelid: tabelite arv tabeliindeksis, milles StatsMCP otsib, esimeses andmekeeles. „Ameti otsing“ tähendab, et server kasutab statistikaameti enda otsingut.'
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
          'Ei. Lõpp-punkt ei kirjuta logisid ja see veebisait ei kasuta küpsiseid ega analüütikat. Loe privaatsuslehte.'
      },
      {
        question: 'Kas ma saan ühendada mitu riiki?',
        answer:
          'Jah. Lisa iga riigi jaoks üks konnektor. Assistent kasutab sinu küsimuse jaoks õiget konnektorit.'
      },
      {
        question: 'Kuidas saab minu riigi lisada?',
        answer:
          'Kui amet avaldab oma andmed PxWebi kaudu, saame riigi lisada. Ava GitHubis issue.'
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
      'Statistikaametid saavad andmepäringud, mille server nende API-dele saadab. Need päringud ei sisalda sinu IP-aadressi.'
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
