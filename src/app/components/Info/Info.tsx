import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';
import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const listClients: ListItem[] = [
	// listClients
	'SELECTED CLIENTS:',
	'',
	'PORSCHE',
	'LOTUS CARS',
	'OUTERNET LONDON',
	'COCA COLA',
	'SONAR ISTANBUL',
	'WALLPAPER MAGAZINE',
	'~',
];

const listExpertise: ListItem[] = [
	// listExpertise
	'EXPERTISE:',
	'',
	'CREATIVE STRATEGY',
	'EXPERIENTIAL DESIGN',
	'FILM DIRECTION',
	'CONTENT PRODUCTION',
];

export default function Info(): ReactElement {
	const animationIndexStart = 7;

	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-1 row-start-1 hidden md:block">
				<AnimationWrapper index={animationIndexStart + 1}>
					CREATIVE PARTNER FOR
					<br />
					BRANDS OF THE FUTURE
				</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-1 md:col-span-1 md:col-start-3 md:row-start-1">
				<AnimationWrapper index={animationIndexStart + 2}>MORE →</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-1 xl:mb-0">
				{renderList(listClients, animationIndexStart + 3)}
			</div>

			<div className="col-span-1 col-start-6 row-start-1 hidden md:block xl:col-start-5">
				{renderList(listExpertise, animationIndexStart + 4)}
			</div>

			<div className="col-span-1 col-start-6 row-start-1 hidden h-fit justify-self-end lg:block">
				<AnimationWrapper index={animationIndexStart + 5}>
					<div className="h-1 w-4 bg-white-x1 opacity-50 dark:bg-white-x1"></div>
				</AnimationWrapper>
			</div>
		</div>
	);
}
