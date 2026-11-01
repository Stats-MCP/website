import type { ClientSteps } from '@/data/client-text';

export const fi: ClientSteps = {
  claude: [
    'Avaa ”Settings” ja sitten ”Connectors”.',
    'Valitse ”Add custom connector”.',
    'Anna nimeksi StatsMCP {code} ja liitä päätepiste.',
    'Kysy kysymys tilastoista ({country}).'
  ],
  chatgpt: [
    'Ota kehittäjätila (”Developer mode”) käyttöön kohdassa ”Settings”.',
    'Avaa ”Connectors” ja sitten ”Create”.',
    'Liitä päätepiste. Valitse ei todennusta (”No authentication”).'
  ],
  'claude-code': [
    'Suorita komento päätteessä.',
    'Tarkista yhteys suorittamalla /mcp.'
  ],
  cursor: [
    'Valitse ”Add to Cursor” tai lisää lohko tiedostoon .cursor/mcp.json.'
  ],
  vscode: [
    'Valitse ”Install in VS Code” tai lisää lohko tiedostoon .vscode/mcp.json.',
    'Käynnistä palvelin MCP-paneelista.'
  ],
  other: [
    'Lisää etäpalvelin, jonka tyyppi on http tai streamable-http.',
    'Käytä päätepistettä. Ei todennusta.'
  ],
  local: [
    'Tarvitset Node.js:n version 20 tai uudemman.',
    'Lisää tämä komento stdio-palvelimeksi.'
  ]
};
