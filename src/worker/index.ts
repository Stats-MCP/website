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

function respond(
  source: Response,
  init: { markdown?: boolean; status?: number } = {}
): Response {
  const headers = new Headers(source.headers);
  for (const [name, value] of Object.entries(securityHeaders))
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
  if (!wantsMarkdown) return respond(await env.ASSETS.fetch(request));

  const url = new URL(request.url);
  const mdPath = markdownPath(url.pathname);
  if (mdPath) {
    const markdown = await env.ASSETS.fetch(assetRequest(request, mdPath));
    if (markdown.status !== 404) return respond(markdown, { markdown: true });
  }

  const page = await env.ASSETS.fetch(request);
  if (page.status !== 404) return respond(page);
  const notFound = await env.ASSETS.fetch(
    new Request(new URL('/404.md', request.url))
  );
  return respond(notFound, { markdown: true, status: 404 });
}

export default { fetch: handle };
