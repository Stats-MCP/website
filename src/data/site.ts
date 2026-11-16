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
