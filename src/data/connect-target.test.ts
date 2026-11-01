import { describe, expect, it } from 'vitest';

import {
  clients,
  clientSteps,
  clientsFor,
  cursorInstallLink,
  vscodeInstallLink
} from '@/data/clients';
import {
  allCountriesTarget,
  countryTarget,
  type ConnectTarget
} from '@/data/connect-target';
import { getCountry } from '@/data/test-helpers';
import { locales } from '@/i18n/locales';

const all = allCountriesTarget('any country');
const slovenia = countryTarget(getCountry('si'));

function code(clientId: string, target: ConnectTarget): string {
  const client = clients.find((item) => item.id === clientId);
  if (!client) throw new Error(`${clientId} client missing`);
  return client.code(target);
}

describe('connect targets', () => {
  it.each([
    [all, 'claude mcp add --transport http statsmcp https://statsmcp.dev/mcp'],
    [
      slovenia,
      'claude mcp add --transport http statsmcp-si https://statsmcp.dev/si/mcp'
    ]
  ])('builds the Claude Code command for %j', (target, expected) => {
    expect(code('claude-code', target)).toBe(expected);
  });

  it('puts the all-countries endpoint in the install links', () => {
    const cursor = new URL(cursorInstallLink(all));
    const vscode = new URL(vscodeInstallLink(all));

    expect(cursor.searchParams.get('name')).toBe('statsmcp');
    expect(JSON.parse(atob(cursor.searchParams.get('config') ?? ''))).toEqual({
      url: 'https://statsmcp.dev/mcp'
    });
    expect(JSON.parse(vscode.searchParams.get('config') ?? '')).toEqual({
      type: 'http',
      url: 'https://statsmcp.dev/mcp'
    });
  });

  it('offers no local package for every country', () => {
    const ids = clientsFor(all).map((client) => client.id);

    expect(ids).not.toContain('local');
    expect(clientsFor(slovenia).map((client) => client.id)).toContain('local');
  });

  it('writes steps without an empty code', () => {
    const claude = clients.find((client) => client.id === 'claude');
    if (!claude) throw new Error('claude client missing');

    expect(clientSteps(claude, all, 'en')).toEqual(
      expect.arrayContaining([
        'Name it StatsMCP and paste the endpoint.',
        'Ask a question about any country.'
      ])
    );
  });

  it.each(locales)(
    'leaves no gap where the empty code was in %s steps',
    (locale) => {
      const steps = clientsFor(all).flatMap((client) =>
        clientSteps(client, all, locale)
      );

      for (const step of steps) {
        expect(step).not.toMatch(/ {2}| ,| \.(\s|$)/);
      }
    }
  );

  it.each([
    [
      countryTarget(getCountry('si')),
      'si',
      'statsmcp-si',
      'https://statsmcp.dev/si/mcp'
    ],
    [all, 'all', 'statsmcp', 'https://statsmcp.dev/mcp']
  ])('describes the target %#', (target, id, serverName, url) => {
    expect(target).toMatchObject({ id, serverName, url });
  });

  it('keeps no package key for a country without one', () => {
    const { localPackage: _localPackage, ...withoutPackage } = getCountry('no');

    expect(countryTarget(withoutPackage)).not.toHaveProperty('localPackage');
  });
});
