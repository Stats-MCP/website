import { llmsText, markdownResponse } from '@/lib/agent-docs';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => markdownResponse(llmsText());
