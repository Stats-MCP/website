import { pngToIco } from '@/lib/ico';
import { renderIcon } from '@/og/render';

import type { APIRoute } from 'astro';

const size = 32;

export const GET: APIRoute = async () =>
  new Response(pngToIco(await renderIcon(size), size), {
    headers: { 'content-type': 'image/x-icon' }
  });
