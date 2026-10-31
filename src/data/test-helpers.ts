import { countries, type Country } from '@/data/countries';

export function getCountry(id: string): Country {
  const country = countries.find((item) => item.id === id);
  if (!country) throw new Error(`Country "${id}" is missing.`);
  return country;
}
