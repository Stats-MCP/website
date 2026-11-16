export const githubOrgUrl = 'https://github.com/Stats-MCP';
export const repoUrl = `${githubOrgUrl}/statsmcp`;
export const issuesUrl = `${repoUrl}/issues`;
export const docsUrl = `${repoUrl}/tree/main/docs`;
export const securityUrl = `${repoUrl}/security/policy`;
export const npmUrl = (name: string): string =>
  `https://www.npmjs.com/package/${name}`;
export const tiansphereUrl = 'https://tiansphere.com';
/** Version of the hosted MCP server, for the server card. Update it when the MCP repository releases. */
export const mcpServerVersion = '0.4.1';
export const serverCardPath = '/.well-known/mcp/server-card.json';
// Chrome origin trial token for WebMCP, bound to https://statsmcp.dev. It expires on 30 March 2027.
// Renew it at https://developer.chrome.com/origintrials/#/trials/my
export const webMcpOriginTrialToken =
  'Ag9ljKDXMSmsxb+DmTuSI2wpcYqlNQUNNdJ+tXH4TNxxtDkqY2x1SrjVVas4+CvdcF0iA2N6/uWk5yA797Ke8wsAAABMeyJvcmlnaW4iOiJodHRwczovL3N0YXRzbWNwLmRldjo0NDMiLCJmZWF0dXJlIjoiV2ViTUNQIiwiZXhwaXJ5IjoxODA2MzY0ODAwfQ==';
