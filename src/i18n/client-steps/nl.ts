import type { ClientSteps } from '@/data/client-text';

export const nl: ClientSteps = {
  claude: [
    'Open ‘Settings’ en daarna ‘Connectors’.',
    'Kies ‘Add custom connector’.',
    'Noem de connector StatsMCP {code} en plak het endpoint.',
    'Stel een vraag over de statistiek ({country}).'
  ],
  chatgpt: [
    'Zet de ontwikkelaarsmodus (‘Developer mode’) aan in ‘Settings’.',
    'Open ‘Connectors’ en daarna ‘Create’.',
    'Plak het endpoint. Kies geen authenticatie (‘No authentication’).'
  ],
  'claude-code': [
    'Voer de opdracht uit in uw terminal.',
    'Voer /mcp uit om de verbinding te controleren.'
  ],
  cursor: ['Kies ‘Add to Cursor’, of voeg het blok toe aan .cursor/mcp.json.'],
  vscode: [
    'Kies ‘Install in VS Code’, of voeg het blok toe aan .vscode/mcp.json.',
    'Start de server vanuit het MCP-paneel.'
  ],
  other: [
    'Voeg een externe server toe van het type http of streamable-http.',
    'Gebruik het endpoint. Geen authenticatie.'
  ],
  local: [
    'U hebt Node.js 20 of hoger nodig.',
    'Voeg deze opdracht toe als stdio-server.'
  ]
};
