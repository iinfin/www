import { fetchWorksCollection } from './contentful';

// ===============================================

export interface Work {
	id: string;
	title: string;
	slug: string;
	textSummary: string;
	textDescription: string;
	imageCover: {
		url: string;
	};
	imageGalleryCollection: {
		items: {
			url: string;
		}[];
	};
}

export interface WorkCollection {
	items: Work[];
}

export interface FetchData {
	[key: string]: any;
}

// ===============================================

export const getAllWorks = async (): Promise<WorkCollection> => {
	return fetchWorksCollection();
};
