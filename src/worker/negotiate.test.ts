import { describe, expect, it } from 'vitest';

import { markdownPath, prefersMarkdown } from '@/worker/negotiate';

describe('prefersMarkdown', () => {
  it.each([
    ['text/markdown', true],
    ['text/markdown, text/html;q=0.9', true],
    ['text/html, text/markdown', true],
    ['TEXT/MARKDOWN; charset=utf-8', true],
    ['text/html, text/markdown;q=0.5', false],
    ['text/html,application/xhtml+xml,*/*;q=0.8', false],
    ['*/*', false],
    ['text/markdown;q=0', false],
    [null, false]
  ])('%s → %s', (accept, expected) => {
    expect(prefersMarkdown(accept)).toBe(expected);
  });
});

describe('markdownPath', () => {
  it.each([
    ['/', '/index.md'],
    ['/about/', '/about/index.md'],
    ['/about', '/about/index.md'],
    ['/llms.txt', undefined],
    ['/favicon.svg', undefined]
  ])('%s → %s', (pathname, expected) => {
    expect(markdownPath(pathname)).toBe(expected);
  });
});
