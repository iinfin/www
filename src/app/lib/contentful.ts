// contentful.ts
import type { Work } from './cms';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_ENVIRONMENT_ID } = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
	throw new Error('Contentful environment variables are not set');
}

const CONTENTFUL_DELIVERY_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID || 'master'}/entries`;

const fetchContentful = async (contentType: string): Promise<Work[]> => {
	const queryParams = new URLSearchParams({
		access_token: CONTENTFUL_ACCESS_TOKEN,
		content_type: contentType,
		limit: '100',
		order: '-fields.order',
	});

	const url = `${CONTENTFUL_DELIVERY_URL}?${queryParams.toString()}`;
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Failed to fetch from Contentful: ${res.statusText}`);
	}

	const { items } = (await res.json()) as { items: Array<{ fields: Work }> };

	if (items.length === 0) {
		throw new Error('Empty data received from Contentful');
	}

	return items.map((item) => item.fields);
};

const fetchWorksCollection = async (): Promise<Work[]> => {
	const contentType = 'work';
	return fetchContentful(contentType);
};

export { fetchContentful, fetchWorksCollection };
