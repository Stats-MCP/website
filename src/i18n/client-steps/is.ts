import type { ClientSteps } from '@/data/client-text';

export const isl: ClientSteps = {
  claude: [
    'Opnaðu „Settings“ og síðan „Connectors“.',
    'Veldu „Add custom connector“.',
    'Gefðu tengingunni nafnið StatsMCP {code} og límdu inn endapunktinn.',
    'Spurðu spurningar um hagtölur ({country}).'
  ],
  chatgpt: [
    'Kveiktu á forritarahamnum („Developer mode“) í „Settings“.',
    'Opnaðu „Connectors“ og síðan „Create“.',
    'Límdu inn endapunktinn. Veldu enga auðkenningu („No authentication“).'
  ],
  'claude-code': [
    'Keyrðu skipunina í skipanalínunni.',
    'Keyrðu /mcp til að athuga tenginguna.'
  ],
  cursor: ['Veldu „Add to Cursor“ eða bættu blokkinni við .cursor/mcp.json.'],
  vscode: [
    'Veldu „Install in VS Code“ eða bættu blokkinni við .vscode/mcp.json.',
    'Ræstu netþjóninn úr MCP-spjaldinu.'
  ],
  other: [
    'Bættu við fjarþjóni af gerðinni http eða streamable-http.',
    'Notaðu endapunktinn. Engin auðkenning.'
  ],
  local: [
    'Þú þarft Node.js 20 eða nýrra.',
    'Bættu þessari skipun við sem stdio-þjóni.'
  ]
};
