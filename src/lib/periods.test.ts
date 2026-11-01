import { describe, expect, it } from 'vitest';

import { formatPeriod } from '@/lib/periods';

describe('formatPeriod', () => {
  it.each([
    ['2026M09', 'en', 'Sep 2026'],
    ['2026Q3', 'en', 'Q3 2026'],
    ['2025', 'en', '2025']
  ])('formats %s in %s as %s', (period, locale, expected) => {
    expect(formatPeriod(period, locale)).toBe(expected);
  });
});
