import { describe, expect, it } from 'vitest';

import { countryIndex } from '@/lib/country-index';
import { createWebMcpTools } from '@/lib/webmcp-tools';

const fetchFn: typeof fetch = async () => Response.json(countryIndex());
const getEndpoint = createWebMcpTools(fetchFn).find(
  (tool) => tool.name === 'get_mcp_endpoint'
);
const run = (input: Record<string, unknown>) => {
  if (!getEndpoint) throw new Error('get_mcp_endpoint is missing.');
  return getEndpoint.execute(input);
};

describe('get_mcp_endpoint', () => {
  it('returns the all-countries endpoint without a country', async () => {
    await expect(run({})).resolves.toMatchObject({
      endpoint: 'https://statsmcp.dev/mcp'
    });
  });

  it.each(['si', 'Slovenia', 'SiStat'])(
    'finds Slovenia by %s',
    async (country) => {
      await expect(run({ country })).resolves.toMatchObject({
        endpoint: 'https://statsmcp.dev/si/mcp'
      });
    }
  );

  it('names the valid ids for an unknown country', async () => {
    await expect(run({ country: 'atlantis' })).rejects.toThrow(/si, /);
  });
});
