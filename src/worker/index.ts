import { serverCardPath } from '@/data/site';
import { markdownPath, prefersMarkdown } from '@/worker/negotiate';

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

/** Same as the `/*` rule in public/_headers. Cloudflare does not apply _headers to responses from a Worker. */
export const securityHeaders: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy':
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'"
};

const serverCardType = 'application/mcp-server-card+json';

function pathHeaders(pathname: string): Record<string, string> {
  if (pathname.endsWith('.md')) return { 'X-Robots-Tag': 'noindex' };
  if (!pathname.startsWith('/.well-known/')) return {};
  if (pathname === '/.well-known/openai-apps-challenge')
    return {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8'
    };
  const discovery = {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=3600'
  };
  if (pathname === serverCardPath)
    return { ...discovery, 'Content-Type': serverCardType };
  if (pathname === '/.well-known/ai-catalog.json')
    return { ...discovery, 'Content-Type': 'application/ai-catalog+json' };
  return discovery;
}

function respond(
  source: Response,
  init: { markdown?: boolean; status?: number; pathname?: string } = {}
): Response {
  const headers = new Headers(source.headers);
  for (const [name, value] of Object.entries(securityHeaders))
    headers.set(name, value);
  if (source.ok && init.pathname)
    for (const [name, value] of Object.entries(pathHeaders(init.pathname)))
      headers.set(name, value);
  if (init.markdown)
    headers.set('Content-Type', 'text/markdown; charset=utf-8');
  const type = headers.get('Content-Type') ?? '';
  if (type.startsWith('text/html') || type.startsWith('text/markdown'))
    headers.append('Vary', 'Accept');
  return new Response(source.body, {
    status: init.status ?? source.status,
    statusText: init.status ? '' : source.statusText,
    headers
  });
}

function assetRequest(request: Request, pathname: string): Request {
  return new Request(new URL(pathname, request.url), {
    method: request.method,
    headers: request.headers
  });
}

export async function handle(request: Request, env: Env): Promise<Response> {
  const wantsMarkdown =
    (request.method === 'GET' || request.method === 'HEAD') &&
    prefersMarkdown(request.headers.get('Accept'));
  const url = new URL(request.url);
  if (!wantsMarkdown)
    return respond(await env.ASSETS.fetch(request), {
      pathname: url.pathname
    });

  const mdPath = markdownPath(url.pathname);
  if (mdPath) {
    const markdown = await env.ASSETS.fetch(assetRequest(request, mdPath));
    if (markdown.status !== 404) return respond(markdown, { markdown: true });
  }

  const page = await env.ASSETS.fetch(request);
  if (page.status !== 404) return respond(page, { pathname: url.pathname });
  const notFound = await env.ASSETS.fetch(
    new Request(new URL('/404.md', request.url))
  );
  return respond(notFound, { markdown: true, status: 404 });
}

export default { fetch: handle };
