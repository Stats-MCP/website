import { renderIcon } from '@/og/render';

import type { APIRoute, GetStaticPaths } from 'astro';

interface Props {
  size: number;
}

const icons = {
  'favicon-32': 32,
  'apple-touch-icon': 180,
  'icon-192': 192,
  'icon-512': 512
};

export const getStaticPaths = (() =>
  Object.entries(icons).map(([icon, size]) => ({
    params: { icon },
    props: { size }
  }))) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props }) =>
  new Response(await renderIcon(props.size), {
    headers: { 'content-type': 'image/png' }
  });
