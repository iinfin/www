import type { ReactElement } from 'react';

import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const listProfiles: ListItem[] = [
	{ LINKEDIN: 'https://linkedin.com/in/u29dc' },
	{ TWITTER: 'https://twitter.com/u29dc' },
	{ INSTAGRAM: 'https://instagram.com/u29dc' },
	{ VIMEO: 'https://vimeo.com/u29dc' },
];

export default function FooterProfiles(): ReactElement {
	return (
		<>
			<span className="mb-4 w-1/2">PROFILES</span>
			<span className="flex-grow text-right sm:text-left md:flex-grow-0">{renderList(listProfiles)}</span>
		</>
	);
}
