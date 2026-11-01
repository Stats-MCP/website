import { countries, endpoint } from '@/data/countries';
import { locales } from '@/i18n/locales';
import { fill, ui } from '@/i18n/ui';
import { renderOgImage, type OgCard } from '@/og/render';

import type { APIRoute, GetStaticPaths } from 'astro';

interface Props {
  card: OgCard;
}

export const getStaticPaths = (() =>
  locales.flatMap((locale) => {
    const t = ui[locale];
    const slovenia = countries.find((country) => country.example);
    const pages: { slug: string; card: OgCard }[] = [
      {
        slug: 'home',
        card: {
          title: t.hero.title,
          footer: t.hero.eyebrow,
          chart: slovenia?.example && {
            values: slovenia.example.series.map((point) => point.value),
            caption: `${t.seo.figureNumber} · ${slovenia.name[locale]} · ${slovenia.example.seriesLabel[locale]}`
          }
        }
      },
      {
        slug: 'privacy',
        card: { title: t.privacy.intro, footer: t.privacy.title }
      },
      {
        slug: 'countries',
        card: { title: t.countries.pageTitle, footer: t.countries.pageIntro }
      },
      {
        slug: 'licences',
        card: { title: t.licences.title, footer: t.footer.disclaimer }
      },
      ...countries.map((country) => ({
        slug: country.slug,
        card: {
          title: fill(t.seo.countryCard, { country: country.name[locale] }),
          footer: `${country.code} · ${country.name[locale]} · ${endpoint(country).replace('https://', '')}`
        }
      }))
    ];
    return pages.map((page) => ({
      params: { slug: `${page.slug}-${locale}` },
      props: { card: page.card }
    }));
  })) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props }) =>
  new Response(await renderOgImage(props.card), {
    headers: { 'content-type': 'image/png' }
  });
