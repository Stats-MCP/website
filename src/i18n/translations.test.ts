import { describe, expect, it } from 'vitest';

import { clients } from '@/data/clients';
import { countries } from '@/data/countries';
import { translatedSteps } from '@/i18n/client-steps';
import { locales } from '@/i18n/locales';
import { ui } from '@/i18n/ui';

const placeholders = (text: string): string[] =>
  [...text.matchAll(/\{[a-z]+\}/g)].map((match) => match[0]).toSorted();

/** Every string leaf with its path, so two trees can be compared key by key. */
function leaves(value: unknown, path = ''): [string, string][] {
  if (typeof value === 'string') return [[path, value]];
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => leaves(item, `${path}[${index}]`));
  }
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value).flatMap(([key, item]) =>
      leaves(item, path ? `${path}.${key}` : key)
    );
  }
  return [];
}

const english = new Map(leaves(ui.en));
const others = locales.filter((locale) => locale !== 'en');

describe('translations', () => {
  it.each(others)(
    '%s has every UI string of English with the same placeholders',
    (locale) => {
      const translated = leaves(ui[locale]);

      expect(translated.map(([path]) => path)).toEqual([...english.keys()]);
      for (const [path, text] of translated) {
        expect(placeholders(text), `${locale} ${path}`).toEqual(
          placeholders(english.get(path) ?? '')
        );
      }
    }
  );

  it.each(others)('%s client steps match the English steps', (locale) => {
    const steps = translatedSteps[locale];
    if (!steps) return;

    for (const client of clients) {
      const translated = steps[client.id];
      expect(translated, `${locale} ${client.id}`).toHaveLength(
        client.steps.length
      );
      translated?.forEach((step, index) => {
        expect(placeholders(step), `${locale} ${client.id} ${index}`).toEqual(
          placeholders(client.steps[index] ?? '')
        );
      });
    }
  });

  it.each(others)(
    '%s has its own name and example for every country',
    (locale) => {
      const missing = countries.flatMap((country) => [
        ...(country.name[locale] === undefined ? [`${country.id} name`] : []),
        ...(country.example && country.example.answer[locale] === undefined
          ? [`${country.id} example`]
          : [])
      ]);

      expect(missing).toEqual([]);
    }
  );
});
