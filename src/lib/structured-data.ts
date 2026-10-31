import type { FaqItem } from '@/i18n/ui';

const siteUrl = 'https://statsmcp.dev/';

export function websiteData(languages: readonly string[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StatsMCP',
    url: siteUrl,
    inLanguage: languages
  };
}

export function softwareData(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'StatsMCP',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    license: 'https://opensource.org/licenses/MIT',
    url: siteUrl
  };
}

export function faqData(items: readonly FaqItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };
}

export function breadcrumbData(
  items: readonly { name: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
