import type { CountryIndex, OfficeEntry } from '@/lib/country-index';

export type WebMcpTool = ModelContextToolInit;

const isIndex = (value: unknown): value is CountryIndex =>
  typeof value === 'object' &&
  value !== null &&
  'offices' in value &&
  Array.isArray(value.offices);

async function loadIndex(fetchFn: typeof fetch): Promise<CountryIndex> {
  const response = await fetchFn('/countries.json');
  if (!response.ok)
    throw new Error(`/countries.json returned ${response.status}.`);
  const data: unknown = await response.json();
  if (!isIndex(data)) throw new Error('/countries.json has an unknown shape.');
  return data;
}

function findOffice(
  offices: readonly OfficeEntry[],
  query: string
): OfficeEntry | undefined {
  const wanted = query.trim().toLowerCase();
  return offices.find(
    (office) =>
      office.id === wanted ||
      office.name.toLowerCase() === wanted ||
      office.database.toLowerCase() === wanted
  );
}

export function createWebMcpTools(fetchFn: typeof fetch): WebMcpTool[] {
  return [
    {
      name: 'list_statistics_offices',
      title: 'List StatsMCP statistics offices',
      description:
        'List the national statistics offices and Eurostat in StatsMCP, with the MCP endpoint, data languages, table count and licence of each.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => loadIndex(fetchFn)
    },
    {
      name: 'get_mcp_endpoint',
      title: 'Get a StatsMCP endpoint',
      description:
        'Get the MCP endpoint URL to add to an AI assistant. Without a country, returns the endpoint for every office. With a country id or name, for example "si" or "Norway", returns the endpoint of that office.',
      inputSchema: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'Optional country id or English name.'
          }
        }
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => {
        const index = await loadIndex(fetchFn);
        const country = input['country'];
        const connect =
          'Add the URL as a remote MCP server (Streamable HTTP). It needs no API key.';
        if (typeof country !== 'string' || country.trim() === '')
          return { endpoint: index.allCountriesEndpoint, next: connect };
        const office = findOffice(index.offices, country);
        if (!office)
          throw new Error(
            `Unknown country "${country}". Use one of: ${index.offices.map((entry) => entry.id).join(', ')}.`
          );
        if (!office.endpoint)
          return {
            endpoint: null,
            next: `${office.name} is not live yet. Use ${index.allCountriesEndpoint} for the other offices.`
          };
        return {
          endpoint: office.endpoint,
          office: office.office,
          next: connect
        };
      }
    }
  ];
}
