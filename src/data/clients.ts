import { endpoint, type Country } from '@/data/countries';
import type { Locale, Localized } from '@/i18n/locales';

type StepTemplates = Record<Locale, string[]>;

export interface ClientInstall {
  label: Localized;
  href: string;
}

export interface Client {
  id: string;
  label: string;
  /** Step texts; `{code}` and `{country}` are replaced per country. */
  steps: StepTemplates;
  code: (country: Country) => string;
  install?: (country: Country) => ClientInstall;
  /** Shown only for countries with a local npm package. */
  needsLocalPackage?: boolean;
}

function serverName(country: Country): string {
  return `statsmcp-${country.id}`;
}

function mcpServersJson(country: Country): string {
  const config = {
    mcpServers: { [serverName(country)]: { url: endpoint(country) } }
  };
  return JSON.stringify(config, null, 2);
}

function vscodeJson(country: Country): string {
  const config = {
    servers: { [serverName(country)]: { type: 'http', url: endpoint(country) } }
  };
  return JSON.stringify(config, null, 2);
}

export function cursorInstallLink(country: Country): string {
  const config = btoa(JSON.stringify({ url: endpoint(country) }));
  const params = new URLSearchParams({ name: serverName(country), config });
  return `cursor://anysphere.cursor-deeplink/mcp/install?${params.toString()}`;
}

export function vscodeInstallLink(country: Country): string {
  const config = JSON.stringify({ type: 'http', url: endpoint(country) });
  const params = new URLSearchParams({ name: serverName(country), config });
  return `https://insiders.vscode.dev/redirect/mcp/install?${params.toString()}`;
}

function sameInBothLocales(steps: string[]): StepTemplates {
  return { en: steps, sl: steps };
}

export const clients: Client[] = [
  {
    id: 'claude',
    label: 'Claude',
    steps: sameInBothLocales([
      'Open Settings, then Connectors.',
      'Select Add custom connector.',
      'Name it StatsMCP {code} and paste the endpoint.',
      'Ask a question about {country}.'
    ]),
    code: endpoint
  },
  {
    id: 'claude-code',
    label: 'Claude Code',
    steps: sameInBothLocales([
      'Run the command in your terminal.',
      'Run /mcp to check the connection.'
    ]),
    code: (country) =>
      `claude mcp add --transport http ${serverName(country)} ${endpoint(country)}`
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    steps: sameInBothLocales([
      'Turn on developer mode in Settings.',
      'Open Connectors, then Create.',
      'Paste the endpoint. Choose no authentication.'
    ]),
    code: endpoint
  },
  {
    id: 'cursor',
    label: 'Cursor',
    steps: sameInBothLocales([
      'Select Add to Cursor, or add the block to .cursor/mcp.json.'
    ]),
    code: mcpServersJson,
    install: (country) => ({
      label: { en: 'Add to Cursor', sl: 'Add to Cursor' },
      href: cursorInstallLink(country)
    })
  },
  {
    id: 'vscode',
    label: 'VS Code',
    steps: sameInBothLocales([
      'Select Install in VS Code, or add the block to .vscode/mcp.json.',
      'Start the server from the MCP panel.'
    ]),
    code: vscodeJson,
    install: (country) => ({
      label: { en: 'Install in VS Code', sl: 'Install in VS Code' },
      href: vscodeInstallLink(country)
    })
  },
  {
    id: 'other',
    label: 'Other clients',
    steps: sameInBothLocales([
      'Add a remote server of type http or streamable-http.',
      'Use the endpoint. No authentication.'
    ]),
    code: mcpServersJson
  },
  {
    id: 'local',
    label: 'Run locally',
    steps: sameInBothLocales([
      'You need Node.js 20 or later.',
      'Add this command as a stdio server.'
    ]),
    code: (country) => `npx -y ${country.localPackage ?? ''}`,
    needsLocalPackage: true
  }
];

export function clientsFor(country: Country): Client[] {
  return clients.filter(
    (client) => !client.needsLocalPackage || country.localPackage
  );
}

export function clientSteps(
  client: Client,
  country: Country,
  locale: Locale
): string[] {
  return client.steps[locale].map((step) =>
    step
      .replaceAll('{code}', country.code)
      .replaceAll('{country}', country.name[locale])
  );
}
