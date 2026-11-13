import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

import { handle, securityHeaders } from '@/worker/index';

const files: Record<string, { body: string; type: string }> = {
  '/': { body: '<h1>Home</h1>', type: 'text/html; charset=utf-8' },
  '/index.md': { body: '# StatsMCP', type: 'text/markdown' },
  '/countries/': {
    body: '<h1>Countries</h1>',
    type: 'text/html; charset=utf-8'
  },
  '/llms.txt': { body: '# StatsMCP', type: 'text/plain' },
  '/404.md': { body: '# Page not found', type: 'text/markdown' }
};

const env = {
  ASSETS: {
    fetch: async (request: Request): Promise<Response> => {
      const { pathname } = new URL(request.url);
      const file = files[pathname];
      const revalidated =
        pathname.endsWith('.md') &&
        request.headers.get('If-None-Match') === 'etag';
      if (file && revalidated) return new Response(null, { status: 304 });
      if (file)
        return new Response(file.body, {
          headers: { 'Content-Type': file.type }
        });
      return new Response('<h1>Not found</h1>', {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  }
};

const get = (path: string, accept: string) =>
  handle(
    new Request(`https://statsmcp.dev${path}`, { headers: { Accept: accept } }),
    env
  );

describe('worker', () => {
  it('serves Markdown for the home page when the client asks for it', async () => {
    const response = await get('/', 'text/markdown');

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe(
      'text/markdown; charset=utf-8'
    );
    expect(response.headers.get('Vary')).toBe('Accept');
    expect(await response.text()).toBe('# StatsMCP');
  });

  it('passes a 304 for the Markdown version through', async () => {
    const response = await handle(
      new Request('https://statsmcp.dev/', {
        headers: { Accept: 'text/markdown', 'If-None-Match': 'etag' }
      }),
      env
    );

    expect(response.status).toBe(304);
  });

  it('serves HTML to browsers, with Vary: Accept', async () => {
    const response = await get('/', 'text/html,*/*;q=0.8');

    expect(response.headers.get('Content-Type')).toContain('text/html');
    expect(response.headers.get('Vary')).toBe('Accept');
    expect(await response.text()).toBe('<h1>Home</h1>');
  });

  it('falls back to HTML for a page without a Markdown version', async () => {
    const response = await get('/countries/', 'text/markdown');

    expect(response.status).toBe(200);
    expect(await response.text()).toBe('<h1>Countries</h1>');
  });

  it.each(['/no-such-page', '/no-such-file.txt'])(
    'answers a missing path %s with a 404 Markdown body',
    async (path) => {
      const response = await get(path, 'text/markdown');

      expect(response.status).toBe(404);
      expect(response.statusText).not.toBe('OK');
      expect(response.headers.get('Content-Type')).toBe(
        'text/markdown; charset=utf-8'
      );
      expect(await response.text()).toBe('# Page not found');
    }
  );

  it('keeps the HTML 404 page for browsers', async () => {
    const response = await get('/no-such-page', 'text/html');

    expect(response.status).toBe(404);
    expect(await response.text()).toBe('<h1>Not found</h1>');
  });

  it('adds the security headers to every response', async () => {
    const response = await get('/llms.txt', '*/*');

    for (const [name, value] of Object.entries(securityHeaders)) {
      expect(response.headers.get(name)).toBe(value);
    }
  });

  it('uses the same security headers as public/_headers', () => {
    const rules = readFileSync(
      new URL('../../public/_headers', import.meta.url),
      'utf8'
    );
    const global = rules.split(/^\S.*$/m)[1] ?? '';
    const parsed = Object.fromEntries(
      global
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const index = line.indexOf(':');
          return [line.slice(0, index), line.slice(index + 1).trim()];
        })
    );

    expect(parsed).toEqual(securityHeaders);
  });
});
