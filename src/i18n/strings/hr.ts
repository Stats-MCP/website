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
    eyebrow: 'Službeni podaci, spremni za vašeg asistenta',
    title: 'Službena nacionalna statistika za svakog AI asistenta.',
    lead: 'StatsMCP povezuje Claude, ChatGPT, Cursor i druge asistente s bazama podataka nacionalnih statističkih ureda. Svaki rezultat navodi svoj izvor.',
    addToClaude: 'Dodaj u Claude',
    addToChatgpt: 'Dodaj u ChatGPT',
    endpointLabel: 'Krajnja točka',
    countryTabs: 'Zemlja',
    status: { live: 'Aktivno', planned: 'Planirano' }
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
    {
      value: '{live}',
      label: 'aktivnih nacionalnih statističkih baza podataka'
    },
    { value: '<1 s', label: 'uobičajeno vrijeme odgovora krajnje točke' },
    { value: '0', label: 'potrebnih računa ili API ključeva' },
    { value: 'Izvor + poveznica', label: 'u svakom rezultatu' }
  ],
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
    title: 'Povežite se u jednom koraku',
    meta: 'Streamable HTTP · samo za čitanje · bez prijave',
    clientTabs: 'Klijent'
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
    pageTitle: 'Zemlje i pokrivenost',
    pageIntro:
      'Svaka zemlja, njezin statistički ured, jezici podataka, broj tablica, licencija za podatke i krajnja točka.',
    tablesNote:
      'Tablice: broj tablica u indeksu tablica koji StatsMCP pretražuje, na prvom jeziku podataka. „Pretraživanje ureda” znači da poslužitelj koristi pretraživanje statističkog ureda.'
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
          'Ne. Krajnja točka ne vodi zapisnike, a ova web-stranica ne koristi kolačiće ni analitiku. Pročitajte stranicu o privatnosti.'
      },
      {
        question: 'Mogu li povezati više zemalja?',
        answer:
          'Da. Dodajte jedan konektor za svaku zemlju. Asistent koristi pravi konektor za vaše pitanje.'
      },
      {
        question: 'Kako se može dodati moja zemlja?',
        answer:
          'Ako ured objavljuje podatke putem PxWeba, možemo je dodati. Otvorite issue na GitHubu.'
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
      'Statistički uredi primaju zahtjeve za podatke koje poslužitelj šalje njihovim API-jima. Ti zahtjevi ne sadrže vašu IP adresu.'
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
