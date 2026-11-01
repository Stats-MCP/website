import type { UiStrings } from '@/i18n/ui';

export const de: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Amtliche Statistik für KI-Assistenten',
      description:
        'Verbinden Sie Claude, ChatGPT, Cursor und andere KI-Assistenten mit nationalen Statistikdatenbanken. Kostenlos, nur Lesezugriff, Open Source. Jede Antwort nennt die Quelle.'
    },
    privacy: {
      title: 'Datenschutz — StatsMCP',
      description:
        'StatsMCP protokolliert nichts: keine Anfrageprotokolle, keine Cookies, keine Analyse-Tools. Lesen Sie, was der Endpunkt und diese Website mit Ihren Daten tun.'
    },
    countries: {
      title: 'Länder und Abdeckung — StatsMCP',
      description:
        'Alle Länder in StatsMCP mit Statistikamt, Datensprachen, Anzahl der Tabellen, Datenlizenz und MCP-Endpunkt.'
    },
    licences: {
      title: 'Datenlizenzen — StatsMCP',
      description:
        'Die Datenlizenz und die Regeln zur Quellenangabe jedes Statistikamts in StatsMCP, mit Links zu den amtlichen Nutzungsbedingungen jedes Landes.'
    },
    notFound: {
      title: 'Seite nicht gefunden — StatsMCP',
      description: 'Diese Seite gibt es auf StatsMCP nicht.'
    },
    countryLive: {
      title: '{country}: Statistik für KI-Assistenten — StatsMCP',
      description:
        '{country}: Fragen Sie Claude, ChatGPT oder Cursor nach amtlichen Statistiken aus {database} ({office}). Kostenloser MCP-Endpunkt, Quellen in jeder Antwort.'
    },
    countryPlanned: {
      title: '{country}: Statistik für KI-Assistenten — StatsMCP',
      description:
        '{country}: Amtliche Statistiken für Claude, ChatGPT und andere KI-Assistenten kommen bald zu StatsMCP. Verfolgen Sie die Roadmap auf GitHub.'
    },
    countryCard: '{country}: Statistik für KI-Assistenten',
    figureNumber: 'Abbildung 1'
  },
  nav: {
    tagline: 'Unabhängig · Open Source',
    howItWorks: 'So funktioniert es',
    connect: 'Verbinden',
    countries: 'Länder',
    faq: 'FAQ',
    language: 'Sprache',
    github: 'Auf GitHub ansehen',
    menu: 'Menü'
  },
  hero: {
    eyebrow: 'Amtliche Daten für Ihren Assistenten',
    title: 'Amtliche nationale Statistik für jeden KI-Assistenten.',
    lead: 'StatsMCP verbindet Claude, ChatGPT, Cursor und andere Assistenten mit den Datenbanken nationaler Statistikämter. Jedes Ergebnis nennt seine Quelle.',
    addToClaude: 'Zu Claude hinzufügen',
    addToChatgpt: 'Zu ChatGPT hinzufügen',
    endpointLabel: 'Endpunkt',
    countryTabs: 'Land',
    status: { live: 'Live', planned: 'Geplant' }
  },
  copy: { copy: 'Kopieren', copied: 'Kopiert' },
  figure: {
    caption: 'Abbildung 1 · Beispielgespräch',
    you: 'Sie',
    assistant: 'Claude',
    toolCalls: '{count} Tool-Aufrufe',
    sourceLabel: 'Quelle:',
    plannedTitle: '{country}: geplant.',
    plannedText:
      'Der Server für {database} ist als Nächstes auf der Roadmap. Beispielantworten erscheinen hier, sobald er live ist.',
    plannedLink: 'Fortschritt auf GitHub verfolgen'
  },
  keyFiguresLabel: 'Kennzahlen',
  keyFigures: [
    { value: '{live}', label: 'nationale Statistikdatenbanken live' },
    { value: '<1 s', label: 'typische Antwortzeit des Endpunkts' },
    { value: '0', label: 'Konten oder API-Schlüssel nötig' },
    { value: 'Quelle + Link', label: 'in jedem Ergebnis' }
  ],
  howItWorks: {
    title: 'So funktioniert es',
    stepLabel: 'Schritt',
    steps: [
      {
        tool: 'search_tables',
        title: 'Tabelle finden',
        text: 'Der Assistent durchsucht Tausende amtliche Tabellen nach Stichwort.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Variablen lesen',
        text: 'Er liest die Zeiträume, Regionen und Merkmale und findet die Codes.'
      },
      {
        tool: 'query_table',
        title: 'Zahlen abrufen',
        text: 'Er ruft die Daten mit lesbaren Bezeichnungen ab, mit Quelle und Link zur Tabelle.'
      }
    ]
  },
  connect: {
    title: 'In einem Schritt verbinden',
    meta: 'Streamable HTTP · nur Lesezugriff · ohne Anmeldung',
    clientTabs: 'Client'
  },
  countries: {
    title: 'Länder',
    headers: {
      code: 'Code',
      country: 'Land',
      source: 'Amtliche Quelle',
      languages: 'Sprachen',
      licence: 'Datenlizenz',
      endpoint: 'Endpunkt',
      status: 'Status',
      tables: 'Tabellen'
    },
    details: 'Details',
    propose: 'Fehlt Ihr Land?',
    proposeLink: 'Schlagen Sie es auf GitHub vor.',
    tableCount: '{count} Tabellen',
    officeSearch: 'Suche des Amts',
    compareAll: 'Alle Länder vergleichen',
    pageTitle: 'Länder und Abdeckung',
    pageIntro:
      'Alle Länder mit Statistikamt, Datensprachen, Anzahl der Tabellen, Datenlizenz und Endpunkt.',
    tablesNote:
      'Tabellen: die Anzahl der Tabellen im Tabellenindex, den StatsMCP durchsucht, in der ersten Datensprache. „Suche des Amts“ bedeutet, dass der Server die Suche des Statistikamts verwendet.'
  },
  faq: {
    title: 'Fragen',
    items: [
      {
        question: 'Ist es kostenlos?',
        answer:
          'Ja. Die gehosteten Endpunkte sind kostenlos, mit einem Limit von 60 Anfragen pro Minute. Der Code steht unter der MIT-Lizenz.'
      },
      {
        question: 'Ist StatsMCP offiziell?',
        answer:
          'Nein. StatsMCP ist unabhängig und steht in keiner Verbindung zu einem Statistikamt und wird von keinem Statistikamt unterstützt. Die Daten kommen direkt aus der öffentlichen API jedes Amts.'
      },
      {
        question: 'Speichern Sie meine Fragen?',
        answer:
          'Nein. Der Endpunkt schreibt keine Protokolle, und diese Website verwendet keine Cookies oder Analyse-Tools. Lesen Sie die Datenschutzseite.'
      },
      {
        question: 'Kann ich mehrere Länder verbinden?',
        answer:
          'Ja. Fügen Sie für jedes Land einen Connector hinzu. Der Assistent verwendet den passenden für Ihre Frage.'
      },
      {
        question: 'Wie kann mein Land hinzugefügt werden?',
        answer:
          'Wenn das Amt seine Daten über PxWeb veröffentlicht, können wir es hinzufügen. Eröffnen Sie ein Issue auf GitHub.'
      }
    ]
  },
  footer: {
    disclaimer:
      'Steht in keiner Verbindung zu einem Statistikamt und wird von keinem Statistikamt unterstützt.',
    product: 'Produkt',
    openSource: 'Open Source',
    legal: 'Rechtliches',
    documentation: 'Dokumentation',
    licences: 'Datenlizenzen nach Land',
    privacy: 'Datenschutz',
    security: 'Sicherheit'
  },
  privacy: {
    title: 'Datenschutz',
    intro: 'StatsMCP protokolliert Ihre Anfragen nicht.',
    points: [
      'Der gehostete Endpunkt schreibt keine Protokolle. Wir speichern weder Ihre Fragen noch die Tool-Aufrufe oder die Ergebnisse.',
      'Die Ratenbegrenzung zählt die Anfragen pro IP-Adresse für eine Minute. Danach speichert sie sie nicht.',
      'Diese Website verwendet keine Cookies, keine Analyse-Tools und keine Skripte von Dritten. Die Schriften liegen auf unserem eigenen Server.',
      'Cloudflare betreibt den Endpunkt und diese Website. Cloudflare verarbeitet Anfragen als unser Hoster gemäß der Datenschutzrichtlinie von Cloudflare.',
      'Die Statistikämter erhalten die Datenanfragen, die der Server an ihre APIs sendet. Diese Anfragen enthalten Ihre IP-Adresse nicht.'
    ],
    questions: 'Fragen: Eröffnen Sie ein Issue auf GitHub.'
  },
  licences: {
    title: 'Datenlizenzen',
    intro:
      'Der Code von StatsMCP steht unter der MIT-Lizenz. Die Daten gehören dem jeweiligen Statistikamt, und dessen Bedingungen gelten.',
    attribution:
      'Wenn Sie aus den Daten neue Werte berechnen, geben Sie das an, zum Beispiel: „Quelle: SURS / Berechnet von <Ihr Name>“.'
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Seite gibt es nicht.',
    home: 'Zur Startseite'
  }
};
