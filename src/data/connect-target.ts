import { endpoint, type Country } from '@/data/countries';
import type { Localized } from '@/i18n/locales';

export const ALL_COUNTRIES_URL = 'https://statsmcp.dev/mcp';

export interface ConnectTarget {
  id: string;
  /** Short code in step texts ("StatsMCP SI"); empty for every country. */
  code: string;
  name: Localized;
  url: string;
  serverName: string;
  localPackage?: string;
}

export function allCountriesTarget(name: Localized): ConnectTarget {
  return {
    id: 'all',
    code: '',
    name,
    url: ALL_COUNTRIES_URL,
    serverName: 'statsmcp'
  };
}

export function countryTarget(country: Country): ConnectTarget {
  return {
    id: country.id,
    code: country.code,
    name: country.name,
    url: endpoint(country),
    serverName: `statsmcp-${country.id}`,
    ...(country.localPackage ? { localPackage: country.localPackage } : {})
  };
}
