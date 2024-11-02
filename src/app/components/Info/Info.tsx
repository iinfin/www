import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';
import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const listClients: ListItem[] = [
	'SELECTED CLIENTS:',
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
	'SERVICE AREAS:',
	'',
	'CREATIVE STRATEGY',
	'EXPERIENTIAL DESIGN',
	'ART/FILM DIRECTION',
	'CONTENT PRODUCTION',
];

export default function Info(): ReactElement {
	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-1 row-start-1 hidden md:block">
				<AnimationWrapper index={1}>
					CREATIVE PARTNER FOR
					<br />
					BRANDS OF THE FUTURE
				</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-1 md:col-span-1 md:col-start-3 md:row-start-1">
				<AnimationWrapper index={2}>MORE →</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-1 xl:mb-0">
				<AnimationWrapper index={3}>{renderList(listClients)}</AnimationWrapper>
			</div>

			<div className="col-span-1 col-start-6 row-start-1 hidden md:block xl:col-start-5">
				<AnimationWrapper index={4}>{renderList(listServices)}</AnimationWrapper>
			</div>

			<div className="col-span-1 col-start-6 row-start-1 hidden h-fit justify-self-end lg:block">
				{/* <AnimationWrapper index={5}>
					<a target="_blank" href="https://github.com/u29dc">
						/SRC
					</a>
				</AnimationWrapper> */}
			</div>
		</div>
	);
}
