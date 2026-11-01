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
    eyebrow: 'Brezplačno in odprtokodno',
    title: 'Uradna statistika iz {countries} držav in EU v vašem pomočniku UI.',
    lead: 'StatsMCP poveže Claude, ChatGPT, Cursor in VS Code s statističnimi uradi. Trenutno jih je {offices}. Vsak odgovor navede vir in povezavo na tabelo.',
    addToClaude: 'Dodaj v Claude',
    addToChatgpt: 'Dodaj v ChatGPT',
    allEndpointLabel: 'Ena končna točka za vse države',
    otherAssistants: 'Drugi pomočniki',
    endpointLabel: 'Končna točka',
    countryTabs: 'Država',
    status: { live: 'Na voljo', planned: 'V načrtu', limited: 'Samo iskanje' },
    limitedNote:
      'Iskanje tabel deluje. Urad trenutno blokira zahteve za podatke z našega strežnika. Paket npm deluje v celoti.',
    privacy: 'Brez dnevnikov · Brez registracije · Brez piškotkov'
  },
  copy: { copy: 'Kopiraj', copied: 'Kopirano' },
  home: {
    title: 'Vsi nacionalni statistični uradi, ena povezava.',
    lead: 'Pomočniku UI dodajte en strežnik MCP. Sprašujte o katerem koli od {offices} uradov, od Slovenije do Avstralije. Pomočnik preišče {tables} uradnih tabel in navede vir.',
    compareQuestion: 'Primerjaj brezposelnost v Kanadi in EU.',
    compareAnswer:
      'V obdobju {period} je bila brezposelnost v Kanadi {canada}, v EU pa {eu}. Obe stopnji sta desezonirani.',
    euShort: 'EU',
    tryTitle: 'Poskusite vprašati'
  },
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
    { value: '{live}', label: 'delujočih statističnih uradov' },
    { value: '{tables}', label: 'uradnih tabel v iskalnem indeksu' },
    { value: '0', label: 'dnevnikov, računov ali ključev API' },
    { value: '100 %', label: 'rezultatov navede vir in povezavo na tabelo' }
  ],
  audiences: {
    title: 'Kdo uporablja StatsMCP',
    items: [
      {
        who: 'Razvijalci',
        text: 'Z enim URL-jem dodajte uradne podatke svojemu agentu.',
        prompt: 'Katere danske občine so leta 2025 najhitreje rasle?'
      },
      {
        who: 'Novinarji',
        text: 'Preverite podatek in pridobite povezavo na tabelo za svoj članek.',
        prompt: 'Ali je brezposelnost na Finskem višja kot pred enim letom?'
      },
      {
        who: 'Analitiki',
        text: 'Primerjajte države brez prenašanja preglednic.',
        prompt: 'Primerjaj cene stanovanj na Norveškem in Irskem od leta 2020.'
      },
      {
        who: 'Raziskovalci',
        text: 'Poiščite pravo tabelo, njene šifre in licenco.',
        prompt:
          'Katera tabela vsebuje živorojene po starosti matere na Islandiji?'
      }
    ]
  },
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
    title: 'Povezava v manj kot minuti',
    meta: 'Streamable HTTP · samo za branje · brez prijave · 60 zahtev/min',
    clientTabs: 'Odjemalec',
    otherClients: 'Drugi odjemalci',
    runLocally: 'Lokalni zagon',
    allCountries: 'katera koli država',
    oneOfficeLink: 'Povežite se samo z enim uradom'
  },
  countryPage: {
    title: '{country}: uradna statistika v vašem pomočniku UI.',
    leadIndexed:
      'Iščite med {tables} tabelami. Vir: {office}. Licenca za podatke: {licence}. Brezplačno, brez registracije.',
    leadOffice:
      'Iščite po tabelah statističnega urada. Vir: {office}. Licenca za podatke: {licence}. Brezplačno, brez registracije.',
    seeAll: 'Vsi viri ({count})'
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
    pageTitle: '{offices} uradov. Ena povezava.',
    pageIntro:
      'Z eno končno točko se povežete z vsemi uradi. Če želite uporabljati samo en urad, spodaj kopirajte njegovo končno točko.',
    tablesNote:
      'Tabele: tabele v našem iskalnem indeksu. Iskalnik urada: strežnik uporablja iskalnik statističnega urada.'
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
          'Ne. Ne hranimo dnevnikov, to spletno mesto pa ne uporablja piškotkov ali analitike. Vaš pomočnik našemu strežniku pošlje samo iskalne besede in šifre tabel. Vaš ponudnik UI pogovor še vedno vidi. Preberite stran o zasebnosti.'
      },
      {
        question: 'Ali lahko povežem več držav?',
        answer:
          'Da. Za vsako državo dodajte en konektor. Pomočnik za vaše vprašanje uporabi pravega.'
      },
      {
        question: 'Ali ga lahko zaženem na svojem računalniku?',
        answer:
          'Da. Strežniki so na voljo v npm. V razdelku Povezava odprite zavihek „Lokalni zagon“. Tako gredo vaša vprašanja samo do statističnega urada.'
      },
      {
        question: 'Kako lahko dodate mojo državo?',
        answer:
          'Odprite issue na GitHubu. Dodamo lahko večino uradov, ki imajo javni API.'
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
      'Statistični uradi prejmejo zahteve za podatke, ki jih strežnik pošlje njihovim API-jem. Te zahteve ne vsebujejo vašega naslova IP.',
      'Ponudnik vašega pomočnika UI, na primer Anthropic ali OpenAI, vidi vaš pogovor v skladu s svojimi pogoji.'
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
