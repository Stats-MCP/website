import { describe, expect, it } from 'vitest';

import { keepNumbersTogether } from '@/lib/highlight';

describe('keepNumbersTogether', () => {
  it.each([
    [
      'Sweden had 10 621 103 people.',
      'Sweden had 10\u00a0621\u00a0103 people.'
    ],
    ['prices rose 4,1 % this year', 'prices rose 4,1\u00a0% this year'],
    ['the wage was 2 243 € in 2026', 'the wage was 2\u00a0243\u00a0€ in 2026'],
    ['the wage was € 2 243', 'the wage was €\u00a02\u00a0243'],
    ['in 2026 the rate was', 'in 2026 the rate was']
  ])('joins the parts of a number in "%s"', (text, expected) => {
    expect(keepNumbersTogether(text)).toBe(expected);
  });
});
