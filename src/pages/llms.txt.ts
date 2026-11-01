import { ALL_COUNTRIES_URL } from '@/data/connect-target';
import { countries, endpoint, indexedTables } from '@/data/countries';
import { docsUrl, repoUrl } from '@/data/site';
import { fill, ui } from '@/i18n/ui';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const t = ui.en;
  const live = countries.filter((country) => country.status === 'live');
  const lead = fill(t.home.lead, {
    offices: String(live.length),
    tables: `${new Intl.NumberFormat('en').format(indexedTables(countries))}+`
  });
  const ids = live.map((country) => country.id).join(', ');
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
    ...t.howItWorks.steps.map((step) => `- ${step.tool}: ${step.text}`),
    `- Every tool except list_countries takes a required \`country\` argument: ${ids}.`,
    '',
    '## One office',
    '',
    'Use these endpoints to connect to only one office. They have search_tables, get_table_metadata and query_table, without the `country` argument.',
    '',
    ...live.map(
      (country) =>
        `- ${country.name.en}: ${endpoint(country)} (${country.database.name}, ${country.office.fullName.en}; data languages: ${country.dataLanguages.join(', ')})`
    ),
    '',
    '## Run locally (npm)',
    '',
    ...live.flatMap((country) =>
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
