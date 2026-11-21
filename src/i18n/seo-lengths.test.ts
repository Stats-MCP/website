import { describe, expect, it } from 'vitest';

import { liveCountries } from '@/data/countries';
import { aboutPage, contactPage, termsPage } from '@/data/info-pages';
import { fill, ui } from '@/i18n/ui';

const seo = ui.en.seo;
const pages = [
  ['home', seo.home.title, seo.home.description],
  ['countries', seo.countries.title, seo.countries.description],
  ['licences', seo.licences.title, seo.licences.description],
  ['privacy', seo.privacy.title, seo.privacy.description],
  ['about', aboutPage.seoTitle, aboutPage.description],
  ['contact', contactPage.seoTitle, contactPage.description],
  ['terms', termsPage.seoTitle, termsPage.description],
  ...liveCountries.map((country) => {
    const values = {
      country: country.name.en,
      database: country.database.name,
      office: country.office.name
    };
    return [
      country.slug,
      fill(seo.countryLive.title, values),
      fill(seo.countryLive.description, values)
    ];
  })
];

describe('English SEO text', () => {
  it.each(pages)(
    '%s fits in search results',
    (_page, title = '', description = '') => {
      expect(title.length).toBeLessThanOrEqual(61);
      expect(description.length).toBeLessThanOrEqual(160);
    }
  );
});
