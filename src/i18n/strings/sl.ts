import type { UiStrings } from '@/i18n/ui';

export const sl: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Uradna statistika za pomočnike UI',
      description:
        'Povežite Claude, ChatGPT, Cursor in druge pomočnike UI z nacionalnimi statističnimi podatkovnimi bazami. Brezplačno, samo za branje, odprta koda. Vsak odgovor navede vir.'
    },
    privacy: {
      title: 'Zasebnost — StatsMCP',
      description:
        'StatsMCP ne beleži ničesar: ni dnevnikov zahtev, ni piškotkov, ni analitike. Preberite, kaj končna točka in to spletno mesto naredita z vašimi podatki.'
    },
    countries: {
      title: 'Države in pokritost — StatsMCP',
      description:
        'Vse države v StatsMCP s statističnim uradom, jeziki podatkov, številom tabel, licenco za podatke in končno točko MCP.'
    },
    licences: {
      title: 'Licence za podatke — StatsMCP',
      description:
        'Licenca za podatke in pravila za navajanje vira za vsak statistični urad v StatsMCP, s povezavami na uradne pogoje ponovne uporabe za vsako državo.'
    },
    notFound: {
      title: 'Strani ni mogoče najti — StatsMCP',
      description: 'Ta stran na StatsMCP ne obstaja.'
    },
    countryLive: {
      title: '{country}: statistika za pomočnike UI — StatsMCP',
      description:
        '{country}: vprašajte Claude, ChatGPT ali Cursor o uradni statistiki iz baze {database} ({office}). Brezplačna končna točka MCP, vir v vsakem odgovoru.'
    },
    countryPlanned: {
      title: '{country}: statistika za pomočnike UI — StatsMCP',
      description:
        '{country}: uradna statistika za Claude, ChatGPT in druge pomočnike UI bo kmalu na voljo v StatsMCP. Napredek spremljajte na GitHubu.'
    },
    countryCard: '{country}: statistika za pomočnike UI',
    figureNumber: 'Slika 1'
  },
  nav: {
    tagline: 'Neodvisno · Odprta koda',
    howItWorks: 'Kako deluje',
    connect: 'Povezava',
    countries: 'Države',
    faq: 'Vprašanja',
    language: 'Jezik',
    github: 'Ogled na GitHubu',
    menu: 'Meni'
  },
  hero: {
    eyebrow: 'Uradni podatki, pripravljeni za vašega pomočnika',
    title: 'Uradna nacionalna statistika za vsakega pomočnika UI.',
    lead: 'StatsMCP poveže Claude, ChatGPT, Cursor in druge pomočnike s podatkovnimi bazami nacionalnih statističnih uradov. Vsak rezultat navede vir.',
    addToClaude: 'Dodaj v Claude',
    addToChatgpt: 'Dodaj v ChatGPT',
    endpointLabel: 'Končna točka',
    countryTabs: 'Država',
    status: { live: 'Na voljo', planned: 'V načrtu' }
  },
  copy: { copy: 'Kopiraj', copied: 'Kopirano' },
  figure: {
    caption: 'Slika 1 · Primer pogovora',
    you: 'Vi',
    assistant: 'Claude',
    toolCalls: 'Klici orodij: {count}',
    sourceLabel: 'Vir:',
    plannedTitle: '{country} je v načrtu.',
    plannedText:
      'Strežnik za {database} je naslednji v načrtu. Ko bo deloval, bodo tukaj prikazani primeri odgovorov.',
    plannedLink: 'Napredek spremljajte na GitHubu'
  },
  keyFiguresLabel: 'Ključni podatki',
  keyFigures: [
    {
      value: '{live}',
      label: 'delujočih nacionalnih statističnih podatkovnih baz'
    },
    { value: '<1 s', label: 'običajen odzivni čas končne točke' },
    { value: '0', label: 'potrebnih računov ali ključev API' },
    { value: 'Vir + povezava', label: 'v vsakem rezultatu' }
  ],
  howItWorks: {
    title: 'Kako deluje',
    stepLabel: 'Korak',
    steps: [
      {
        tool: 'search_tables',
        title: 'Poišče tabelo',
        text: 'Pomočnik s ključnimi besedami išče med tisoči uradnih tabel.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Prebere spremenljivke',
        text: 'Prebere obdobja, območja in kazalnike ter poišče šifre.'
      },
      {
        tool: 'query_table',
        title: 'Pridobi podatke',
        text: 'Pridobi podatke z berljivimi oznakami, virom in povezavo na tabelo.'
      }
    ]
  },
  connect: {
    title: 'Povezava v enem koraku',
    meta: 'Streamable HTTP · samo za branje · brez prijave',
    clientTabs: 'Odjemalec'
  },
  countries: {
    title: 'Države',
    headers: {
      code: 'Oznaka',
      country: 'Država',
      source: 'Uradni vir',
      languages: 'Jeziki',
      licence: 'Licenca za podatke',
      endpoint: 'Končna točka',
      status: 'Stanje',
      tables: 'Tabele'
    },
    details: 'Podrobnosti',
    propose: 'Vaše države ni na seznamu?',
    proposeLink: 'Predlagajte jo na GitHubu.',
    tableCount: 'Tabele: {count}',
    officeSearch: 'Iskalnik urada',
    compareAll: 'Primerjaj vse države',
    pageTitle: 'Države in pokritost',
    pageIntro:
      'Vse države, njihovi statistični uradi, jeziki podatkov, število tabel, licenca za podatke in končna točka.',
    tablesNote:
      'Tabele: število tabel v indeksu tabel, po katerem išče StatsMCP, v prvem jeziku podatkov. „Iskalnik urada“ pomeni, da strežnik uporablja iskalnik statističnega urada.'
  },
  faq: {
    title: 'Vprašanja',
    items: [
      {
        question: 'Je storitev brezplačna?',
        answer:
          'Da. Gostovane končne točke so brezplačne, z omejitvijo 60 zahtev na minuto. Koda je objavljena pod licenco MIT.'
      },
      {
        question: 'Je StatsMCP uradna storitev?',
        answer:
          'Ne. StatsMCP je neodvisen. Ni povezan z nobenim statističnim uradom in ga noben urad ne podpira. Podatki prihajajo neposredno iz javnega API-ja posameznega urada.'
      },
      {
        question: 'Ali shranjujete moja vprašanja?',
        answer:
          'Ne. Končna točka ne piše dnevnikov, to spletno mesto pa ne uporablja piškotkov ali analitike. Preberite stran o zasebnosti.'
      },
      {
        question: 'Ali lahko povežem več držav?',
        answer:
          'Da. Za vsako državo dodajte en konektor. Pomočnik za vaše vprašanje uporabi pravega.'
      },
      {
        question: 'Kako lahko dodate mojo državo?',
        answer:
          'Če urad objavlja podatke prek PxWeb, jo lahko dodamo. Odprite issue na GitHubu.'
      }
    ]
  },
  footer: {
    disclaimer:
      'Ni povezano z nobenim statističnim uradom in ga noben urad ne podpira.',
    product: 'Izdelek',
    openSource: 'Odprta koda',
    legal: 'Pravno',
    documentation: 'Dokumentacija',
    licences: 'Licence za podatke po državah',
    privacy: 'Zasebnost',
    security: 'Varnost'
  },
  privacy: {
    title: 'Zasebnost',
    intro: 'StatsMCP ne beleži vaših zahtev.',
    points: [
      'Gostovana končna točka ne piše dnevnikov. Ne shranjujemo vaših vprašanj, klicev orodij ali rezultatov.',
      'Omejevalnik zahtev šteje zahteve za vsak naslov IP eno minuto. Po tem jih ne hrani.',
      'To spletno mesto ne uporablja piškotkov, analitike ali skript tretjih oseb. Pisave so na našem strežniku.',
      'Končno točko in to spletno mesto poganja Cloudflare. Cloudflare kot naš ponudnik gostovanja obdeluje zahteve v skladu s pravilnikom o zasebnosti Cloudflare.',
      'Statistični uradi prejmejo zahteve za podatke, ki jih strežnik pošlje njihovim API-jem. Te zahteve ne vsebujejo vašega naslova IP.'
    ],
    questions: 'Vprašanja: odprite issue na GitHubu.'
  },
  licences: {
    title: 'Licence za podatke',
    intro:
      'Koda StatsMCP je objavljena pod licenco MIT. Podatki pripadajo posameznemu statističnemu uradu in zanje veljajo njegovi pogoji.',
    attribution:
      'Če iz podatkov izračunate nove vrednosti, to navedite, na primer: „Vir: SURS / Izračun: <vaše ime>“.'
  },
  notFound: {
    title: 'Strani ni mogoče najti',
    text: 'Ta stran ne obstaja.',
    home: 'Na domačo stran'
  }
};
