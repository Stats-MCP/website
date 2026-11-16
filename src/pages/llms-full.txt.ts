import { llmsFullText } from '@/lib/agent-docs';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(llmsFullText(), {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  });
