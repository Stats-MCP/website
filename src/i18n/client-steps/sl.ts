import type { ClientSteps } from '@/data/client-text';

export const sl: ClientSteps = {
  claude: [
    'Odprite „Settings“ in nato „Connectors“.',
    'Izberite „Add custom connector“.',
    'Poimenujte ga StatsMCP {code} in prilepite končno točko.',
    'Postavite vprašanje o statistiki ({country}).'
  ],
  chatgpt: [
    'V „Settings“ vklopite način za razvijalce („Developer mode“).',
    'Odprite „Connectors“ in nato „Create“.',
    'Prilepite končno točko. Izberite, da preverjanje pristnosti ni potrebno („No authentication“).'
  ],
  'claude-code': [
    'Zaženite ukaz v terminalu.',
    'Zaženite /mcp, da preverite povezavo.'
  ],
  cursor: ['Izberite „Add to Cursor“ ali dodajte blok v .cursor/mcp.json.'],
  vscode: [
    'Izberite „Install in VS Code“ ali dodajte blok v .vscode/mcp.json.',
    'Zaženite strežnik na plošči MCP.'
  ],
  other: [
    'Dodajte oddaljeni strežnik vrste http ali streamable-http.',
    'Uporabite končno točko. Preverjanje pristnosti ni potrebno.'
  ],
  local: [
    'Potrebujete Node.js 20 ali novejši.',
    'Dodajte ta ukaz kot strežnik stdio.'
  ]
};
