const flags = import.meta.glob<string>(
  '/node_modules/flag-icons/flags/4x3/*.svg',
  { query: '?url', import: 'default', eager: true }
);

/** URL of the 4:3 flag for an ISO 3166 code (`EU` for the European Union). */
export function flagUrl(code: string): string | undefined {
  return flags[`/node_modules/flag-icons/flags/4x3/${code.toLowerCase()}.svg`];
}
