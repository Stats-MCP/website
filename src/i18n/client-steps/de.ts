import type { ClientSteps } from '@/data/client-text';

export const de: ClientSteps = {
  claude: [
    'Öffnen Sie „Settings“ und dann „Connectors“.',
    'Wählen Sie „Add custom connector“.',
    'Nennen Sie ihn StatsMCP {code} und fügen Sie den Endpunkt ein.',
    'Stellen Sie eine Frage zur amtlichen Statistik ({country}).'
  ],
  chatgpt: [
    'Aktivieren Sie in „Settings“ den Entwicklermodus („Developer mode“).',
    'Öffnen Sie „Connectors“ und dann „Create“.',
    'Fügen Sie den Endpunkt ein. Wählen Sie keine Authentifizierung („No authentication“).'
  ],
  'claude-code': [
    'Führen Sie den Befehl in Ihrem Terminal aus.',
    'Führen Sie /mcp aus, um die Verbindung zu prüfen.'
  ],
  cursor: [
    'Wählen Sie „Add to Cursor“ oder fügen Sie den Block in .cursor/mcp.json ein.'
  ],
  vscode: [
    'Wählen Sie „Install in VS Code“ oder fügen Sie den Block in .vscode/mcp.json ein.',
    'Starten Sie den Server im MCP-Bereich.'
  ],
  other: [
    'Fügen Sie einen Remote-Server vom Typ http oder streamable-http hinzu.',
    'Verwenden Sie den Endpunkt. Keine Authentifizierung.'
  ],
  local: [
    'Sie benötigen Node.js 20 oder höher.',
    'Fügen Sie diesen Befehl als stdio-Server hinzu.'
  ]
};
