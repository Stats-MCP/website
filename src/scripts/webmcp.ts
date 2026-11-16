import { createWebMcpTools } from '@/lib/webmcp-tools';

// Earlier WebMCP drafts, still shipped in some browsers, used navigator.modelContext.
export function registerWebMcpTools(): void {
  const context = document.modelContext ?? navigator.modelContext;
  if (!context) return;
  for (const tool of createWebMcpTools((input) => fetch(input))) {
    Promise.resolve()
      .then(() => context.registerTool(tool))
      .catch(() => undefined);
  }
}
