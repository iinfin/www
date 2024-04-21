import type { ReactElement } from 'react';

import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const listProfiles: ListItem[] = [
	{ "LET'S CHAT ↗": 'https://u29dc.co/cal' },
	'',
	{ 'LINKEDIN ↗': 'https://u29dc.co/linkedin' },
	{ 'INSTAGRAM ↗': 'https://u29dc.co/instagram' },
	{ 'VIMEO ↗': 'https://u29dc.co/vimeo' },
	{ 'GITHUB ↗': 'https://u29dc.co/github' },
];

export default function Contact(): ReactElement {
	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-6 row-start-1 h-fit justify-self-end lg:block">
				<div className="h-4 w-4 bg-white-x1 dark:bg-white-x1"></div>
			</div>
			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-4 md:flex-col">
				<span className="flex-grow text-right sm:text-left md:flex-grow-0">{renderList(listProfiles)}</span>
			</div>
			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-5 md:flex-row">
				<span className="mb-4 w-1/2">CONTACT →</span>
				<span className="flex-grow text-right sm:text-left md:flex-grow-0">
					<a href="mailto:han@u29dc.com">han@u29dc.com</a>
				</span>
			</div>
		</div>
	);
}
