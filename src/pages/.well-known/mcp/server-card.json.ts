import { serverCard } from '@/lib/server-card';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => Response.json(serverCard());
