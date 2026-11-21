import { termsPage } from '@/data/info-pages';
import { infoPageMarkdown, markdownResponse } from '@/lib/agent-docs';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  markdownResponse(infoPageMarkdown(termsPage));
