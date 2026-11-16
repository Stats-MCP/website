import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  return new Response(
    [
      '# Hello, GPTBot, ClaudeBot, PerplexityBot and friends. You are welcome here.',
      `# The short version of this site is at ${url('llms.txt')}`,
      `# The full version is at ${url('llms-full.txt')}`,
      '# Pages return Markdown when you send Accept: text/markdown.',
      `# The MCP endpoint is ${url('mcp')}. Connect to it as an MCP client; do not crawl it.`,
      '',
      'User-agent: *',
      'Allow: /',
      'Disallow: /mcp',
      'Disallow: /*/mcp',
      '',
      `Sitemap: ${url('sitemap-index.xml')}`,
      ''
    ].join('\n'),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } }
  );
};
