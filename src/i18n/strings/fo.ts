import type { UiStrings } from '@/i18n/ui';

export const fo: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Almenn hagtøl til AI-hjálparar',
      description:
        'Knýt Claude, ChatGPT, Cursor og aðrar AI-hjálparar at dátugrunnum við tjóðarhagtølum. Ókeypis, bert til lesingar, opin keldukota. Hvørt svar vísir á kelduna.'
    },
    privacy: {
      title: 'Privatlív — StatsMCP',
      description:
        'StatsMCP skrásetir einki: ongar loggar, ongar cookies, onga greining. Les, hvat endapunktið og henda heimasíðan gera við tínar dátur.'
    },
    countries: {
      title: 'Lond og dekningur — StatsMCP',
      description:
        'Øll lond í StatsMCP við hagstovu, dátumálum, tali av talvum, dátuloyvi og MCP-endapunkti.'
    },
    licences: {
      title: 'Dátuloyvi — StatsMCP',
      description:
        'Dátuloyvi og reglur um keldutilvísing hjá hvørjari hagstovu í StatsMCP, við leinkjum til almennu treytirnar fyri endurnýtslu í hvørjum landi.'
    },
    notFound: {
      title: 'Síðan finst ikki — StatsMCP',
      description: 'Henda síðan finst ikki á StatsMCP.'
    },
    countryLive: {
      title: '{country}: hagtøl til AI-hjálparar — StatsMCP',
      description:
        'Almenn hagtøl ({country}) úr {database} ({office}) til Claude, ChatGPT og Cursor. Ókeypis MCP-endapunkt, kelda í hvørjum svari.'
    },
    countryPlanned: {
      title: '{country}: hagtøl til AI-hjálparar — StatsMCP',
      description:
        'Almenn hagtøl ({country}) til Claude, ChatGPT og aðrar AI-hjálparar koma skjótt á StatsMCP. Fylg ætlanini á GitHub.'
    },
    countryCard: '{country}: hagtøl til AI-hjálparar',
    figureNumber: 'Mynd 1'
  },
  nav: {
    tagline: 'Óheft · Opin keldukota',
    howItWorks: 'Soleiðis virkar tað',
    connect: 'Knýt saman',
    countries: 'Lond',
    faq: 'Spurningar',
    language: 'Mál',
    github: 'Sí á GitHub',
    menu: 'Valmynd'
  },
  hero: {
    eyebrow: 'Almennar dátur, klárar til hjálpara tín',
    title: 'Almenn tjóðarhagtøl til allar AI-hjálparar.',
    lead: 'StatsMCP knýtir Claude, ChatGPT, Cursor og aðrar hjálparar at dátugrunnunum hjá hagstovum landanna. Hvørt úrslit nevnir kelduna.',
    addToClaude: 'Legg afturat Claude',
    addToChatgpt: 'Legg afturat ChatGPT',
    endpointLabel: 'Endapunkt',
    countryTabs: 'Land',
    status: { live: 'Í gongd', planned: 'Ætlað' }
  },
  copy: { copy: 'Avrita', copied: 'Avritað' },
  figure: {
    caption: 'Mynd 1 · Dømi um samrøðu',
    you: 'Tú',
    assistant: 'Claude',
    toolCalls: '{count} amboðskøll',
    sourceLabel: 'Kelda:',
    plannedTitle: '{country} er í ætlanini.',
    plannedText:
      'Ambætarin {database} er næstur í ætlanini. Dømi um svar koma her, tá ið hann kemur í gongd.',
    plannedLink: 'Fylg við á GitHub'
  },
  keyFiguresLabel: 'Lyklatøl',
  keyFigures: [
    { value: '{live}', label: 'dátugrunnar við tjóðarhagtølum í gongd' },
    { value: '<1 s', label: 'vanlig svartíð frá endapunktinum' },
    { value: '0', label: 'kontur ella API-lyklar krevjast' },
    { value: 'Kelda + leinkja', label: 'í hvørjum úrsliti' }
  ],
  howItWorks: {
    title: 'Soleiðis virkar tað',
    stepLabel: 'Stig',
    steps: [
      {
        tool: 'search_tables',
        title: 'Finn talvuna',
        text: 'Hjálparin leitar í túsundum av almennum talvum eftir leitorðum.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Les breyturnar',
        text: 'Hann lesur tíðarskeið, øki og mát og finnur koturnar.'
      },
      {
        tool: 'query_table',
        title: 'Fá tølini',
        text: 'Hann fær dáturnar við lesiligum heitum, keldu og leinkju til talvuna.'
      }
    ]
  },
  connect: {
    title: 'Knýt saman í einum stigi',
    meta: 'Streamable HTTP · bert til lesingar · eingin innritan',
    clientTabs: 'Forrit'
  },
  countries: {
    title: 'Lond',
    headers: {
      code: 'Kota',
      country: 'Land',
      source: 'Almenn kelda',
      languages: 'Mál',
      licence: 'Dátuloyvi',
      endpoint: 'Endapunkt',
      status: 'Støða',
      tables: 'Talvur'
    },
    details: 'Smálutir',
    propose: 'Manglar títt land?',
    proposeLink: 'Skjót tað upp á GitHub.',
    tableCount: '{count} talvur',
    officeSearch: 'Leiting hjá hagstovuni',
    compareAll: 'Samanber øll lond',
    pageTitle: 'Lond og dekningur',
    pageIntro:
      'Hvørt land, hagstovan, málini í dátunum, tal av talvum, dátuloyvið og endapunktið.',
    tablesNote:
      'Talvur: tal av talvum í talvuyvirlitinum, sum StatsMCP leitar í, á fyrsta dátumálinum. „Leiting hjá hagstovuni“ merkir, at ambætarin brúkar leitingina hjá hagstovuni.'
  },
  faq: {
    title: 'Spurningar',
    items: [
      {
        question: 'Er tað ókeypis?',
        answer:
          'Ja. Endapunktini, sum vit hýsa, eru ókeypis, við í mesta lagi 60 fyrispurningum um minuttin. Keldukotan er undir MIT-loyvinum.'
      },
      {
        question: 'Er StatsMCP ein almenn tænasta?',
        answer:
          'Nei. StatsMCP er óheft. Ongin hagstova er tengd at StatsMCP ella hevur góðkent tað. Dáturnar koma beinleiðis frá almenna API-num hjá hvørjari hagstovu.'
      },
      {
        question: 'Goyma tit spurningar mínar?',
        answer:
          'Nei. Endapunktið skrásetir ongar loggar, og henda heimasíðan brúkar ongar cookies ella greiningaramboð. Les síðuna um privatlív.'
      },
      {
        question: 'Kann eg knýta fleiri lond at?',
        answer:
          'Ja. Legg eitt samband afturat fyri hvørt land. Hjálparin brúkar tað røtta sambandið til spurning tín.'
      },
      {
        question: 'Hvussu kann mítt land verða lagt afturat?',
        answer:
          'Um hagstovan útgevur dáturnar gjøgnum PxWeb, kunnu vit leggja landið afturat. Stovna eitt issue á GitHub.'
      }
    ]
  },
  footer: {
    disclaimer: 'Ongin hagstova er tengd at StatsMCP ella hevur góðkent tað.',
    product: 'Tænastan',
    openSource: 'Opin keldukota',
    legal: 'Treytir',
    documentation: 'Skjalfesting',
    licences: 'Dátuloyvi eftir landi',
    privacy: 'Privatlív',
    security: 'Trygd'
  },
  privacy: {
    title: 'Privatlív',
    intro: 'StatsMCP skrásetir ikki fyrispurningar tínar.',
    points: [
      'Endapunktið, sum vit hýsa, skrásetir ongar loggar. Vit goyma ikki spurningar tínar, amboðskøllini ella úrslitini.',
      'Avmarkarin telur fyrispurningar frá hvørjari IP-adressu í ein minutt. Hann goymir teir ikki eftir tað.',
      'Henda heimasíðan brúkar ongar cookies, onga greining og ongar skriptir frá triðja parti. Stavsniðini liggja á okkara egna ambætara.',
      'Cloudflare rekur endapunktið og hesa heimasíðuna. Cloudflare viðger fyrispurningar sum hýsari okkara eftir privatlívspolitikki Cloudflare.',
      'Hagstovurnar fáa dátufyrispurningarnar, sum ambætarin sendir til API teirra. Hesir fyrispurningar innihalda ikki IP-adressu tína.'
    ],
    questions: 'Spurningar: stovna eitt issue á GitHub.'
  },
  licences: {
    title: 'Dátuloyvi',
    intro:
      'Keldukotan hjá StatsMCP er undir MIT-loyvinum. Dáturnar eru ogn hjá hvørjari hagstovu, og treytir hennara galda.',
    attribution:
      'Um tú roknar nýggj tøl út frá dátunum, skalt tú siga tað, til dømis: „Kelda: SURS / Roknað av <tær>“.'
  },
  notFound: {
    title: 'Síðan finst ikki',
    text: 'Henda síðan finst ikki.',
    home: 'Far til forsíðuna'
  }
};
