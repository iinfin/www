import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';
import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const exhibitions: [string, string, string][] = [
	['2023', 'TURKEY', 'SONAR ISTANBUL'],
	['2023', 'ENGLAND', 'OUTERNET LONDON'],
	['2023', 'GERMANY', 'SAASFEE PAVILLON'],
	['2022', 'TAIWAN', 'TAIWAN MUSEUM OF FINE ARTS'],
	['2021', 'FRANCE', 'ATELIER DES LUMIERES'],
	['2019', 'FRANCE', 'EGLISE DE LA MADELEINE'],
];

const listExhibitionsDate: ListItem[] = ['', '↗', '', ...exhibitions.map(([date, _, __]) => date)];
const listExhibitionsLocation: ListItem[] = ['', '', '', ...exhibitions.map(([_, location, __]) => location)];
const listExhibitionsTitle: ListItem[] = ['', 'EXHIBITIONS:', '', ...exhibitions.map(([_, __, title]) => title)];

const listServices: ListItem[] = ['SERVICES:', '', 'CREATIVE STRATEGY,', 'DIRECTION', 'PRODUCTION'];

export default function Info(): ReactElement {
	const animationIndexStart = 5;
	const exhibitionsIndex = animationIndexStart + 2;
	const exhibitionsStaggerOffset1 = Math.ceil(listExhibitionsDate.length * 0.4);
	const exhibitionsStaggerOffset2 = Math.ceil(listExhibitionsDate.length * 0.8);

	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-1 row-start-1 hidden lg:block">
				<AnimationWrapper index={animationIndexStart + 1}>
					<div className="bg-white-x1 dark:bg-white-x1 h-1 w-4"></div>
				</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-1 hidden md:col-span-1 md:col-start-1 md:row-start-1 md:block lg:col-start-3">
				<div className="w-full pr-20 text-right">
					<AnimationWrapper index={animationIndexStart + 1}>02</AnimationWrapper>
				</div>
			</div>

			<div className="col-span-1 col-start-6 row-start-1 hidden md:col-start-5 md:block lg:col-start-5">
				{renderList(listServices, animationIndexStart + 3)}
			</div>

			<div className="col-span-6 col-start-1 row-start-2 text-left md:col-span-1 md:col-start-4 md:text-right lg:col-start-4">
				{renderList(listExhibitionsDate, exhibitionsIndex)}
			</div>

			<div className="col-span-6 col-start-2 row-start-2 md:col-span-1 md:col-start-5 md:text-left lg:col-start-5">
				{renderList(listExhibitionsTitle, exhibitionsIndex + exhibitionsStaggerOffset1)}
			</div>

			<div className="col-span-6 col-start-1 row-start-2 text-right sm:col-start-6 md:col-span-1 md:col-start-6 md:text-right lg:col-start-6 xl:col-start-5">
				{renderList(listExhibitionsLocation, exhibitionsIndex + exhibitionsStaggerOffset2)}
			</div>
		</div>
	);
}
