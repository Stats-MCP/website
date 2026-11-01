import type { ClientSteps } from '@/data/client-text';

export const fr: ClientSteps = {
  claude: [
    'Ouvrez « Settings », puis « Connectors ».',
    'Sélectionnez « Add custom connector ».',
    'Nommez-le StatsMCP {code} et collez le point d’accès.',
    'Posez une question sur les statistiques ({country}).'
  ],
  chatgpt: [
    'Activez le mode développeur (« Developer mode ») dans « Settings ».',
    'Ouvrez « Connectors », puis « Create ».',
    'Collez le point d’accès. Choisissez l’absence d’authentification (« No authentication »).'
  ],
  'claude-code': [
    'Exécutez la commande dans votre terminal.',
    'Exécutez /mcp pour vérifier la connexion.'
  ],
  cursor: [
    'Sélectionnez « Add to Cursor », ou ajoutez le bloc à .cursor/mcp.json.'
  ],
  vscode: [
    'Sélectionnez « Install in VS Code », ou ajoutez le bloc à .vscode/mcp.json.',
    'Démarrez le serveur depuis le panneau MCP.'
  ],
  other: [
    'Ajoutez un serveur distant de type http ou streamable-http.',
    'Utilisez le point d’accès. Aucune authentification.'
  ],
  local: [
    'Node.js 20 ou une version ultérieure est nécessaire.',
    'Ajoutez cette commande comme serveur stdio.'
  ]
};
