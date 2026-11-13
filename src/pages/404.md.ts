import { markdownResponse, notFoundMarkdown } from '@/lib/agent-docs';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => markdownResponse(notFoundMarkdown());
