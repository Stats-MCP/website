import { countryIndex } from '@/lib/country-index';

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => Response.json(countryIndex());
