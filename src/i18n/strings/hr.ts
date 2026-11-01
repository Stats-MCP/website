import type { UiStrings } from '@/i18n/ui';

export const hr: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Službena statistika za AI asistente',
      description:
        'Povežite Claude, ChatGPT, Cursor i druge AI asistente s nacionalnim statističkim bazama podataka. Besplatno, samo za čitanje, otvoreni kod. Svaki odgovor navodi izvor.'
    },
    privacy: {
      title: 'Privatnost — StatsMCP',
      description:
        'StatsMCP ništa ne bilježi: nema zapisnika zahtjeva, kolačića ni analitike. Pročitajte što krajnja točka i ova web-stranica rade s vašim podacima.'
    },
    countries: {
      title: 'Zemlje i pokrivenost — StatsMCP',
      description:
        'Sve zemlje u StatsMCP-u sa statističkim uredom, jezicima podataka, brojem tablica, licencijom za podatke i MCP krajnjom točkom.'
    },
    licences: {
      title: 'Licencije za podatke — StatsMCP',
      description:
        'Licencija za podatke i pravila navođenja izvora za svaki statistički ured u StatsMCP-u, s poveznicama na službene uvjete ponovne uporabe za svaku zemlju.'
    },
    notFound: {
      title: 'Stranica nije pronađena — StatsMCP',
      description: 'Ova stranica ne postoji na StatsMCP-u.'
    },
    countryLive: {
      title: '{country}: statistika za AI asistente — StatsMCP',
      description:
        'Službena statistika ({country}) iz baze {database} ({office}) za Claude, ChatGPT i Cursor. Besplatna MCP krajnja točka, izvor u svakom odgovoru.'
    },
    countryPlanned: {
      title: '{country}: statistika za AI asistente — StatsMCP',
      description:
        'Službena statistika ({country}) za Claude, ChatGPT i druge AI asistente uskoro dolazi na StatsMCP. Pratite plan razvoja na GitHubu.'
    },
    countryCard: '{country}: statistika za AI asistente',
    figureNumber: 'Slika 1'
  },
  nav: {
    tagline: 'Neovisno · Otvoreni kod',
    howItWorks: 'Kako radi',
    connect: 'Povezivanje',
    countries: 'Zemlje',
    faq: 'Pitanja',
    language: 'Jezik',
    github: 'Pogledajte na GitHubu',
    menu: 'Izbornik'
  },
  hero: {
    eyebrow: 'Besplatno i otvorenog koda',
    title:
      'Službena statistika iz {countries} zemalja i EU-a u vašem AI asistentu.',
    lead: 'StatsMCP povezuje Claude, ChatGPT, Cursor i VS Code s {offices} statističkih ureda. Svaki odgovor navodi izvor i poveznicu na tablicu.',
    addToClaude: 'Dodaj u Claude',
    addToChatgpt: 'Dodaj u ChatGPT',
    allEndpointLabel: 'Jedna krajnja točka za sve zemlje',
    otherAssistants: 'Ostali asistenti',
    endpointLabel: 'Krajnja točka',
    countryTabs: 'Zemlja',
    status: {
      live: 'Aktivno',
      planned: 'Planirano',
      limited: 'Samo pretraživanje'
    },
    limitedNote:
      'Pretraživanje tablica radi. Ured trenutačno blokira zahtjeve za podatke s našeg poslužitelja. Paket na npm-u radi u potpunosti.',
    privacy: 'Bez zapisnika · Bez registracije · Bez kolačića'
  },
  copy: { copy: 'Kopiraj', copied: 'Kopirano' },
  figure: {
    caption: 'Slika 1 · Primjer razgovora',
    you: 'Vi',
    assistant: 'Claude',
    toolCalls: '{count} poziva alata',
    sourceLabel: 'Izvor:',
    plannedTitle: '{country} je u planu.',
    plannedText:
      'Poslužitelj {database} sljedeći je u planu razvoja. Primjeri odgovora pojavit će se ovdje kada počne raditi.',
    plannedLink: 'Pratite napredak na GitHubu'
  },
  keyFiguresLabel: 'Ključni podaci',
  keyFigures: [
    { value: '{live}', label: 'aktivnih statističkih ureda' },
    { value: '{tables}', label: 'službenih tablica u indeksu pretraživanja' },
    { value: '0', label: 'zapisnika, računa ili API ključeva' },
    { value: '100 %', label: 'rezultata navodi izvor i poveznicu na tablicu' }
  ],
  audiences: {
    title: 'Tko koristi StatsMCP',
    items: [
      {
        who: 'Programeri',
        text: 'Dodajte službene podatke svojem agentu pomoću jednog URL-a.',
        prompt: 'Koje su danske općine najbrže rasle 2025.?'
      },
      {
        who: 'Novinari',
        text: 'Provjerite podatak i dobijte poveznicu na tablicu za svoj članak.',
        prompt: 'Je li nezaposlenost u Finskoj viša nego prije godinu dana?'
      },
      {
        who: 'Analitičari',
        text: 'Usporedite zemlje bez preuzimanja proračunskih tablica.',
        prompt: 'Usporedi cijene nekretnina u Norveškoj i Irskoj od 2020.'
      },
      {
        who: 'Istraživači',
        text: 'Pronađite pravu tablicu, njezine šifre i licenciju.',
        prompt: 'Koja tablica sadrži rođene prema dobi majke na Islandu?'
      }
    ]
  },
  howItWorks: {
    title: 'Kako radi',
    stepLabel: 'Korak',
    steps: [
      {
        tool: 'search_tables',
        title: 'Pronađi tablicu',
        text: 'Asistent pretražuje tisuće službenih tablica prema ključnoj riječi.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Pročitaj varijable',
        text: 'Čita razdoblja, regije i mjere te pronalazi njihove šifre.'
      },
      {
        tool: 'query_table',
        title: 'Dohvati brojke',
        text: 'Dohvaća podatke s čitljivim oznakama, izvorom i poveznicom na tablicu.'
      }
    ]
  },
  connect: {
    title: 'Povežite se za manje od minute',
    meta: 'Streamable HTTP · samo za čitanje · bez prijave · 60 zahtjeva/min',
    clientTabs: 'Klijent',
    otherClients: 'Ostali klijenti',
    runLocally: 'Lokalno pokretanje',
    allCountries: 'bilo koja zemlja',
    oneOfficeLink: 'Povežite se samo s jednim uredom'
  },
  countryPage: {
    title: '{country}: službena statistika u vašem AI asistentu.',
    leadIndexed:
      'Pretražujte {tables} tablica. Izvor: {office}. Licencija: {licence}. Besplatno, bez registracije.',
    leadOffice:
      'Pretražujte tablice. Izvor: {office}. Licencija: {licence}. Besplatno, bez registracije.',
    seeAll: 'Pogledajte sve izvore ({count})'
  },
  countries: {
    title: 'Zemlje',
    headers: {
      code: 'Kod',
      country: 'Zemlja',
      source: 'Službeni izvor',
      languages: 'Jezici',
      licence: 'Licencija za podatke',
      endpoint: 'Krajnja točka',
      status: 'Status',
      tables: 'Tablice'
    },
    details: 'Detalji',
    propose: 'Nema vaše zemlje?',
    proposeLink: 'Predložite je na GitHubu.',
    tableCount: '{count} tablica',
    officeSearch: 'Pretraživanje ureda',
    compareAll: 'Usporedite sve zemlje',
    pageTitle: '{offices} ureda. Jedna veza.',
    pageIntro:
      'Jednom krajnjom točkom povezujete se sa svim uredima. Ako želite koristiti samo jedan ured, u nastavku kopirajte njegovu krajnju točku.',
    tablesNote:
      'Tablice: tablice u našem indeksu pretraživanja. Pretraživanje ureda: poslužitelj koristi vlastito pretraživanje ureda.'
  },
  faq: {
    title: 'Pitanja',
    items: [
      {
        question: 'Je li besplatno?',
        answer:
          'Da. Naše krajnje točke su besplatne, uz ograničenje od 60 zahtjeva u minuti. Kod je pod licencijom MIT.'
      },
      {
        question: 'Je li StatsMCP službeni servis?',
        answer:
          'Ne. StatsMCP je neovisan. Nije povezan ni s jednim statističkim uredom i nijedan ga ured ne podržava. Podaci dolaze izravno iz javnog API-ja svakog ureda.'
      },
      {
        question: 'Spremate li moja pitanja?',
        answer:
          'Ne. Ne vodimo zapisnike, a ova web-stranica ne koristi kolačiće ni analitiku. Vaš asistent šalje našem poslužitelju samo pojmove za pretraživanje i šifre tablica. Vaš pružatelj AI usluge i dalje vidi vaš razgovor. Pročitajte stranicu o privatnosti.'
      },
      {
        question: 'Mogu li povezati više zemalja?',
        answer:
          'Da. Dodajte jedan konektor za svaku zemlju. Asistent koristi pravi konektor za vaše pitanje.'
      },
      {
        question: 'Mogu li ga pokrenuti na svojem računalu?',
        answer:
          'Da. Poslužitelji su na npm-u. U odjeljku „Povezivanje” otvorite karticu „Lokalno pokretanje”. Tada vaša pitanja idu samo statističkom uredu.'
      },
      {
        question: 'Kako se može dodati moja zemlja?',
        answer:
          'Otvorite issue na GitHubu. Možemo dodati većinu ureda koji imaju javni API.'
      }
    ]
  },
  footer: {
    disclaimer:
      'Nije povezano ni s jednim statističkim uredom i nijedan ga ured ne podržava.',
    product: 'Proizvod',
    openSource: 'Otvoreni kod',
    legal: 'Pravne informacije',
    documentation: 'Dokumentacija',
    licences: 'Licencije za podatke po zemljama',
    privacy: 'Privatnost',
    security: 'Sigurnost'
  },
  privacy: {
    title: 'Privatnost',
    intro: 'StatsMCP ne bilježi vaše zahtjeve.',
    points: [
      'Naša krajnja točka ne vodi zapisnike. Ne spremamo vaša pitanja, pozive alata ni rezultate.',
      'Ograničivač zahtjeva broji zahtjeve za svaku IP adresu tijekom jedne minute. Nakon toga ih ne čuva.',
      'Ova web-stranica ne koristi kolačiće, analitiku ni skripte trećih strana. Fontovi su na našem vlastitom poslužitelju.',
      'Cloudflare pokreće krajnju točku i ovu web-stranicu. Cloudflare obrađuje zahtjeve kao naš pružatelj hostinga u skladu s Cloudflareovim pravilima o privatnosti.',
      'Statistički uredi primaju zahtjeve za podatke koje poslužitelj šalje njihovim API-jima. Ti zahtjevi ne sadrže vašu IP adresu.',
      'Pružatelj vašeg AI asistenta, na primjer Anthropic ili OpenAI, vidi vaš razgovor u skladu sa svojim uvjetima.'
    ],
    questions: 'Pitanja: otvorite issue na GitHubu.'
  },
  licences: {
    title: 'Licencije za podatke',
    intro:
      'Kod StatsMCP-a je pod licencijom MIT. Podaci pripadaju pojedinom statističkom uredu i vrijede njegovi uvjeti.',
    attribution:
      'Ako iz podataka izračunate nove brojke, navedite to, na primjer: „Izvor: SURS / Izračun: <vi>”.'
  },
  notFound: {
    title: 'Stranica nije pronađena',
    text: 'Ova stranica ne postoji.',
    home: 'Idite na početnu stranicu'
  }
};
