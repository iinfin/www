import { fetchWorksCollection } from './contentful';

// ===============================================

export interface Work {
	id: string;
	confidential: boolean;
	slug: string;
	title: string;
	summary: string;
	roles: string[];
	clients: string[];
	videoCover: string;
	imageCover: {
		url: string;
	};
	imageGalleryCollection: {
		items: {
			url: string;
		}[];
	};
}

export interface FetchData {
	[key: string]: any;
}

// ===============================================

export const getAllWorks = async (): Promise<Work[]> => {
	return fetchWorksCollection();
};
