import type { UiStrings } from '@/i18n/ui';

export const isl: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Opinberar hagtölur fyrir gervigreindaraðstoðarmenn',
      description:
        'Tengdu Claude, ChatGPT, Cursor og aðra gervigreindaraðstoðarmenn við gagnasöfn hagstofa. Ókeypis, aðeins lestur, opinn hugbúnaður. Hvert svar vísar í heimild.'
    },
    privacy: {
      title: 'Persónuvernd — StatsMCP',
      description:
        'StatsMCP skráir ekkert: engar atvikaskrár, engar vafrakökur, engar vefmælingar. Lestu hvað endapunkturinn og þessi vefur gera við gögnin þín.'
    },
    countries: {
      title: 'Lönd og umfang — StatsMCP',
      description:
        'Öll lönd í StatsMCP ásamt hagstofu, tungumálum gagna, fjölda taflna, gagnaleyfi og MCP-endapunkti.'
    },
    licences: {
      title: 'Gagnaleyfi — StatsMCP',
      description:
        'Gagnaleyfi og reglur um tilvísun í heimild fyrir hverja hagstofu í StatsMCP, með tenglum á opinbera skilmála um endurnotkun í hverju landi.'
    },
    notFound: {
      title: 'Síða finnst ekki — StatsMCP',
      description: 'Þessi síða er ekki til á StatsMCP.'
    },
    countryLive: {
      title: '{country}: hagtölur fyrir gervigreindaraðstoðarmenn — StatsMCP',
      description:
        '{country}: spurðu Claude, ChatGPT eða Cursor um opinberar hagtölur úr {database} ({office}). Ókeypis MCP-endapunktur, heimild í hverju svari.'
    },
    countryPlanned: {
      title: '{country}: hagtölur fyrir gervigreindaraðstoðarmenn — StatsMCP',
      description:
        '{country}: opinberar hagtölur fyrir Claude, ChatGPT og aðra gervigreindaraðstoðarmenn eru á leið í StatsMCP. Fylgstu með áætluninni á GitHub.'
    },
    countryCard: '{country}: hagtölur fyrir gervigreindaraðstoðarmenn',
    figureNumber: 'Mynd 1'
  },
  nav: {
    tagline: 'Óháð · Opinn hugbúnaður',
    howItWorks: 'Svona virkar það',
    connect: 'Tengjast',
    countries: 'Lönd',
    faq: 'Spurningar og svör',
    language: 'Tungumál',
    github: 'Skoða á GitHub',
    menu: 'Valmynd'
  },
  hero: {
    eyebrow: 'Opinber gögn, tilbúin fyrir aðstoðarmanninn þinn',
    title: 'Opinberar hagtölur ríkja fyrir alla gervigreindaraðstoðarmenn.',
    lead: 'StatsMCP tengir Claude, ChatGPT, Cursor og aðra aðstoðarmenn við gagnasöfn hagstofa. Hver niðurstaða tilgreinir heimild sína.',
    addToClaude: 'Bæta við Claude',
    addToChatgpt: 'Bæta við ChatGPT',
    endpointLabel: 'Endapunktur',
    countryTabs: 'Land',
    status: { live: 'Virkt', planned: 'Fyrirhugað' }
  },
  copy: { copy: 'Afrita', copied: 'Afritað' },
  figure: {
    caption: 'Mynd 1 · Dæmi um samtal',
    you: 'Þú',
    assistant: 'Claude',
    toolCalls: '{count} verkfæraköll',
    sourceLabel: 'Heimild:',
    plannedTitle: '{country} er á dagskrá.',
    plannedText:
      'Netþjónn fyrir {database} er næstur á dagskrá. Dæmi um svör birtast hér þegar hann verður virkur.',
    plannedLink: 'Fylgstu með framvindunni á GitHub'
  },
  keyFiguresLabel: 'Lykiltölur',
  keyFigures: [
    { value: '{live}', label: 'opinber hagtölugagnasöfn virk' },
    { value: '<1 s', label: 'dæmigerður svartími endapunkts' },
    { value: '0', label: 'aðgangar eða API-lyklar sem þarf' },
    { value: 'Heimild + tengill', label: 'í hverri niðurstöðu' }
  ],
  howItWorks: {
    title: 'Svona virkar það',
    stepLabel: 'Skref',
    steps: [
      {
        tool: 'search_tables',
        title: 'Finna töfluna',
        text: 'Aðstoðarmaðurinn leitar í þúsundum opinberra taflna eftir leitarorðum.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Lesa breyturnar',
        text: 'Hann les tímabil, svæði og mælistærðir og finnur kóðana.'
      },
      {
        tool: 'query_table',
        title: 'Sækja tölurnar',
        text: 'Hann sækir gögnin með læsilegum heitum, heimildinni og tengli á töfluna.'
      }
    ]
  },
  connect: {
    title: 'Tengstu í einu skrefi',
    meta: 'Streamable HTTP · aðeins lestur · engin innskráning',
    clientTabs: 'Forrit'
  },
  countries: {
    title: 'Lönd',
    headers: {
      code: 'Kóði',
      country: 'Land',
      source: 'Opinber heimild',
      languages: 'Tungumál',
      licence: 'Gagnaleyfi',
      endpoint: 'Endapunktur',
      status: 'Staða',
      tables: 'Töflur'
    },
    details: 'Nánar',
    propose: 'Vantar landið þitt?',
    proposeLink: 'Leggðu það til á GitHub.',
    tableCount: '{count} töflur',
    officeSearch: 'Leit hagstofu',
    compareAll: 'Bera saman öll lönd',
    pageTitle: 'Lönd og umfang',
    pageIntro:
      'Öll lönd, hagstofa þeirra, tungumál gagnanna, fjöldi taflna, gagnaleyfi og endapunktur.',
    tablesNote:
      'Töflur: fjöldi taflna í töfluskránni sem StatsMCP leitar í, á fyrsta tungumáli gagnanna. „Leit hagstofu“ þýðir að netþjónninn notar leit hagstofunnar.'
  },
  faq: {
    title: 'Spurningar',
    items: [
      {
        question: 'Er þetta ókeypis?',
        answer:
          'Já. Hýstu endapunktarnir eru ókeypis, með hámarki upp á 60 beiðnir á mínútu. Kóðinn er gefinn út með MIT-leyfi.'
      },
      {
        question: 'Er StatsMCP opinbert?',
        answer:
          'Nei. StatsMCP er óháð og er hvorki á vegum hagstofu né með stuðningi hennar. Gögnin koma beint úr opinberu API hverrar hagstofu.'
      },
      {
        question: 'Geymið þið spurningarnar mínar?',
        answer:
          'Nei. Endapunkturinn heldur engar atvikaskrár, og þessi vefur notar hvorki vafrakökur né vefmælingar. Lestu síðuna um persónuvernd.'
      },
      {
        question: 'Get ég tengt mörg lönd?',
        answer:
          'Já. Bættu við einni tengingu fyrir hvert land. Aðstoðarmaðurinn notar rétta tengingu fyrir spurninguna þína.'
      },
      {
        question: 'Hvernig er hægt að bæta landinu mínu við?',
        answer:
          'Ef hagstofan birtir gögnin sín í gegnum PxWeb getum við bætt henni við. Stofnaðu mál á GitHub.'
      }
    ]
  },
  footer: {
    disclaimer: 'Ekki á vegum neinnar hagstofu og ekki með stuðningi hennar.',
    product: 'Vara',
    openSource: 'Opinn hugbúnaður',
    legal: 'Lagalegt',
    documentation: 'Skjölun',
    licences: 'Gagnaleyfi eftir löndum',
    privacy: 'Persónuvernd',
    security: 'Öryggi'
  },
  privacy: {
    title: 'Persónuvernd',
    intro: 'StatsMCP skráir ekki beiðnirnar þínar.',
    points: [
      'Hýsti endapunkturinn heldur engar atvikaskrár. Við geymum ekki spurningarnar þínar, verkfæraköllin eða niðurstöðurnar.',
      'Hraðatakmörkunin telur beiðnir frá hverri IP-tölu í eina mínútu. Hún geymir þær ekki eftir það.',
      'Þessi vefur notar engar vafrakökur, engar vefmælingar og engar skriftur frá þriðja aðila. Leturgerðirnar eru á okkar eigin netþjóni.',
      'Cloudflare rekur endapunktinn og þennan vef. Cloudflare vinnur úr beiðnum sem hýsingaraðili okkar samkvæmt persónuverndarstefnu Cloudflare.',
      'Hagstofurnar taka við gagnabeiðnunum sem netþjónninn sendir í API þeirra. Þessar beiðnir innihalda ekki IP-töluna þína.'
    ],
    questions: 'Spurningar: stofnaðu mál á GitHub.'
  },
  licences: {
    title: 'Gagnaleyfi',
    intro:
      'Kóði StatsMCP er gefinn út með MIT-leyfi. Gögnin tilheyra hverri hagstofu og skilmálar hennar gilda.',
    attribution:
      'Ef þú reiknar nýjar tölur úr gögnunum skaltu taka það fram, til dæmis: „Heimild: SURS / Útreikningar: <nafn þitt>“.'
  },
  notFound: {
    title: 'Síða finnst ekki',
    text: 'Þessi síða er ekki til.',
    home: 'Fara á forsíðu'
  }
};
