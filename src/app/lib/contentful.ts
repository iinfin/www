import type { FetchData, WorkCollection } from './cms';

const { CONTENTFUL_SPACE_ID } = process.env;
const { CONTENTFUL_ACCESS_TOKEN } = process.env;
const { CONTENTFUL_ENVIRONMENT_ID } = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ENVIRONMENT_ID || !CONTENTFUL_ACCESS_TOKEN) {
	throw new Error('Contentful environment variables are not set');
}

const CONTENTFUL_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}`;

const queryWorksCollection = `
{
	workCollection {
		items {
			id
			title
			slug
			textSummary
			textDescription
			imageCover {
				url
			}
			imageGalleryCollection {
				items {
					url
				}
			}
		}
	}
}
`;

const fetchContentful = async (query: string): Promise<FetchData> => {
	const res = await fetch(CONTENTFUL_GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({ query }),
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch from Contentful: ${res.statusText}`);
	}

	const { data } = await res.json();

	if (Object.keys(data).length === 0) {
		throw new Error('Empty data received from Contentful');
	}

	return data;
};

const fetchWorksCollection = async (): Promise<WorkCollection> => {
	const data = await fetchContentful(queryWorksCollection);
	if (!('workCollection' in data)) {
		throw new Error('Invalid data received from Contentful: no workCollection field');
	}
	return data.workCollection.items as WorkCollection;
};

export { fetchContentful, fetchWorksCollection };
