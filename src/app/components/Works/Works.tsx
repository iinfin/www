import type { ReactElement } from 'react';

import type { Work } from '@/lib/cms';
import { getAllWorks } from '@/lib/cms';

import WorkItem from './WorkItem';

export default async function Works(): Promise<ReactElement> {
	const animationIndexStart = 13;

	let works: Work[] = [];
	try {
		works = await getAllWorks();
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error fetching works:', error);
	}

	return (
		<div className="mb-100 col-span-6 grid grid-cols-6 gap-2 md:mb-40">
			{works.length > 0 && works.map((work, index) => <WorkItem key={work.id} work={work} baseIndex={animationIndexStart + index * 2} />)}
		</div>
	);
}
