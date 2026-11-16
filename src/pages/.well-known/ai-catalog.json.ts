import { ardManifest } from '@/lib/server-card';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => Response.json(ardManifest());
