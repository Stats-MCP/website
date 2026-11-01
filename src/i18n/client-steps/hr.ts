import type { ClientSteps } from '@/data/client-text';

export const hr: ClientSteps = {
  claude: [
    'Otvorite „Settings”, zatim „Connectors”.',
    'Odaberite „Add custom connector”.',
    'Nazovite ga StatsMCP {code} i zalijepite krajnju točku.',
    'Postavite pitanje o statistici ({country}).'
  ],
  chatgpt: [
    'U „Settings” uključite način rada za razvojne programere („Developer mode”).',
    'Otvorite „Connectors”, zatim „Create”.',
    'Zalijepite krajnju točku. Odaberite rad bez autentifikacije („No authentication”).'
  ],
  'claude-code': [
    'Pokrenite naredbu u terminalu.',
    'Pokrenite /mcp da biste provjerili vezu.'
  ],
  cursor: ['Odaberite „Add to Cursor” ili dodajte blok u .cursor/mcp.json.'],
  vscode: [
    'Odaberite „Install in VS Code” ili dodajte blok u .vscode/mcp.json.',
    'Pokrenite poslužitelj s ploče MCP.'
  ],
  other: [
    'Dodajte udaljeni poslužitelj vrste http ili streamable-http.',
    'Upotrijebite krajnju točku. Autentifikacija nije potrebna.'
  ],
  local: [
    'Potreban je Node.js 20 ili noviji.',
    'Dodajte ovu naredbu kao stdio poslužitelj.'
  ]
};
