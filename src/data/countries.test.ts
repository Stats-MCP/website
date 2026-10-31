import { describe, expect, it } from 'vitest';

import { countries, endpoint, validateCountries } from '@/data/countries';
import { getCountry } from '@/data/test-helpers';

const slovenia = getCountry('si');

describe('validateCountries', () => {
  it('accepts the published country list', () => {
    expect(() => validateCountries(countries)).not.toThrow();
  });

  it('accepts a slug with a hyphen', () => {
    expect(() =>
      validateCountries([{ ...slovenia, slug: 'north-macedonia' }])
    ).not.toThrow();
  });

  it.each([
    ['an id that is not two letters', { id: 'svn' }, /country id/],
    ['a slug with a capital letter', { slug: 'Slovenia' }, /country slug/],
    ['a slug of two letters', { slug: 'si' }, /country slug/],
    ['a slug that is a site page', { slug: 'privacy' }, /country slug/]
  ])('rejects %s', (_case, change, error) => {
    expect(() => validateCountries([{ ...slovenia, ...change }])).toThrow(
      error
    );
  });

  it.each([
    ['slug', { id: 'sx' }, /country slug/],
    ['id', { slug: 'other' }, /country id/]
  ])('rejects two countries with the same %s', (_field, change, error) => {
    expect(() =>
      validateCountries([slovenia, { ...slovenia, ...change }])
    ).toThrow(error);
  });
});

describe('endpoint', () => {
  it('builds the endpoint from the country id', () => {
    expect(endpoint(slovenia)).toBe('https://statsmcp.dev/si/mcp');
  });
});
