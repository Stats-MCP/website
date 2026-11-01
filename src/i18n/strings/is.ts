import type { UiStrings } from '@/i18n/ui';

export const isl: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Opinberar hagtölur fyrir gervigreindaraðstoðarmenn',
      description:
        'Tengdu Claude, ChatGPT, Cursor og aðra gervigreindaraðstoðarmenn við hagstofur ríkja og Eurostat með einum MCP-endapunkti. Ókeypis, aðeins lestur og opinn hugbúnaður. Hvert svar vísar í heimildina.'
    },
    privacy: {
      title: 'Persónuvernd — StatsMCP',
      description:
        'StatsMCP skráir ekkert: engar atvikaskrár, engar vafrakökur, engar vefmælingar. Lestu hvað endapunkturinn og þessi vefur gera við gögnin þín.'
    },
    countries: {
      title: 'Tengjast einni hagstofu — StatsMCP',
      description:
        'MCP-endapunktur, gagnatungumál, fjöldi taflna og leyfi hverrar hagstofu í StatsMCP. Afritaðu einn endapunkt eða tengdu allar hagstofurnar í einu.'
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
    eyebrow: 'Ókeypis og opinn hugbúnaður',
    title:
      'Opinberar hagtölur frá {countries} löndum og ESB, í gervigreindaraðstoðarmanninum þínum.',
    lead: 'StatsMCP tengir Claude, ChatGPT, Cursor og VS Code við {offices} hagstofur. Hvert svar tilgreinir heimild og tengir á töfluna.',
    addToClaude: 'Bæta við Claude',
    addToChatgpt: 'Bæta við ChatGPT',
    allEndpointLabel: 'Einn endapunktur fyrir öll lönd',
    otherAssistants: 'Aðrir aðstoðarmenn',
    oneCountry:
      'Þarftu aðeins eitt land? Hver hagstofa hefur líka sinn eigin endapunkt.',
    endpointLabel: 'Endapunktur',
    countryTabs: 'Land',
    status: {
      live: 'Virkt',
      planned: 'Fyrirhugað',
      limited: 'Aðeins leit'
    },
    limitedNote:
      'Töfluleit virkar. Hagstofan lokar sem stendur á gagnabeiðnir frá hýsingaraðila okkar. npm-pakkinn virkar að fullu.',
    privacy: 'Engar atvikaskrár · Engin skráning · Engar vafrakökur'
  },
  copy: { copy: 'Afrita', copied: 'Afritað' },
  home: {
    title: '{offices} hagstofur, ein tenging.',
    lead: 'Bættu einum MCP-þjóni við gervigreindaraðstoðarmanninn þinn. Spurðu um hverja sem er af {offices} hagstofum, frá Slóveníu til Ástralíu. Aðstoðarmaðurinn leitar í {tables} opinberum töflum og vísar í heimildina.',
    compareQuestion: 'Berðu saman atvinnuleysi í Kanada og ESB.',
    compareAnswer:
      'Á tímabilinu {period} var atvinnuleysi {canada} í Kanada og {eu} í ESB. Báðar tölurnar eru árstíðaleiðréttar.',
    euShort: 'ESB',
    tryTitle: 'Prófaðu að spyrja'
  },
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
    { value: '{live}', label: 'hagstofur virkar' },
    { value: '{tables}', label: 'opinberar töflur í leitarskránni' },
    { value: '0', label: 'atvikaskrár, aðgangar eða API-lyklar' },
    {
      value: '100%',
      label: 'niðurstaðna tilgreina heimild og tengja á töfluna'
    }
  ],
  audiences: {
    title: 'Hverjir nota StatsMCP',
    items: [
      {
        who: 'Forritarar',
        text: 'Bættu opinberum gögnum við gervigreindarforritið þitt með einni vefslóð.',
        prompt: 'Hvaða sveitarfélög í Danmörku uxu hraðast árið 2025?'
      },
      {
        who: 'Blaðamenn',
        text: 'Staðfestu tölu og fáðu tengil á töfluna fyrir greinina þína.',
        prompt: 'Er atvinnuleysi í Finnlandi meira en fyrir ári?'
      },
      {
        who: 'Greinendur',
        text: 'Berðu saman lönd án þess að sækja töflureikna.',
        prompt: 'Berðu saman íbúðaverð í Noregi og á Írlandi frá 2020.'
      },
      {
        who: 'Rannsakendur',
        text: 'Finndu réttu töfluna, kóða hennar og leyfi.',
        prompt: 'Hvaða tafla sýnir fædda eftir aldri móður á Íslandi?'
      }
    ]
  },
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
    title: 'Tengstu á innan við mínútu',
    meta: 'Streamable HTTP · aðeins lestur · engin innskráning · 60 beiðnir/mín',
    clientTabs: 'Forrit',
    otherClients: 'Önnur forrit',
    runLocally: 'Keyra staðbundið',
    allCountries: 'hvaða land sem er',
    oneOfficeLink: 'Tengjast aðeins einni hagstofu'
  },
  countryPage: {
    title: '{country}: opinberar hagtölur í aðstoðarmanninum þínum.',
    leadIndexed:
      'Leitaðu í {tables} töflum. Heimild: {office}. Gagnaleyfi: {licence}. Ókeypis, engin skráning.',
    leadOffice:
      'Leitaðu í töflum hagstofunnar. Heimild: {office}. Gagnaleyfi: {licence}. Ókeypis, engin skráning.',
    seeAll: 'Sjá allar heimildir ({count})'
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
    compareAll: 'Allir endapunktar og umfang',
    pageTitle: '{offices} hagstofur. Tengdu allar eða aðeins eina.',
    pageIntro:
      'Með einum endapunkti tengist þú öllum hagstofunum. Ef þú vilt aðeins nota eina hagstofu skaltu afrita endapunkt hennar hér fyrir neðan.',
    tablesNote:
      'Töflur: töflur í leitarskránni okkar. Leit hagstofu: netþjónninn notar eigin leit hagstofunnar.'
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
          'Nei. Við höldum engar atvikaskrár, og þessi vefur notar hvorki vafrakökur né vefmælingar. Aðstoðarmaðurinn sendir aðeins leitarorð og töflukóða á netþjóninn okkar. Gervigreindarþjónustan þín sér samt samtalið. Lestu síðuna um persónuvernd.'
      },
      {
        question: 'Get ég tengt mörg lönd?',
        answer:
          'Já. Tengdu https://statsmcp.dev/mcp einu sinni og spurðu um hvaða land sem er. Ef þú vilt aðeins nota eina hagstofu skaltu tengja endapunkt hennar af síðunni Lönd.'
      },
      {
        question: 'Get ég keyrt þetta á eigin tölvu?',
        answer:
          'Já. Netþjónarnir eru á npm. Opnaðu flipann „Keyra staðbundið“ undir Tengjast. Þá fara spurningarnar þínar aðeins til hagstofunnar.'
      },
      {
        question: 'Hvernig er hægt að bæta landinu mínu við?',
        answer:
          'Stofnaðu mál á GitHub. Við getum bætt við flestum hagstofum sem hafa opið API.'
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
      'Hagstofurnar taka við gagnabeiðnunum sem netþjónninn sendir í API þeirra. Þessar beiðnir innihalda ekki IP-töluna þína.',
      'Veitandi gervigreindaraðstoðarmannsins þíns, til dæmis Anthropic eða OpenAI, sér samtalið þitt samkvæmt eigin skilmálum.'
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
