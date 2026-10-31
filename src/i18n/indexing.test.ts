import { describe, expect, it } from 'vitest';

import {
  isIndexable,
  isIndexableUrl,
  type IndexingRules
} from '@/i18n/indexing';

const rules: IndexingRules = {
  locales: ['en', 'sl'],
  defaultLocale: 'en',
  reviewedLocales: ['en'],
  countries: [
    { slug: 'slovenia', status: 'live' },
    { slug: 'norway', status: 'planned' }
  ]
};

describe('isIndexable', () => {
  it.each([
    ['a reviewed locale without a country', 'en', undefined, true],
    ['a reviewed locale and a live country', 'en', 'slovenia', true],
    ['a planned country', 'en', 'norway', false],
    ['a locale that is not reviewed', 'sl', undefined, false],
    ['an unknown country', 'en', 'atlantis', false]
  ] as const)('handles %s', (_case, locale, slug, expected) => {
    expect(isIndexable(rules, locale, slug)).toBe(expected);
  });
});

describe('isIndexableUrl', () => {
  it.each([
    ['https://statsmcp.dev/', true],
    ['https://statsmcp.dev/slovenia/', true],
    ['https://statsmcp.dev/privacy/', true],
    ['https://statsmcp.dev/norway/', false],
    ['https://statsmcp.dev/sl/', false],
    ['https://statsmcp.dev/sl/slovenia/', false],
    ['https://statsmcp.dev/404/', false],
    ['https://statsmcp.dev/og/home-en.png', false]
  ])('%s → %s', (url, expected) => {
    expect(isIndexableUrl(rules, url)).toBe(expected);
  });

  it('indexes a translated page once its locale is reviewed', () => {
    const reviewed = { ...rules, reviewedLocales: ['en', 'sl'] as const };

    expect(isIndexableUrl(reviewed, 'https://statsmcp.dev/sl/slovenia/')).toBe(
      true
    );
  });
});
