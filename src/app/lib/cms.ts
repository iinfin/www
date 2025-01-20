import { fetchWorksCollection } from './notion';

// ===============================================

export interface Work {
	id: string;
	status: string;
	title: string;
	summary: string;
	isConfidential: boolean;
	video: string;
	roles: string[];
	clients: string[];
	link: string;
}

export interface FetchData {
	[key: string]: any;
}

// ===============================================

export const getAllWorks = async (): Promise<Work[]> => {
	return fetchWorksCollection();
};
