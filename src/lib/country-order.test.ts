import { describe, expect, it } from 'vitest';

import { countries } from '@/data/countries';
import { byCode, byName, defaultCountry } from '@/lib/country-order';

describe('country order', () => {
  it('puts EU first, then sorts the chips by code', () => {
    const codes = byCode(countries).map((country) => country.code);

    expect(codes[0]).toBe('EU');
    expect(codes.slice(1)).toEqual(codes.slice(1).toSorted());
  });

  it('sorts names in the page language, with EU first', () => {
    const names = byName(countries, 'de').map((country) => country.id);

    expect(names[0]).toBe('eu');
    expect(names.indexOf('dk')).toBeLessThan(names.indexOf('ee'));
  });

  it.each([
    ['sl', 'si'],
    ['is', 'is'],
    ['et', 'ee'],
    ['de', 'eu'],
    ['en', 'eu']
  ] as const)('opens the %s page with %s selected', (locale, id) => {
    expect(defaultCountry(countries, locale).id).toBe(id);
  });
});
