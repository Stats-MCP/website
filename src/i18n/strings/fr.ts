import type { UiStrings } from '@/i18n/ui';

export const fr: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Statistiques officielles pour les assistants IA',
      description:
        'Connectez Claude, ChatGPT, Cursor et d’autres assistants IA aux bases de données des statistiques nationales. Gratuit, en lecture seule, open source. Chaque réponse cite sa source.'
    },
    privacy: {
      title: 'Confidentialité — StatsMCP',
      description:
        'StatsMCP n’enregistre rien : aucun journal de requêtes, aucun cookie, aucun outil d’analyse. Découvrez ce que le point d’accès et ce site font de vos données.'
    },
    countries: {
      title: 'Pays et couverture — StatsMCP',
      description:
        'Tous les pays de StatsMCP avec leur office statistique, les langues des données, le nombre de tableaux, la licence des données et le point d’accès MCP.'
    },
    licences: {
      title: 'Licences des données — StatsMCP',
      description:
        'La licence des données et les règles d’attribution de chaque office statistique de StatsMCP, avec des liens vers les conditions officielles de réutilisation de chaque pays.'
    },
    notFound: {
      title: 'Page introuvable — StatsMCP',
      description: 'Cette page n’existe pas sur StatsMCP.'
    },
    countryLive: {
      title: '{country} : statistiques pour les assistants IA — StatsMCP',
      description:
        '{country} : interrogez Claude, ChatGPT ou Cursor sur les statistiques officielles de {database} ({office}). Point d’accès MCP gratuit, sources dans chaque réponse.'
    },
    countryPlanned: {
      title: '{country} : statistiques pour les assistants IA — StatsMCP',
      description:
        '{country} : les statistiques officielles pour Claude, ChatGPT et d’autres assistants IA arrivent bientôt sur StatsMCP. Suivez la feuille de route sur GitHub.'
    },
    countryCard: '{country} : statistiques pour les assistants IA',
    figureNumber: 'Figure 1'
  },
  nav: {
    tagline: 'Indépendant · Open source',
    howItWorks: 'Fonctionnement',
    connect: 'Connexion',
    countries: 'Pays',
    faq: 'FAQ',
    language: 'Langue',
    github: 'Voir sur GitHub',
    menu: 'Menu'
  },
  hero: {
    eyebrow: 'Données officielles, prêtes pour votre assistant',
    title:
      'Les statistiques nationales officielles pour tous les assistants IA.',
    lead: 'StatsMCP connecte Claude, ChatGPT, Cursor et d’autres assistants aux bases de données des offices statistiques nationaux. Chaque résultat cite sa source.',
    addToClaude: 'Ajouter à Claude',
    addToChatgpt: 'Ajouter à ChatGPT',
    endpointLabel: 'Point d’accès',
    countryTabs: 'Pays',
    status: { live: 'En service', planned: 'Prévu' }
  },
  copy: { copy: 'Copier', copied: 'Copié' },
  figure: {
    caption: 'Figure 1 · Exemple de conversation',
    you: 'Vous',
    assistant: 'Claude',
    toolCalls: '{count} appels d’outils',
    sourceLabel: 'Source :',
    plannedTitle: '{country} : en préparation.',
    plannedText:
      'Le serveur {database} est la prochaine étape de la feuille de route. Des exemples de réponses apparaîtront ici dès sa mise en service.',
    plannedLink: 'Suivre l’avancement sur GitHub'
  },
  keyFiguresLabel: 'Chiffres clés',
  keyFigures: [
    { value: '{live}', label: 'bases de statistiques nationales en service' },
    { value: '<1 s', label: 'délai de réponse habituel du point d’accès' },
    { value: '0', label: 'compte ou clé API nécessaire' },
    { value: 'Source + lien', label: 'dans chaque résultat' }
  ],
  howItWorks: {
    title: 'Fonctionnement',
    stepLabel: 'Étape',
    steps: [
      {
        tool: 'search_tables',
        title: 'Trouver le tableau',
        text: 'L’assistant recherche par mot-clé parmi des milliers de tableaux officiels.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Lire les variables',
        text: 'Il lit les périodes, les régions et les mesures, et trouve les codes.'
      },
      {
        tool: 'query_table',
        title: 'Obtenir les chiffres',
        text: 'Il obtient les données avec des libellés lisibles, la source et un lien vers le tableau.'
      }
    ]
  },
  connect: {
    title: 'Connexion en une étape',
    meta: 'Streamable HTTP · lecture seule · sans inscription',
    clientTabs: 'Client'
  },
  countries: {
    title: 'Pays',
    headers: {
      code: 'Code',
      country: 'Pays',
      source: 'Source officielle',
      languages: 'Langues',
      licence: 'Licence des données',
      endpoint: 'Point d’accès',
      status: 'Statut',
      tables: 'Tableaux'
    },
    details: 'Détails',
    propose: 'Votre pays n’est pas dans la liste ?',
    proposeLink: 'Proposez-le sur GitHub.',
    tableCount: '{count} tableaux',
    officeSearch: 'Recherche de l’office',
    compareAll: 'Comparer tous les pays',
    pageTitle: 'Pays et couverture',
    pageIntro:
      'Chaque pays, son office statistique, les langues de ses données, le nombre de tableaux, la licence des données et le point d’accès.',
    tablesNote:
      'Tableaux : le nombre de tableaux dans l’index que StatsMCP consulte, dans la première langue des données. « Recherche de l’office » signifie que le serveur utilise le moteur de recherche de l’office statistique.'
  },
  faq: {
    title: 'Questions',
    items: [
      {
        question: 'Est-ce gratuit ?',
        answer:
          'Oui. Les points d’accès hébergés sont gratuits, avec une limite de 60 requêtes par minute. Le code est sous licence MIT.'
      },
      {
        question: 'StatsMCP est-il officiel ?',
        answer:
          'Non. StatsMCP est indépendant et n’est ni affilié à un office statistique ni approuvé par un office statistique. Les données proviennent directement de l’API publique de chaque office.'
      },
      {
        question: 'Enregistrez-vous mes questions ?',
        answer:
          'Non. Le point d’accès n’écrit aucun journal, et ce site n’utilise ni cookies ni outils d’analyse. Consultez la page Confidentialité.'
      },
      {
        question: 'Puis-je connecter plusieurs pays ?',
        answer:
          'Oui. Ajoutez un connecteur par pays. L’assistant utilise le bon connecteur pour votre question.'
      },
      {
        question: 'Comment ajouter mon pays ?',
        answer:
          'Si l’office publie ses données avec PxWeb, nous pouvons l’ajouter. Ouvrez une issue sur GitHub.'
      }
    ]
  },
  footer: {
    disclaimer:
      'Ni affilié à un office statistique ni approuvé par un office statistique.',
    product: 'Produit',
    openSource: 'Open source',
    legal: 'Mentions légales',
    documentation: 'Documentation',
    licences: 'Licences des données par pays',
    privacy: 'Confidentialité',
    security: 'Sécurité'
  },
  privacy: {
    title: 'Confidentialité',
    intro: 'StatsMCP n’enregistre pas vos requêtes.',
    points: [
      'Le point d’accès hébergé n’écrit aucun journal. Nous ne conservons ni vos questions, ni les appels d’outils, ni les résultats.',
      'Le limiteur de débit compte les requêtes de chaque adresse IP pendant une minute. Il ne les conserve pas ensuite.',
      'Ce site n’utilise ni cookies, ni outils d’analyse, ni scripts tiers. Les polices sont sur notre propre serveur.',
      'Cloudflare exploite le point d’accès et ce site. Cloudflare traite les requêtes en tant qu’hébergeur, selon la politique de confidentialité de Cloudflare.',
      'Les offices statistiques reçoivent les requêtes de données que le serveur envoie à leurs API. Ces requêtes ne contiennent pas votre adresse IP.'
    ],
    questions: 'Questions : ouvrez une issue sur GitHub.'
  },
  licences: {
    title: 'Licences des données',
    intro:
      'Le code de StatsMCP est sous licence MIT. Les données appartiennent à chaque office statistique, et ses conditions s’appliquent.',
    attribution:
      'Si vous calculez de nouveaux chiffres à partir des données, indiquez-le, par exemple : « Source : SURS / Calculs : <votre nom> ».'
  },
  notFound: {
    title: 'Page introuvable',
    text: 'Cette page n’existe pas.',
    home: 'Aller à la page d’accueil'
  }
};
