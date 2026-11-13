function quality(params: string[]): number {
  const q = params.find((param) => param.trim().startsWith('q='));
  if (!q) return 1;
  const value = Number(q.trim().slice(2));
  return Number.isFinite(value) ? value : 0;
}

/** True when the Accept header ranks text/markdown at least as high as HTML. Wildcards count for HTML only. */
export function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  let markdown = 0;
  let html = 0;
  for (const range of accept.toLowerCase().split(',')) {
    const [type = '', ...params] = range.split(';');
    const q = quality(params);
    const name = type.trim();
    if (name === 'text/markdown') markdown = Math.max(markdown, q);
    if (name === 'text/html' || name === 'text/*' || name === '*/*') {
      html = Math.max(html, q);
    }
  }
  return markdown > 0 && markdown >= html;
}

/** Markdown file for a page path, or undefined when the path names a file. */
export function markdownPath(pathname: string): string | undefined {
  const last = pathname.split('/').at(-1) ?? '';
  if (last.includes('.')) return undefined;
  const dir = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${dir}index.md`;
}
