import type { ClientSteps } from '@/data/client-text';

export const fo: ClientSteps = {
  claude: [
    'Lat „Settings“ upp og síðan „Connectors“.',
    'Vel „Add custom connector“.',
    'Kalla tað StatsMCP {code}, og set endapunktið inn.',
    'Spyr ein spurning ({country}).'
  ],
  chatgpt: [
    'Tendra mennaraham („Developer mode“) í „Settings“.',
    'Lat „Connectors“ upp og síðan „Create“.',
    'Set endapunktið inn. Vel onga váttan („No authentication“).'
  ],
  'claude-code': [
    'Koyr boðið í terminalinum.',
    'Koyr /mcp fyri at kanna sambandið.'
  ],
  cursor: [
    'Vel „Add to Cursor“, ella legg blokkin afturat í .cursor/mcp.json.'
  ],
  vscode: [
    'Vel „Install in VS Code“, ella legg blokkin afturat í .vscode/mcp.json.',
    'Byrja ambætaran frá MCP-panelinum.'
  ],
  other: [
    'Legg ein fjarambætara afturat av slagnum http ella streamable-http.',
    'Brúka endapunktið. Eingin váttan.'
  ],
  local: [
    'Tú hevur tørv á Node.js 20 ella nýggjari.',
    'Legg hetta boðið afturat sum stdio-ambætara.'
  ]
};
