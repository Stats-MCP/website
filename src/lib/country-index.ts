import { ALL_COUNTRIES_URL } from '@/data/connect-target';
import { countries, endpoint, statusKey } from '@/data/countries';

const siteUrl = 'https://statsmcp.dev';

export interface OfficeEntry {
  id: string;
  name: string;
  office: string;
  database: string;
  status: string;
  endpoint: string | null;
  dataLanguages: string[];
  tables: number | null;
  licence: string;
  page: string;
}

export interface CountryIndex {
  allCountriesEndpoint: string;
  offices: OfficeEntry[];
}

export function countryIndex(): CountryIndex {
  return {
    allCountriesEndpoint: ALL_COUNTRIES_URL,
    offices: countries.map((country) => ({
      id: country.id,
      name: country.name.en,
      office: country.office.fullName.en,
      database: country.database.name,
      status: statusKey(country),
      endpoint: country.status === 'live' ? endpoint(country) : null,
      dataLanguages: country.dataLanguages,
      tables: country.tables ?? null,
      licence: country.licence.label.en,
      page: `${siteUrl}/${country.slug}/`
    }))
  };
}
