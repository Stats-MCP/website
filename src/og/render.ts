import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

import { brandColors, markSvg } from '@/brand/mark';
import { sparklinePoints } from '@/lib/sparkline';

const require = createRequire(import.meta.url);

const serifStack = 'Newsreader, Newsreader Ext';
const monoStack = 'Plex Mono, Plex Mono Ext';

const colors = { ...brandColors, subtle: '#555555' };

type OgNode = { type: string; props: Record<string, unknown> };

function el(
  type: string,
  style: Record<string, unknown>,
  children?: unknown
): OgNode {
  return { type, props: { style, children } };
}

async function font(file: string): Promise<Buffer> {
  return readFile(require.resolve(`@fontsource/${file}`));
}

let fontsPromise: Promise<Parameters<typeof satori>[1]['fonts']> | undefined;

function loadFonts(): Promise<Parameters<typeof satori>[1]['fonts']> {
  fontsPromise ??= Promise.all([
    font('newsreader/files/newsreader-latin-400-normal.woff'),
    font('newsreader/files/newsreader-latin-ext-400-normal.woff'),
    font('newsreader/files/newsreader-latin-600-normal.woff'),
    font('ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff'),
    font('ibm-plex-mono/files/ibm-plex-mono-latin-ext-400-normal.woff')
  ]).then(([serif, serifExt, serifBold, mono, monoExt]) => [
    { name: 'Newsreader', data: serif, weight: 400, style: 'normal' },
    { name: 'Newsreader Ext', data: serifExt, weight: 400, style: 'normal' },
    { name: 'Newsreader', data: serifBold, weight: 600, style: 'normal' },
    { name: 'Plex Mono', data: mono, weight: 400, style: 'normal' },
    { name: 'Plex Mono Ext', data: monoExt, weight: 400, style: 'normal' }
  ]);
  return fontsPromise;
}

async function toPng(
  node: OgNode,
  width: number,
  height: number
): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await satori(node, { width, height, fonts: await loadFonts() });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: width } })
    .render()
    .asPng();
  return new Uint8Array(png);
}

function sparkline(values: readonly number[]): OgNode {
  const box = { width: 520, height: 140, padding: 12 };
  const points = sparklinePoints(values, box);
  const last = points.at(-1);
  const line = points.map((point) => `${point.x},${point.y}`).join(' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${box.width}" height="${box.height}"><polyline points="${line}" fill="none" stroke="${colors.ink}" stroke-width="3" stroke-linejoin="round"/>${last ? `<circle cx="${last.x}" cy="${last.y}" r="6" fill="${colors.accent}"/>` : ''}</svg>`;
  return {
    type: 'img',
    props: {
      src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`,
      width: box.width,
      height: box.height
    }
  };
}

function markImage(size: number, background = false): OgNode {
  return {
    type: 'img',
    props: {
      src: `data:image/svg+xml;base64,${Buffer.from(markSvg({ background })).toString('base64')}`,
      width: size,
      height: size
    }
  };
}

export interface OgCard {
  title: string;
  footer: string;
  chart?: { values: readonly number[]; caption: string };
}

export function renderOgImage(card: OgCard): Promise<Uint8Array<ArrayBuffer>> {
  const header = el(
    'div',
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 18,
      borderBottom: `2px solid ${colors.ink}`
    },
    [
      el('div', { display: 'flex', alignItems: 'center', gap: 14 }, [
        markImage(48),
        el(
          'div',
          { fontFamily: serifStack, fontSize: 40, fontWeight: 600 },
          'StatsMCP'
        )
      ]),
      el(
        'div',
        { fontFamily: monoStack, fontSize: 22, color: colors.subtle },
        'statsmcp.dev'
      )
    ]
  );
  const body = el(
    'div',
    { display: 'flex', flexGrow: 1, alignItems: 'center', gap: 40 },
    [
      el(
        'div',
        {
          display: 'flex',
          flex: 1,
          fontFamily: serifStack,
          fontSize: card.chart ? 64 : 72,
          lineHeight: 1.05,
          letterSpacing: -1
        },
        card.title
      ),
      ...(card.chart
        ? [
            el('div', { display: 'flex', flexDirection: 'column', gap: 10 }, [
              el(
                'div',
                { fontFamily: monoStack, fontSize: 16, color: colors.subtle },
                card.chart.caption
              ),
              sparkline(card.chart.values)
            ])
          ]
        : [])
    ]
  );
  const footer = el(
    'div',
    { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    [
      el('div', { fontFamily: monoStack, fontSize: 24 }, card.footer),
      el('div', { width: 24, height: 24, backgroundColor: colors.accent }, [])
    ]
  );
  const root = el(
    'div',
    {
      display: 'flex',
      flexDirection: 'column',
      width: 1200,
      height: 630,
      boxSizing: 'border-box',
      padding: 64,
      backgroundColor: colors.paper,
      color: colors.ink
    },
    [header, body, footer]
  );
  return toPng(root, 1200, 630);
}

export function renderIcon(size: number): Promise<Uint8Array<ArrayBuffer>> {
  const root = el(
    'div',
    {
      display: 'flex',
      width: size,
      height: size,
      backgroundColor: brandColors.paper
    },
    [markImage(size, true)]
  );
  return toPng(root, size, size);
}
