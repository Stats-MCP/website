import type { ClientSteps } from '@/data/client-text';

export const da: ClientSteps = {
  claude: [
    'Åbn »Settings« og derefter »Connectors«.',
    'Vælg »Add custom connector«.',
    'Giv den navnet StatsMCP {code}, og indsæt endpointet.',
    'Stil et spørgsmål om {country}.'
  ],
  chatgpt: [
    'Slå udviklertilstand (»Developer mode«) til under »Settings«.',
    'Åbn »Connectors« og derefter »Create«.',
    'Indsæt endpointet. Vælg ingen godkendelse (»No authentication«).'
  ],
  'claude-code': [
    'Kør kommandoen i din terminal.',
    'Kør /mcp for at kontrollere forbindelsen.'
  ],
  cursor: ['Vælg »Add to Cursor«, eller tilføj blokken til .cursor/mcp.json.'],
  vscode: [
    'Vælg »Install in VS Code«, eller tilføj blokken til .vscode/mcp.json.',
    'Start serveren fra MCP-panelet.'
  ],
  other: [
    'Tilføj en fjernserver af typen http eller streamable-http.',
    'Brug endpointet. Ingen godkendelse.'
  ],
  local: [
    'Du skal bruge Node.js 20 eller nyere.',
    'Tilføj denne kommando som en stdio-server.'
  ]
};
