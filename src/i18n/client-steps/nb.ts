import type { ClientSteps } from '@/data/client-text';

export const nb: ClientSteps = {
  claude: [
    'Åpne «Settings» og deretter «Connectors».',
    'Velg «Add custom connector».',
    'Gi den navnet StatsMCP {code}, og lim inn endepunktet.',
    'Still et spørsmål om {country}.'
  ],
  chatgpt: [
    'Slå på utviklermodus («Developer mode») i «Settings».',
    'Åpne «Connectors» og deretter «Create».',
    'Lim inn endepunktet. Velg ingen autentisering («No authentication»).'
  ],
  'claude-code': [
    'Kjør kommandoen i terminalen.',
    'Kjør /mcp for å kontrollere tilkoblingen.'
  ],
  cursor: ['Velg «Add to Cursor», eller legg blokken til i .cursor/mcp.json.'],
  vscode: [
    'Velg «Install in VS Code», eller legg blokken til i .vscode/mcp.json.',
    'Start serveren fra MCP-panelet.'
  ],
  other: [
    'Legg til en ekstern server av typen http eller streamable-http.',
    'Bruk endepunktet. Ingen autentisering.'
  ],
  local: [
    'Du trenger Node.js 20 eller nyere.',
    'Legg til denne kommandoen som en stdio-server.'
  ]
};
