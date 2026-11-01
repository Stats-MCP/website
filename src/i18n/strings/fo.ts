import type { UiStrings } from '@/i18n/ui';

export const fo: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Almenn hagtøl til vitlíkishjálparar',
      description:
        'Knýt Claude, ChatGPT, Cursor og aðrar vitlíkishjálparar at hagstovum landanna og Eurostat við einum MCP-endapunkti. Ókeypis, bert til lesingar og opin keldukota. Hvørt svar greiðir frá keldu.'
    },
    privacy: {
      title: 'Privatlív — StatsMCP',
      description:
        'StatsMCP skrásetir einki: ongar loggar, ongar cookies, onga greining. Les, hvat endapunktið og henda heimasíðan gera við tínar dátur.'
    },
    countries: {
      title: 'Knýt teg at einari hagstovu — StatsMCP',
      description:
        'MCP-endapunktið, dátumálini, talið av talvum og loyvið hjá hvørjari hagstovu í StatsMCP. Avrita eitt endapunkt, ella knýt allar hagstovurnar at í senn.'
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
      title: '{country}: hagtøl til vitlíkishjálparar — StatsMCP',
      description:
        'Almenn hagtøl ({country}) úr {database} ({office}) til Claude, ChatGPT og Cursor. Ókeypis MCP-endapunkt, kelda í hvørjum svari.'
    },
    countryPlanned: {
      title: '{country}: hagtøl til vitlíkishjálparar — StatsMCP',
      description:
        'Almenn hagtøl ({country}) til Claude, ChatGPT og aðrar vitlíkishjálparar koma skjótt á StatsMCP. Fylg ætlanini á GitHub.'
    },
    countryCard: '{country}: hagtøl til vitlíkishjálparar',
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
    eyebrow: 'Ókeypis og opin keldukota',
    addToClaude: 'Legg afturat Claude',
    addToChatgpt: 'Legg afturat ChatGPT',
    allEndpointLabel: 'Eitt endapunkt fyri øll lond',
    otherAssistants: 'Aðrir hjálparar',
    oneCountry:
      'Tørvar tú bert eitt land? Hvør hagstova hevur eisini sítt egna endapunkt.',
    endpointLabel: 'Endapunkt',
    countryTabs: 'Land',
    status: { live: 'Í gongd', planned: 'Ætlað', limited: 'Bert leiting' },
    limitedNote:
      'Leiting í talvum virkar. Hagstovan steingir í løtuni fyri dátufyrispurningum frá hýsara okkara. npm-pakkin virkar fult út.',
    privacy: 'Ongar loggar · Eingin innritan · Ongar cookies'
  },
  copy: { copy: 'Avrita', copied: 'Avritað' },
  home: {
    title: '{offices} hagstovur, eitt samband.',
    lead: 'Legg ein MCP-ambætara afturat vitlíkishjálparanum hjá tær. Spyr um hvørja sum helst av {offices} hagstovum, frá Slovenia til Avstralia. Hjálparin leitar í {tables} almennum talvum og greiðir frá keldu.',
    compareQuestion: 'Samanber arbeiðsloysið í Kanada og ES.',
    compareAnswer:
      'Í tíðarskeiðnum {period} var arbeiðsloysið {canada} í Kanada og {eu} í ES. Bæði tølini eru árstíðarjavnað.',
    euShort: 'ES',
    tryTitle: 'Royn at spyrja'
  },
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
    { value: '{live}', label: 'hagstovur í gongd' },
    { value: '{tables}', label: 'almennar talvur í leitiyvirlitinum' },
    { value: '0', label: 'loggar, kontur ella API-lyklar' },
    {
      value: '100%',
      label: 'av úrslitunum nevna kelduna og hava leinkju til talvuna'
    }
  ],
  audiences: {
    title: 'Hvør brúkar StatsMCP',
    items: [
      {
        who: 'Forritarar',
        text: 'Legg almennar dátur afturat agenti tínum við einum URL.',
        prompt: 'Hvørjar danskar kommunur vuksu mest í 2025?'
      },
      {
        who: 'Tíðindafólk',
        text: 'Kanna eitt tal og fá leinkjuna til talvuna til greinina.',
        prompt: 'Er arbeiðsloysið í Finnlandi hægri enn fyri einum ári síðan?'
      },
      {
        who: 'Greinarar',
        text: 'Samanber lond uttan at taka rokniark niður.',
        prompt: 'Samanber húsaprísir í Noregi og Írlandi síðan 2020.'
      },
      {
        who: 'Granskarar',
        text: 'Finn røttu talvuna, koturnar og loyvið.',
        prompt: 'Hvør talva hevur føðingar eftir aldri móðurinnar í Íslandi?'
      }
    ]
  },
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
    title: 'Knýt saman á minni enn einum minutti',
    meta: 'Streamable HTTP · bert til lesingar · eingin innritan · 60 fyrispurningar/min',
    clientTabs: 'Forrit',
    otherClients: 'Onnur forrit',
    runLocally: 'Koyr á egnu teldu',
    allCountries: 'hvørt land sum helst',
    oneOfficeLink: 'Knýt teg bert at einari hagstovu'
  },
  countryPage: {
    title: '{country}: almenn hagtøl í vitlíkishjálpara tínum.',
    leadIndexed:
      'Leita í {tables} talvum. Kelda: {office}. Loyvi: {licence}. Ókeypis, eingin innritan.',
    leadOffice:
      'Leita í talvunum. Kelda: {office}. Loyvi: {licence}. Ókeypis, eingin innritan.',
    seeAll: 'Sí allar keldur ({count})'
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
    compareAll: 'Øll endapunkt og dekningur',
    pageTitle: '{offices} hagstovur. Knýt allar at, ella bert eina.',
    pageIntro:
      'Við einum endapunkti knýtir tú teg at øllum hagstovunum. Vilt tú bert brúka eina hagstovu, avritar tú endapunktið hjá henni niðanfyri.',
    tablesNote:
      'Talvur: talvur í leitiyvirliti okkara. Leiting hjá hagstovuni: ambætarin brúkar leitingina hjá hagstovuni sjálvari.'
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
          'Nei. Vit goyma ongar loggar, og henda heimasíðan brúkar ongar cookies ella greiningaramboð. Hjálparin sendir bert leitorð og talvukotur til ambætara okkara. Veitarin av vitlíkinum sær tó framvegis samrøðu tína. Les síðuna um privatlív.'
      },
      {
        question: 'Kann eg knýta fleiri lond at?',
        answer:
          'Ja. Knýt https://statsmcp.dev/mcp at eina ferð, og spyr um hvørt land sum helst. Vilt tú bert brúka eina hagstovu, knýtir tú hennara egna endapunkt at frá síðuni Lond.',
        link: 'countries/'
      },
      {
        question: 'Kann eg koyra tað á míni egnu teldu?',
        answer:
          'Ja. Ambætararnir eru á npm. Lat fanan „Koyr á egnu teldu“ upp undir „Knýt saman“. Tá fara spurningar tínir bert til hagstovuna.'
      },
      {
        question: 'Hvussu kann mítt land verða lagt afturat?',
        answer:
          'Stovna eitt issue á GitHub. Vit kunnu leggja flestu hagstovur afturat, sum hava eitt alment API.'
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
      'Hagstovurnar fáa dátufyrispurningarnar, sum ambætarin sendir til API teirra. Hesir fyrispurningar innihalda ikki IP-adressu tína.',
      'Veitarin av vitlíkishjálpara tínum, til dømis Anthropic ella OpenAI, sær samrøðu tína eftir sínum egnu treytum.'
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
