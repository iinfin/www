import type { ReactElement } from 'react';

import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const listClients: ListItem[] = [
	// listClients
	'CLIENTS & COLLABORATORS',
	'',
	'PORSCHE',
	'LOTUS_CARS',
	'OUTERNET_LONDON',
	'COCA_COLA',
	'SONAR_ISTANBUL',
	'WALLPAPER_MAGAZINE',
	'~',
];

const listServices: ListItem[] = [
	// listServices
	'SERVICES',
	'',
	'CONCEPT DESIGN',
	'ART DIRECTION',
];

export default function Info(): ReactElement {
	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-1 row-start-1 hidden md:block">
				CREATIVE LEAD &<br />
				ART DIRECTOR
			</div>
			<div className="col-span-6 col-start-1 row-start-1 md:col-span-1 md:col-start-3 md:row-start-1">MORE →</div>
			<div className="col-span-6 col-start-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-1 xl:mb-0">{renderList(listClients)}</div>
			<div className="col-span-1 col-start-6 row-start-1 hidden md:block xl:col-start-5">{renderList(listServices)}</div>
			<div className="col-span-1 col-start-6 row-start-1 hidden h-fit justify-self-end lg:block">
				<a target="_blank" href="https://github.com/u29dc">
					/SRC
				</a>
			</div>
		</div>
	);
}
