import { ALL_COUNTRIES_URL } from '@/data/connect-target';
import {
  countries,
  liveCountries,
  endpoint,
  indexedTables,
  statusKey,
  type Country
} from '@/data/countries';
import {
  aboutPage,
  contactPage,
  termsPage,
  type InfoPage
} from '@/data/info-pages';
import { docsUrl, repoUrl, serverCardPath } from '@/data/site';
import { fill, ui } from '@/i18n/ui';

const siteUrl = 'https://statsmcp.dev';

export function llmsText(): string {
  const t = ui.en;
  const lead = fill(t.home.lead, {
    offices: String(liveCountries.length),
    tables: `${new Intl.NumberFormat('en').format(indexedTables(countries))}+`
  });
  const ids = liveCountries.map((country) => country.id).join(', ');
  const lines = [
    '# StatsMCP',
    '',
    `> ${lead}`,
    '',
    'All endpoints use Streamable HTTP. They need no authentication and are read-only.',
    '',
    '## When to use StatsMCP',
    '',
    '- A user asks for an official figure of a country: population, unemployment, prices, wages, GDP, housing, births or migration.',
    '- The answer must cite an official source and link to the table.',
    '- A user wants to compare countries with national or Eurostat data.',
    '- A user wants to know which official table has a measure, with its codes and licence.',
    '- Do not use it for forecasts, company data or live market prices. The offices publish data monthly, quarterly or yearly.',
    '',
    '## How to call it',
    '',
    `1. Connect ${ALL_COUNTRIES_URL} as a remote MCP server. No API key is necessary.`,
    '2. Call list_countries to get the office ids and their data languages.',
    '3. Call search_tables with the country id and keywords in a data language of that office.',
    '4. Call get_table_metadata to get the codes of the periods, regions and measures.',
    '5. Call query_table with those codes. Give the figures with the source and the table link that the result contains.',
    '',
    '## All countries (recommended)',
    '',
    `- ${ALL_COUNTRIES_URL}: one MCP server for every office below.`,
    '- list_countries: lists the offices, their ids and data languages.',
    '- search_tables: finds tables by keyword in one office.',
    '- get_table_metadata: lists the periods, regions and measures of a table, with their codes.',
    '- query_table: gets the data with readable labels, the source and a link to the table.',
    `- Every tool except list_countries takes a required \`country\` argument: ${ids}.`,
    '',
    '## One office',
    '',
    'Use these endpoints to connect to only one office. They have search_tables, get_table_metadata and query_table, without the `country` argument.',
    '',
    ...liveCountries.map(
      (country) =>
        `- ${country.name.en}: ${endpoint(country)} (${country.database.name}, ${country.office.fullName.en}; data languages: ${country.dataLanguages.join(', ')})`
    ),
    '',
    '## Run locally (npm)',
    '',
    ...liveCountries.flatMap((country) =>
      country.localPackage
        ? [`- ${country.name.en}: npx -y ${country.localPackage}`]
        : []
    ),
    '',
    '## Licence',
    '',
    `- ${t.licences.intro}`,
    `- ${t.licences.attribution}`,
    '',
    '## Links',
    '',
    `- Full text for agents (every country, FAQ and policies): ${siteUrl}/llms-full.txt`,
    `- Countries and endpoints: ${siteUrl}/countries/`,
    `- Countries as JSON: ${siteUrl}/countries.json`,
    `- MCP server card: ${siteUrl}${serverCardPath}`,
    `- About: ${siteUrl}/${aboutPage.path}`,
    `- Contact: ${siteUrl}/${contactPage.path}`,
    `- Terms of service: ${siteUrl}/${termsPage.path}`,
    `- Source code: ${repoUrl}`,
    `- Documentation: ${docsUrl}`,
    ''
  ];
  return lines.join('\n');
}

function countryMarkdown(country: Country): string[] {
  const t = ui.en;
  const example = country.example;
  return [
    `### ${country.name.en}`,
    '',
    `- Page: ${siteUrl}/${country.slug}/`,
    `- Office: ${country.office.fullName.en} (${country.office.name}), ${country.office.url}`,
    `- Database: ${country.database.name}, ${country.database.url}`,
    `- Status: ${t.hero.status[statusKey(country)]}`,
    ...(country.status === 'live'
      ? [`- MCP endpoint: ${endpoint(country)}`, `- Country id: ${country.id}`]
      : []),
    `- Data languages: ${country.dataLanguages.join(', ')}`,
    ...(country.tables === undefined
      ? []
      : [`- Tables in the search index: ${country.tables}`]),
    `- Licence: ${country.licence.label.en}${country.licence.url ? `, ${country.licence.url}` : ''}`,
    ...(country.localPackage
      ? [`- Run locally: npx -y ${country.localPackage}`]
      : []),
    ...(example
      ? [
          `- Example question: ${example.question.en}`,
          `- Example answer: ${example.answer.en} Source: ${example.source}, ${example.sourceUrl}`
        ]
      : []),
    ''
  ];
}

function nestedInfoPage(page: InfoPage): string {
  return infoPageMarkdown(page)
    .replaceAll('\n## ', '\n### ')
    .replace(/^# /, '## ');
}

export function llmsFullText(): string {
  const t = ui.en;
  return [
    llmsText(),
    '## Countries in detail',
    '',
    ...countries.flatMap(countryMarkdown),
    '## Frequently asked questions',
    '',
    ...t.faq.items.flatMap((item) => [
      `### ${item.question}`,
      '',
      item.answer,
      ''
    ]),
    nestedInfoPage(aboutPage),
    nestedInfoPage(contactPage),
    nestedInfoPage(termsPage),
    `## ${t.privacy.title}`,
    '',
    t.privacy.intro,
    '',
    ...t.privacy.points.map((point) => `- ${point}`),
    ''
  ].join('\n');
}

export function infoPageMarkdown(page: InfoPage): string {
  const sections = page.sections.flatMap((section) => [
    `## ${section.heading}`,
    '',
    ...section.paragraphs.flatMap((paragraph) => [paragraph, '']),
    ...(section.links
      ? [
          ...section.links.map(
            (link) => `- [${link.label}](${new URL(link.href, siteUrl).href})`
          ),
          ''
        ]
      : [])
  ]);
  return [`# ${page.title}`, '', `> ${page.description}`, '', ...sections].join(
    '\n'
  );
}

export function notFoundMarkdown(): string {
  return [
    '# Page not found',
    '',
    'This page does not exist on statsmcp.dev. Check the address, or use one of these links:',
    '',
    `- [Home page](${siteUrl}/)`,
    `- [llms.txt: what StatsMCP does and how to connect](${siteUrl}/llms.txt)`,
    `- [Countries and MCP endpoints](${siteUrl}/countries/)`,
    `- [Sitemap](${siteUrl}/sitemap-index.xml)`,
    `- [Documentation](${docsUrl})`,
    ''
  ].join('\n');
}

export function markdownResponse(body: string): Response {
  return new Response(body, {
    headers: { 'content-type': 'text/markdown; charset=utf-8' }
  });
}
