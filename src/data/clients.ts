import type { ConnectTarget } from '@/data/connect-target';
import { translatedSteps } from '@/i18n/client-steps';
import { type Locale, type Localized, localized } from '@/i18n/locales';

export interface ClientInstall {
  label: Localized;
  href: string;
}

export interface Client {
  id: string;
  label: string;
  /** Translated tab label for a client that is not a product name. */
  labelKey?: 'otherClients' | 'runLocally';
  /** English step texts; `{code}` and `{country}` are replaced per target. */
  steps: string[];
  code: (target: ConnectTarget) => string;
  install?: (target: ConnectTarget) => ClientInstall;
  needsLocalPackage?: boolean;
}

function mcpServersJson(target: ConnectTarget): string {
  const config = { mcpServers: { [target.serverName]: { url: target.url } } };
  return JSON.stringify(config, null, 2);
}

function vscodeJson(target: ConnectTarget): string {
  const config = {
    servers: { [target.serverName]: { type: 'http', url: target.url } }
  };
  return JSON.stringify(config, null, 2);
}

export function cursorInstallLink(target: ConnectTarget): string {
  const config = btoa(JSON.stringify({ url: target.url }));
  const params = new URLSearchParams({ name: target.serverName, config });
  return `cursor://anysphere.cursor-deeplink/mcp/install?${params.toString()}`;
}

export function vscodeInstallLink(target: ConnectTarget): string {
  const config = JSON.stringify({ type: 'http', url: target.url });
  const params = new URLSearchParams({ name: target.serverName, config });
  return `https://insiders.vscode.dev/redirect/mcp/install?${params.toString()}`;
}

const url = (target: ConnectTarget): string => target.url;

export const clients: Client[] = [
  {
    id: 'claude',
    label: 'Claude',
    steps: [
      'Open Settings, then Connectors.',
      'Select Add custom connector.',
      'Name it StatsMCP {code} and paste the endpoint.',
      'Ask a question about {country}.'
    ],
    code: url
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    steps: [
      'Turn on developer mode in Settings.',
      'Open Connectors, then Create.',
      'Paste the endpoint. Choose no authentication.'
    ],
    code: url
  },
  {
    id: 'claude-code',
    label: 'Claude Code',
    steps: [
      'Run the command in your terminal.',
      'Run /mcp to check the connection.'
    ],
    code: (target) =>
      `claude mcp add --transport http ${target.serverName} ${target.url}`
  },
  {
    id: 'cursor',
    label: 'Cursor',
    steps: ['Select Add to Cursor, or add the block to .cursor/mcp.json.'],
    code: mcpServersJson,
    install: (target) => ({
      label: { en: 'Add to Cursor', sl: 'Add to Cursor', nb: 'Add to Cursor' },
      href: cursorInstallLink(target)
    })
  },
  {
    id: 'vscode',
    label: 'VS Code',
    steps: [
      'Select Install in VS Code, or add the block to .vscode/mcp.json.',
      'Start the server from the MCP panel.'
    ],
    code: vscodeJson,
    install: (target) => ({
      label: {
        en: 'Install in VS Code',
        sl: 'Install in VS Code',
        nb: 'Install in VS Code'
      },
      href: vscodeInstallLink(target)
    })
  },
  {
    id: 'other',
    label: 'Other clients',
    labelKey: 'otherClients',
    steps: [
      'Add a remote server of type http or streamable-http.',
      'Use the endpoint. No authentication.'
    ],
    code: mcpServersJson
  },
  {
    id: 'local',
    label: 'Run locally',
    labelKey: 'runLocally',
    steps: [
      'You need Node.js 20 or later.',
      'Add this command as a stdio server.'
    ],
    code: (target) => `npx -y ${target.localPackage ?? ''}`,
    needsLocalPackage: true
  }
];

export function clientsFor(target: ConnectTarget): Client[] {
  return clients.filter(
    (client) => !client.needsLocalPackage || target.localPackage
  );
}

export function clientSteps(
  client: Client,
  target: ConnectTarget,
  locale: Locale
): string[] {
  const steps = translatedSteps[locale]?.[client.id] ?? client.steps;
  return steps.map((step) =>
    step
      .replaceAll('{code}', target.code)
      .replaceAll('{country}', localized(target.name, locale))
      .replaceAll(/ {2,}/g, ' ')
      .replaceAll(' ,', ',')
  );
}
