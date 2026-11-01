import { ALL_COUNTRIES_URL } from '@/data/connect-target';
import {
  countries,
  liveCountries,
  endpoint,
  indexedTables
} from '@/data/countries';
import { docsUrl, repoUrl } from '@/data/site';
import { fill, ui } from '@/i18n/ui';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
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
    '- Countries and endpoints: https://statsmcp.dev/countries/',
    `- Source code: ${repoUrl}`,
    `- Documentation: ${docsUrl}`,
    ''
  ];
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  });
};
