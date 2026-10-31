import { markSvg } from '@/brand/mark';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(markSvg({ background: true }), {
    headers: { 'content-type': 'image/svg+xml' }
  });
