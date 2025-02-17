import { Client } from '@notionhq/client';
import { unstable_cache } from 'next/cache';

import type { Work } from './cms';

const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;
const REVALIDATE_TIME = 60 * 60 * 24; // 60 sec * 60 min * 24 hrs
const MAX_RETRIES = 5;

if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
	throw new Error('Notion environment variables are not set');
}

const notion = new Client({ auth: NOTION_API_KEY });

const normalizeWorkData = (work: Work): Work => ({
	...work,
	title: work.title.toUpperCase(),
	summary: work.summary.toUpperCase(),
	// video: work.video.toLowerCase(),
	// link: work.link.toLowerCase(),
	roles: work.roles.map((role) => role.toUpperCase()),
	clients: work.clients.map((client) => client.toUpperCase()),
});

const fetchNotion = async (retryCount = 0): Promise<Work[]> => {
	try {
		const response = await notion.databases.query({
			database_id: NOTION_DATABASE_ID,
			filter: { property: 'Status', status: { equals: 'Published' } },
			sorts: [{ property: 'SortOrder', direction: 'descending' }],
		});

		if (!response.results.length) {
			throw new Error('Empty data received from Notion');
		}

		return response.results.map((page) => {
			const { properties } = page as any;

			const work: Work = {
				id: page.id,
				title: properties.Title?.title?.[0]?.plain_text || '',
				status: properties.Status?.status?.name || '',
				summary: properties.Summary?.rich_text?.[0]?.plain_text || '',
				isConfidential: properties.Confidential?.checkbox ?? false,
				video: properties.Video?.url || '',
				roles: properties.Roles?.multi_select?.map((role: any) => role.name) || [],
				clients: properties.Clients?.multi_select?.map((client: any) => client.name) || [],
				link: properties.Link?.url || '',
			};

			return normalizeWorkData(work);
		});
	} catch (error: any) {
		if (error.code === 'rate_limited' && retryCount < MAX_RETRIES) {
			const retryAfter = Number(error.response?.headers?.get('Retry-After')) || 2;
			const delay = retryAfter * 1000 * 2 ** retryCount; // Exponential backoff

			// eslint-disable-next-line no-console
			console.warn(`Rate limit hit. Retrying in ${delay / 1000}s...`);

			await new Promise((resolve) => {
				setTimeout(resolve, delay);
			});

			return fetchNotion(retryCount + 1);
		}

		throw error;
	}
};

const fetchCachedWorks = unstable_cache(fetchNotion, ['works'], { revalidate: REVALIDATE_TIME });

const fetchWorks = async (cache: boolean = false): Promise<Work[]> => (cache ? fetchCachedWorks() : fetchNotion());

export { fetchWorks };
