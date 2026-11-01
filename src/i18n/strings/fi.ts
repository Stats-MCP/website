import type { UiStrings } from '@/i18n/ui';

export const fi: UiStrings = {
  seo: {
    home: {
      title: 'StatsMCP — Virallinen tilastotieto tekoälyavustajille',
      description:
        'Yhdistä Claude, ChatGPT, Cursor ja muut tekoälyavustajat kansallisiin tilastotietokantoihin. Maksuton, vain luku, avointa lähdekoodia. Jokainen vastaus kertoo lähteen.'
    },
    privacy: {
      title: 'Tietosuoja — StatsMCP',
      description:
        'StatsMCP ei kirjaa mitään: ei pyyntölokeja, ei evästeitä, ei analytiikkaa. Lue, mitä päätepiste ja tämä sivusto tekevät tiedoillasi.'
    },
    countries: {
      title: 'Maat ja kattavuus — StatsMCP',
      description:
        'Kaikki StatsMCP:n maat: tilastovirasto, aineiston kielet, taulukoiden määrä, datan lisenssi ja MCP-päätepiste.'
    },
    licences: {
      title: 'Datan lisenssit — StatsMCP',
      description:
        'Jokaisen StatsMCP:n tilastoviraston datan lisenssi ja lähteen mainitsemista koskevat säännöt sekä linkit kunkin maan virallisiin käyttöehtoihin.'
    },
    notFound: {
      title: 'Sivua ei löydy — StatsMCP',
      description: 'Tätä sivua ei ole StatsMCP:ssä.'
    },
    countryLive: {
      title: '{country}: tilastot tekoälyavustajille — StatsMCP',
      description:
        '{country}: kysy Claudelta, ChatGPT:ltä tai Cursorilta virallisia tilastoja tietokannasta {database} ({office}). Maksuton MCP-päätepiste, lähde jokaisessa vastauksessa.'
    },
    countryPlanned: {
      title: '{country}: tilastot tekoälyavustajille — StatsMCP',
      description:
        '{country}: viralliset tilastot Claudelle, ChatGPT:lle ja muille tekoälyavustajille ovat tulossa StatsMCP:hen. Seuraa tiekarttaa GitHubissa.'
    },
    countryCard: '{country}: tilastot tekoälyavustajille',
    figureNumber: 'Kuva 1'
  },
  nav: {
    tagline: 'Riippumaton · Avoin lähdekoodi',
    howItWorks: 'Miten se toimii',
    connect: 'Yhdistä',
    countries: 'Maat',
    faq: 'UKK',
    language: 'Kieli',
    github: 'Näytä GitHubissa',
    menu: 'Valikko'
  },
  hero: {
    eyebrow: 'Maksuton ja avointa lähdekoodia',
    title:
      'Viralliset tilastot {countries} maasta ja EU:sta tekoälyavustajassasi.',
    lead: 'StatsMCP yhdistää Clauden, ChatGPT:n, Cursorin ja VS Coden {offices} tilastovirastoon. Jokainen vastaus kertoo lähteen ja linkittää taulukkoon.',
    addToClaude: 'Lisää Claudeen',
    addToChatgpt: 'Lisää ChatGPT:hen',
    endpointLabel: 'Päätepiste',
    countryTabs: 'Maa',
    status: {
      live: 'Käytössä',
      planned: 'Suunnitteilla',
      limited: 'Vain haku'
    },
    limitedNote:
      'Taulukkohaku toimii. Virasto estää tällä hetkellä datapyynnöt palveluntarjoajaltamme. npm-paketti toimii täysin.',
    privacy: 'Ei lokeja · Ei rekisteröitymistä · Ei evästeitä'
  },
  copy: { copy: 'Kopioi', copied: 'Kopioitu' },
  figure: {
    caption: 'Kuva 1 · Esimerkkikeskustelu',
    you: 'Sinä',
    assistant: 'Claude',
    toolCalls: '{count} työkalukutsua',
    sourceLabel: 'Lähde:',
    plannedTitle: '{country} on suunnitteilla.',
    plannedText:
      'Palvelin {database} on tiekartalla seuraavana. Esimerkkivastaukset näkyvät täällä, kun se otetaan käyttöön.',
    plannedLink: 'Seuraa etenemistä GitHubissa'
  },
  keyFiguresLabel: 'Tunnusluvut',
  keyFigures: [
    { value: '{live}', label: 'tilastovirastoa käytössä' },
    { value: '{tables}', label: 'virallista taulukkoa hakuindeksissä' },
    { value: '0', label: 'lokia, tiliä tai API-avainta' },
    {
      value: '100 %',
      label: 'tuloksista kertoo lähteen ja linkittää taulukkoon'
    }
  ],
  audiences: {
    title: 'Kuka käyttää StatsMCP:tä',
    items: [
      {
        who: 'Kehittäjät',
        text: 'Lisää virallista dataa agenttiisi yhdellä URL-osoitteella.',
        prompt: 'Mitkä Tanskan kunnat kasvoivat nopeimmin vuonna 2025?'
      },
      {
        who: 'Toimittajat',
        text: 'Tarkista luku ja hae artikkeliisi linkki taulukkoon.',
        prompt: 'Onko työttömyys Suomessa korkeampi kuin vuosi sitten?'
      },
      {
        who: 'Analyytikot',
        text: 'Vertaa maita lataamatta laskentataulukoita.',
        prompt: 'Vertaa asuntojen hintoja Norjassa ja Irlannissa vuodesta 2020.'
      },
      {
        who: 'Tutkijat',
        text: 'Löydä oikea taulukko, sen koodit ja lisenssi.',
        prompt: 'Mistä taulukosta löytyvät Islannin syntyneet äidin iän mukaan?'
      }
    ]
  },
  howItWorks: {
    title: 'Miten se toimii',
    stepLabel: 'Vaihe',
    steps: [
      {
        tool: 'search_tables',
        title: 'Etsi taulukko',
        text: 'Avustaja hakee tuhansista virallisista taulukoista hakusanoilla.'
      },
      {
        tool: 'get_table_metadata',
        title: 'Lue muuttujat',
        text: 'Se lukee ajanjaksot, alueet ja tiedot ja löytää koodit.'
      },
      {
        tool: 'query_table',
        title: 'Hae luvut',
        text: 'Se hakee tiedot luettavin selittein sekä lähteen ja linkin taulukkoon.'
      }
    ]
  },
  connect: {
    title: 'Yhdistä alle minuutissa',
    meta: 'Streamable HTTP · vain luku · ei kirjautumista · 60 pyyntöä/min',
    clientTabs: 'Asiakasohjelma',
    otherClients: 'Muut asiakasohjelmat',
    runLocally: 'Aja paikallisesti'
  },
  countryPage: {
    title: '{country}: viralliset tilastot tekoälyavustajassasi.',
    leadIndexed:
      'Hae {tables} taulukosta. Lähde: {office}. Datan lisenssi: {licence}. Maksuton, ei rekisteröitymistä.',
    leadOffice:
      'Hae tilastoviraston taulukoista. Lähde: {office}. Datan lisenssi: {licence}. Maksuton, ei rekisteröitymistä.',
    seeAll: 'Näytä kaikki lähteet ({count})'
  },
  countries: {
    title: 'Maat',
    headers: {
      code: 'Koodi',
      country: 'Maa',
      source: 'Virallinen lähde',
      languages: 'Kielet',
      licence: 'Datan lisenssi',
      endpoint: 'Päätepiste',
      status: 'Tila',
      tables: 'Taulukot'
    },
    details: 'Tiedot',
    propose: 'Puuttuuko maasi?',
    proposeLink: 'Ehdota sitä GitHubissa.',
    tableCount: '{count} taulukkoa',
    officeSearch: 'Viraston haku',
    compareAll: 'Vertaa kaikkia maita',
    pageTitle: 'Maat ja kattavuus',
    pageIntro: 'Kattavuus, lisenssi ja päätepiste lähteittäin.',
    tablesNote:
      'Taulukot: taulukot hakuindeksissämme. Viraston haku: palvelin käyttää viraston omaa hakua.'
  },
  faq: {
    title: 'Kysymyksiä',
    items: [
      {
        question: 'Onko palvelu maksuton?',
        answer:
          'Kyllä. Ylläpidetyt päätepisteet ovat maksuttomia, ja raja on 60 pyyntöä minuutissa. Koodi on MIT-lisenssin alainen.'
      },
      {
        question: 'Onko StatsMCP virallinen?',
        answer:
          'Ei. StatsMCP on riippumaton, eikä se ole minkään tilastoviraston palvelu tai hyväksymä. Data tulee suoraan kunkin viraston julkisesta API:sta.'
      },
      {
        question: 'Tallennatteko kysymykseni?',
        answer:
          'Emme. Emme säilytä lokeja, eikä tämä sivusto käytä evästeitä tai analytiikkaa. Avustajasi lähettää palvelimellemme vain hakusanoja ja taulukkokoodeja. Tekoälypalvelusi tarjoaja näkee silti keskustelusi. Lue tietosuojasivu.'
      },
      {
        question: 'Voinko yhdistää useita maita?',
        answer:
          'Kyllä. Lisää yksi liitin kutakin maata kohden. Avustaja käyttää kysymykseesi oikeaa liitintä.'
      },
      {
        question: 'Voinko ajaa sitä omalla tietokoneellani?',
        answer:
          'Kyllä. Palvelimet ovat npm:ssä. Avaa välilehti ”Aja paikallisesti” kohdassa Yhdistä. Silloin kysymyksesi menevät vain tilastovirastolle.'
      },
      {
        question: 'Miten maani voidaan lisätä?',
        answer:
          'Avaa issue GitHubissa. Voimme lisätä useimmat virastot, joilla on julkinen API.'
      }
    ]
  },
  footer: {
    disclaimer: 'Ei minkään tilastoviraston palvelu eikä sen hyväksymä.',
    product: 'Tuote',
    openSource: 'Avoin lähdekoodi',
    legal: 'Oikeudelliset tiedot',
    documentation: 'Dokumentaatio',
    licences: 'Datan lisenssit maittain',
    privacy: 'Tietosuoja',
    security: 'Tietoturva'
  },
  privacy: {
    title: 'Tietosuoja',
    intro: 'StatsMCP ei kirjaa pyyntöjäsi.',
    points: [
      'Ylläpidetty päätepiste ei kirjoita lokeja. Emme tallenna kysymyksiäsi, työkalukutsuja tai tuloksia.',
      'Nopeusrajoitin laskee kunkin IP-osoitteen pyyntöjä yhden minuutin ajan. Sen jälkeen se ei säilytä niitä.',
      'Tämä sivusto ei käytä evästeitä, analytiikkaa tai kolmansien osapuolten skriptejä. Fontit ovat omalla palvelimellamme.',
      'Cloudflare ylläpitää päätepistettä ja tätä sivustoa. Cloudflare käsittelee pyyntöjä palveluntarjoajanamme Cloudflaren tietosuojakäytännön mukaisesti.',
      'Tilastovirastot vastaanottavat datapyynnöt, jotka palvelin lähettää niiden API-rajapintoihin. Nämä pyynnöt eivät sisällä IP-osoitettasi.',
      'Tekoälyavustajasi tarjoaja, esimerkiksi Anthropic tai OpenAI, näkee keskustelusi omien ehtojensa mukaisesti.'
    ],
    questions: 'Kysymyksiä: avaa issue GitHubissa.'
  },
  licences: {
    title: 'Datan lisenssit',
    intro:
      'StatsMCP:n koodi on MIT-lisenssin alainen. Data kuuluu kullekin tilastovirastolle, ja sen ehtoja sovelletaan.',
    attribution:
      'Jos lasket datasta uusia lukuja, mainitse se, esimerkiksi: ”Lähde: SURS / Laskelmat: <nimesi>”.'
  },
  notFound: {
    title: 'Sivua ei löydy',
    text: 'Tätä sivua ei ole olemassa.',
    home: 'Siirry etusivulle'
  }
};
