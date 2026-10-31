import { countries, endpoint } from '@/data/countries';
import { docsUrl, repoUrl } from '@/data/site';
import { ui } from '@/i18n/ui';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const t = ui.en;
  const live = countries.filter((country) => country.status === 'live');
  const lines = [
    '# StatsMCP',
    '',
    `> ${t.hero.lead}`,
    '',
    '## Endpoints (Streamable HTTP, no authentication, read-only)',
    '',
    ...live.map(
      (country) =>
        `- ${country.name.en}: ${endpoint(country)} (${country.database.name}, ${country.office.fullName.en})`
    ),
    '',
    '## Tools',
    '',
    ...t.howItWorks.steps.map((step) => `- ${step.tool}: ${step.text}`),
    '',
    '## Licence',
    '',
    `- ${t.licences.intro}`,
    `- ${t.licences.attribution}`,
    '',
    '## Links',
    '',
    `- Source code: ${repoUrl}`,
    `- Documentation: ${docsUrl}`,
    ''
  ];
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  });
};
