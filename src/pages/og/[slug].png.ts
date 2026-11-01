import { countries, liveCountries, endpoint } from '@/data/countries';
import { locales, localized } from '@/i18n/locales';
import { fill, ui } from '@/i18n/ui';
import { renderOgImage, type OgCard } from '@/og/render';

import type { APIRoute, GetStaticPaths } from 'astro';

interface Props {
  card: OgCard;
}

const offices = String(liveCountries.length);
const exampleCountry = countries.find((country) => country.example);

export const getStaticPaths = (() =>
  locales.flatMap((locale) => {
    const t = ui[locale];
    const pages: { slug: string; card: OgCard }[] = [
      {
        slug: 'home',
        card: {
          title: fill(t.home.title, { offices }),
          footer: t.hero.eyebrow,
          chart: exampleCountry?.example && {
            values: exampleCountry.example.series.map((point) => point.value),
            caption: `${t.seo.figureNumber} · ${localized(exampleCountry.name, locale)} · ${localized(exampleCountry.example.seriesLabel, locale)}`
          }
        }
      },
      {
        slug: 'privacy',
        card: { title: t.privacy.intro, footer: t.privacy.title }
      },
      {
        slug: 'countries',
        card: {
          title: fill(t.countries.pageTitle, { offices }),
          footer: t.countries.pageIntro
        }
      },
      {
        slug: 'licences',
        card: { title: t.licences.title, footer: t.footer.disclaimer }
      },
      ...countries.map((country) => ({
        slug: country.slug,
        card: {
          title: fill(t.seo.countryCard, {
            country: localized(country.name, locale)
          }),
          footer: `${country.code} · ${localized(country.name, locale)} · ${endpoint(country).replace('https://', '')}`
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
