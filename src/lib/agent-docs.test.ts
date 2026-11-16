import { describe, expect, it } from 'vitest';

import { endpoint, liveCountries } from '@/data/countries';
import { aboutPage, contactPage } from '@/data/info-pages';
import {
  infoPageMarkdown,
  llmsFullText,
  llmsText,
  notFoundMarkdown
} from '@/lib/agent-docs';

describe('agent docs', () => {
  it('tells agents when to use StatsMCP and how to call it', () => {
    const text = llmsText();

    expect(text).toMatch(/^# StatsMCP\n\n> /);
    expect(text).toContain('## When to use StatsMCP');
    expect(text).toContain('## How to call it');
  });

  it('lists the endpoint of every live country in llms-full.txt', () => {
    const text = llmsFullText();

    for (const country of liveCountries)
      expect(text).toContain(`MCP endpoint: ${endpoint(country)}`);
  });

  it('explains a missing page and links to llms.txt and the sitemap', () => {
    const text = notFoundMarkdown();

    expect(text).toContain('https://statsmcp.dev/llms.txt');
    expect(text).toContain('https://statsmcp.dev/sitemap-index.xml');
  });

  it.each([aboutPage, contactPage])(
    '$path has at least 500 characters of content',
    (page) => {
      const text = page.sections
        .flatMap((section) => section.paragraphs)
        .join(' ');

      expect(text.length).toBeGreaterThanOrEqual(500);
    }
  );

  it('writes page links as absolute Markdown links', () => {
    expect(infoPageMarkdown(aboutPage)).toContain(
      '[Countries and endpoints](https://statsmcp.dev/countries/)'
    );
  });
});
