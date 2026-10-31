import type { APIRoute } from 'astro';

const manifest = {
  name: 'StatsMCP',
  short_name: 'StatsMCP',
  start_url: '/',
  display: 'browser',
  background_color: '#F6F6F3',
  theme_color: '#F6F6F3',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
  ]
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(manifest), {
    headers: { 'content-type': 'application/manifest+json' }
  });
