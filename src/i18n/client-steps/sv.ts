import type { ClientSteps } from '@/data/client-text';

export const sv: ClientSteps = {
  claude: [
    'Öppna ”Settings” och sedan ”Connectors”.',
    'Välj ”Add custom connector”.',
    'Ge den namnet StatsMCP {code} och klistra in slutpunkten.',
    'Ställ en fråga om {country}.'
  ],
  chatgpt: [
    'Slå på utvecklarläget (”Developer mode”) i ”Settings”.',
    'Öppna ”Connectors” och sedan ”Create”.',
    'Klistra in slutpunkten. Välj ingen autentisering (”No authentication”).'
  ],
  'claude-code': [
    'Kör kommandot i terminalen.',
    'Kör /mcp för att kontrollera anslutningen.'
  ],
  cursor: ['Välj ”Add to Cursor”, eller lägg till blocket i .cursor/mcp.json.'],
  vscode: [
    'Välj ”Install in VS Code”, eller lägg till blocket i .vscode/mcp.json.',
    'Starta servern från MCP-panelen.'
  ],
  other: [
    'Lägg till en fjärrserver av typen http eller streamable-http.',
    'Använd slutpunkten. Ingen autentisering.'
  ],
  local: [
    'Du behöver Node.js 20 eller senare.',
    'Lägg till det här kommandot som en stdio-server.'
  ]
};
