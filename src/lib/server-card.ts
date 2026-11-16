import { ALL_COUNTRIES_URL } from '@/data/connect-target';
import { mcpServerVersion, serverCardPath } from '@/data/site';

const siteUrl = 'https://statsmcp.dev';
const description =
  'Read-only official statistics from national statistics offices and Eurostat. Search tables, read their codes and get figures with the source.';

// Schema: https://github.com/modelcontextprotocol/experimental-ext-server-card (SEP-2127).
export function serverCard(): object {
  return {
    $schema:
      'https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json',
    name: 'dev.statsmcp/statsmcp',
    version: mcpServerVersion,
    title: 'StatsMCP',
    description,
    websiteUrl: `${siteUrl}/`,
    icons: [
      {
        src: `${siteUrl}/favicon.svg`,
        mimeType: 'image/svg+xml',
        sizes: ['any']
      }
    ],
    remotes: [
      {
        type: 'streamable-http',
        url: ALL_COUNTRIES_URL,
        supportedProtocolVersions: ['2025-03-26', '2025-06-18', '2025-11-25']
      }
    ]
  };
}

// Spec: https://agenticresourcediscovery.org/spec/. Served at /.well-known/ard.json and at the old ai-catalog.json path.
export function ardManifest(): object {
  return {
    specVersion: '1.0',
    entries: [
      {
        identifier: 'urn:air:statsmcp.dev:mcp:statsmcp',
        displayName: 'StatsMCP',
        description,
        type: 'application/mcp-server-card+json',
        url: `${siteUrl}${serverCardPath}`,
        representativeQueries: [
          'What is the unemployment rate in Slovenia?',
          'Compare inflation in Canada and the EU',
          'Find official population tables for Norway',
          'Which Eurostat table has house prices?'
        ]
      }
    ]
  };
}
