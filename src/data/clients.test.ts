import { describe, expect, it } from 'vitest';

import {
  clients,
  clientSteps,
  clientsFor,
  cursorInstallLink,
  vscodeInstallLink
} from '@/data/clients';
import { getCountry } from '@/data/test-helpers';

const slovenia = getCountry('si');
const norway = getCountry('no');

describe('install links', () => {
  it('encodes the endpoint as base64 JSON in the Cursor link', () => {
    const link = cursorInstallLink(slovenia);
    const url = new URL(link);

    expect(
      link.startsWith('cursor://anysphere.cursor-deeplink/mcp/install?')
    ).toBe(true);
    expect(url.searchParams.get('name')).toBe('statsmcp-si');
    expect(JSON.parse(atob(url.searchParams.get('config') ?? ''))).toEqual({
      url: 'https://statsmcp.dev/si/mcp'
    });
  });

  it('puts an http server config in the VS Code link', () => {
    const link = vscodeInstallLink(norway);
    const url = new URL(link);

    expect(
      link.startsWith('https://insiders.vscode.dev/redirect/mcp/install?')
    ).toBe(true);
    expect(url.searchParams.get('name')).toBe('statsmcp-no');
    expect(JSON.parse(url.searchParams.get('config') ?? '')).toEqual({
      type: 'http',
      url: 'https://statsmcp.dev/no/mcp'
    });
  });
});

describe('clientsFor', () => {
  it.each([
    ['si', true],
    ['no', false]
  ])('offers the local option for %s: %s', (id, hasLocal) => {
    const ids = clientsFor(getCountry(id)).map((client) => client.id);

    expect(ids.includes('local')).toBe(hasLocal);
  });
});

describe('clientSteps', () => {
  it('fills in the country code and the localized country name', () => {
    const claude = clients.find((client) => client.id === 'claude');
    if (!claude) throw new Error('claude client missing');

    expect(clientSteps(claude, slovenia, 'sl')).toEqual(
      expect.arrayContaining([
        'Poimenujte ga StatsMCP SI in prilepite končno točko.',
        'Postavite vprašanje o statistiki (Slovenija).'
      ])
    );
    expect(clientSteps(claude, slovenia, 'en')).toContain(
      'Name it StatsMCP SI and paste the endpoint.'
    );
  });
});
