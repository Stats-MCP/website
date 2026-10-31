export interface MarkRect {
  x: number;
  y: number;
  width: number;
  height: number;
  accent?: boolean;
}

export const markRects: readonly MarkRect[] = [
  { x: 112, y: 96, width: 288, height: 56 },
  { x: 112, y: 96, width: 56, height: 168 },
  { x: 344, y: 96, width: 56, height: 80 },
  { x: 112, y: 296, width: 56, height: 80 },
  { x: 344, y: 208, width: 56, height: 168 },
  { x: 112, y: 208, width: 288, height: 56, accent: true },
  { x: 112, y: 320, width: 288, height: 56 },
  { x: 96, y: 400, width: 320, height: 16 }
];

export const brandColors = {
  paper: '#F6F6F3',
  ink: '#141414',
  accent: '#B3122E'
};

export function markSvg(options: { background?: boolean } = {}): string {
  const rects = markRects
    .map(
      (rect) =>
        `<rect x="${rect.x}" y="${rect.y}" width="${rect.width}" height="${rect.height}" fill="${rect.accent ? brandColors.accent : brandColors.ink}"/>`
    )
    .join('');
  const background = options.background
    ? `<rect width="512" height="512" fill="${brandColors.paper}"/>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" shape-rendering="crispEdges">${background}${rects}</svg>`;
}
