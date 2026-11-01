import type { ClientSteps } from '@/data/client-text';

export const et: ClientSteps = {
  claude: [
    'Ava „Settings“ ja seejärel „Connectors“.',
    'Vali „Add custom connector“.',
    'Pane nimeks StatsMCP {code} ja kleebi lõpp-punkt.',
    'Esita küsimus ({country}).'
  ],
  chatgpt: [
    'Lülita „Settings“ all sisse arendajarežiim („Developer mode“).',
    'Ava „Connectors“ ja seejärel „Create“.',
    'Kleebi lõpp-punkt. Vali autentimiseta valik („No authentication“).'
  ],
  'claude-code': [
    'Käivita käsk oma terminalis.',
    'Käivita /mcp, et ühendust kontrollida.'
  ],
  cursor: ['Vali „Add to Cursor“ või lisa plokk faili .cursor/mcp.json.'],
  vscode: [
    'Vali „Install in VS Code“ või lisa plokk faili .vscode/mcp.json.',
    'Käivita server MCP-paneelilt.'
  ],
  other: [
    'Lisa kaugserver tüübiga http või streamable-http.',
    'Kasuta lõpp-punkti. Autentimist pole vaja.'
  ],
  local: [
    'Vaja on Node.js 20 või uuemat versiooni.',
    'Lisa see käsk stdio-serverina.'
  ]
};
