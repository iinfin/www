import { Client } from '@notionhq/client';
import { unstable_cache } from 'next/cache';

import type { Work } from './cms';

const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;
const REVALIDATE_TIME = 60 * 60 * 24 * 7; // 60 sec * 60 min * 24 hrs * 7 days = 1 week

if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
	throw new Error('Notion environment variables are not set');
}

const notion = new Client({
	auth: NOTION_API_KEY,
});

const fetchNotion = async (): Promise<Work[]> => {
	const response = await notion.databases.query({
		database_id: NOTION_DATABASE_ID,
		filter: { property: 'Status', status: { equals: 'Published' } },
		sorts: [{ property: 'SortOrder', direction: 'descending' }],
	});

	if (!response.results.length) {
		throw new Error('Empty data received from Notion');
	}

	// Map results into Work objects
	const works: Work[] = response.results.map((page) => {
		const { properties } = page as any;

		return {
			id: page.id, // Unique ID from Notion
			title: properties.Title?.title?.[0]?.plain_text || '',
			slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
			status: properties.Status?.status?.name || '',
			summary: properties.Summary?.rich_text?.[0]?.plain_text || '',
			isConfidential: properties.Confidential?.checkbox ?? false,
			video: properties.Video?.url || '',
			roles: properties.Roles?.multi_select?.map((role: any) => role.name) || [],
			clients: properties.Clients?.multi_select?.map((client: any) => client.name) || [],
		};
	});

	// Debugging: Log the raw Notion API response and mapped results
	// console.log('Raw Notion Response:', JSON.stringify(response, null, 2));
	// console.log('Mapped Works:', JSON.stringify(works, null, 2));

	return works;
};

// Use Next.js cache to store results and revalidate every 1 week
const fetchCachedWorks = unstable_cache(fetchNotion, ['works'], { revalidate: REVALIDATE_TIME });

const fetchWorksCollection = async (): Promise<Work[]> => {
	return fetchCachedWorks();
};

export { fetchNotion, fetchWorksCollection };
