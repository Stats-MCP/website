import { describe, expect, it } from 'vitest';

import {
  breadcrumbData,
  faqData,
  softwareData,
  websiteData
} from '@/lib/structured-data';

describe('structured data', () => {
  it.each([
    ['WebSite', websiteData(['en', 'sl-SI'])],
    ['SoftwareApplication', softwareData()],
    ['FAQPage', faqData([])],
    ['BreadcrumbList', breadcrumbData([])]
  ])('builds a schema.org %s', (type, data) => {
    expect(data).toMatchObject({
      '@context': 'https://schema.org',
      '@type': type
    });
  });

  it('lists the site languages and a free offer', () => {
    expect(websiteData(['en', 'sl-SI'])).toMatchObject({
      inLanguage: ['en', 'sl-SI']
    });
    expect(softwareData()).toMatchObject({ offers: { price: '0' } });
  });

  it('turns every FAQ item into a question with its answer', () => {
    expect(
      faqData([{ question: 'Is it free?', answer: 'Yes.' }])
    ).toMatchObject({
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is it free?',
          acceptedAnswer: { text: 'Yes.' }
        }
      ]
    });
  });

  it('numbers breadcrumb items from 1', () => {
    const data = breadcrumbData([
      { name: 'StatsMCP', url: 'https://statsmcp.dev/' },
      { name: 'Slovenia', url: 'https://statsmcp.dev/slovenia/' }
    ]);

    expect(data).toMatchObject({
      itemListElement: [{ position: 1 }, { position: 2, name: 'Slovenia' }]
    });
  });
});
