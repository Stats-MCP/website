import type { UiStrings } from '@/i18n/ui';

export const fr: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Statistiques officielles pour les assistants IA',
      description:
        'Connectez Claude, ChatGPT, Cursor et d’autres assistants IA aux offices statistiques nationaux et à Eurostat avec un seul point d’accès MCP. Gratuit, en lecture seule et open source. Chaque réponse cite sa source.'
    },
    privacy: {
      title: 'Confidentialité — StatsMCP',
      description:
        'StatsMCP n’enregistre rien : aucun journal de requêtes, aucun cookie, aucun outil d’analyse. Découvrez ce que le point d’accès et ce site font de vos données.'
    },
    countries: {
      title: 'Se connecter à un seul office statistique — StatsMCP',
      description:
        'Le point d’accès MCP, les langues des données, le nombre de tableaux et la licence de chaque office statistique de StatsMCP. Copiez un point d’accès ou connectez tous les offices à la fois.'
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
    eyebrow: 'Gratuit et open source',
    title:
      'Les statistiques officielles de {countries} pays et de l’UE, dans votre assistant IA.',
    lead: 'StatsMCP connecte Claude, ChatGPT, Cursor et VS Code à {offices} offices statistiques. Chaque réponse cite sa source et renvoie au tableau.',
    addToClaude: 'Ajouter à Claude',
    addToChatgpt: 'Ajouter à ChatGPT',
    allEndpointLabel: 'Un seul point d’accès pour tous les pays',
    otherAssistants: 'Autres assistants',
    oneCountry:
      'Un seul pays vous suffit ? Chaque office a aussi son propre point d’accès.',
    endpointLabel: 'Point d’accès',
    countryTabs: 'Pays',
    status: {
      live: 'En service',
      planned: 'Prévu',
      limited: 'Recherche seule'
    },
    limitedNote:
      'La recherche de tableaux fonctionne. L’office bloque actuellement les requêtes de données de notre hébergeur. Le paquet npm fonctionne entièrement.',
    privacy: 'Aucun journal · Aucune inscription · Aucun cookie'
  },
  copy: { copy: 'Copier', copied: 'Copié' },
  home: {
    title: '{offices} offices statistiques, une seule connexion.',
    lead: 'Ajoutez un serveur MCP à votre assistant IA. Interrogez n’importe lequel des {offices} offices, de la Slovénie à l’Australie. Votre assistant consulte {tables} tableaux officiels et cite la source.',
    compareQuestion: 'Compare le chômage au Canada et dans l’UE.',
    compareAnswer:
      'En {period}, le taux de chômage était de {canada} au Canada et de {eu} dans l’UE. Les deux taux sont corrigés des variations saisonnières.',
    euShort: 'UE',
    tryTitle: 'Exemples de questions'
  },
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
    { value: '{live}', label: 'offices statistiques en service' },
    {
      value: '{tables}',
      label: 'tableaux officiels dans l’index de recherche'
    },
    { value: '0', label: 'journal, compte ou clé API' },
    {
      value: '100 %',
      label: 'des résultats citent la source et renvoient au tableau'
    }
  ],
  audiences: {
    title: 'Qui utilise StatsMCP',
    items: [
      {
        who: 'Développeurs',
        text: 'Ajoutez des données officielles à votre agent avec une seule URL.',
        prompt: 'Quelles communes danoises ont le plus grandi en 2025 ?'
      },
      {
        who: 'Journalistes',
        text: 'Vérifiez un chiffre et obtenez le lien vers le tableau pour votre article.',
        prompt: 'Le chômage en Finlande est-il plus élevé qu’il y a un an ?'
      },
      {
        who: 'Analystes',
        text: 'Comparez des pays sans télécharger de tableurs.',
        prompt:
          'Compare les prix des logements en Norvège et en Irlande depuis 2020.'
      },
      {
        who: 'Chercheurs',
        text: 'Trouvez le bon tableau, ses codes et sa licence.',
        prompt:
          'Quel tableau donne les naissances selon l’âge de la mère en Islande ?'
      }
    ]
  },
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
    title: 'Connexion en moins d’une minute',
    meta: 'Streamable HTTP · lecture seule · sans inscription · 60 requêtes/min',
    clientTabs: 'Client',
    otherClients: 'Autres clients',
    runLocally: 'Exécution locale',
    allCountries: 'n’importe quel pays',
    oneOfficeLink: 'Se connecter à un seul office'
  },
  countryPage: {
    title: '{country} : les statistiques officielles dans votre assistant IA.',
    leadIndexed:
      'Interrogez {tables} tableaux. Source : {office}. Licence : {licence}. Gratuit, sans inscription.',
    leadOffice:
      'Interrogez les tableaux de l’office. Source : {office}. Licence : {licence}. Gratuit, sans inscription.',
    seeAll: 'Voir les {count} sources'
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
    compareAll: 'Tous les points d’accès et leur couverture',
    pageTitle: '{offices} offices. Connectez-vous à tous ou à un seul.',
    pageIntro:
      'Un seul point d’accès vous connecte à tous les offices. Pour n’utiliser qu’un seul office, copiez son point d’accès ci-dessous.',
    tablesNote:
      'Tableaux : tableaux de notre index de recherche. Recherche de l’office : le serveur utilise le moteur de recherche de l’office.'
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
          'Non. Nous ne conservons aucun journal, et ce site n’utilise ni cookies ni outils d’analyse. Votre assistant envoie seulement des mots-clés et des codes de tableaux à notre serveur. Votre fournisseur d’IA voit tout de même votre conversation. Consultez la page Confidentialité.'
      },
      {
        question: 'Puis-je connecter plusieurs pays ?',
        answer:
          'Oui. Connectez https://statsmcp.dev/mcp une seule fois et posez des questions sur n’importe quel pays. Pour n’utiliser qu’un seul office, connectez son propre point d’accès depuis la page Pays.'
      },
      {
        question: 'Puis-je l’exécuter sur mon propre ordinateur ?',
        answer:
          'Oui. Les serveurs sont sur npm. Dans la section Connexion, ouvrez l’onglet « Exécution locale ». Vos questions vont alors uniquement à l’office statistique.'
      },
      {
        question: 'Comment ajouter mon pays ?',
        answer:
          'Ouvrez une issue sur GitHub. Nous pouvons ajouter la plupart des offices qui ont une API publique.'
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
      'Les offices statistiques reçoivent les requêtes de données que le serveur envoie à leurs API. Ces requêtes ne contiennent pas votre adresse IP.',
      'Le fournisseur de votre assistant IA, par exemple Anthropic ou OpenAI, voit votre conversation selon ses propres conditions.'
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
