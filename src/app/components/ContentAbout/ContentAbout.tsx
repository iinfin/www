import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/Animation/AnimationWrapper';
import Navigation from '@/components/Navigation/Navigation';

type ListItem = string | { [key: string]: string };

const listClients: ListItem[] = [
	//
	'CLIENTS & COLLABORATORS',
	'',
	{ PORSCHE: 'https://twitter.com/PorscheGB/status/1618564539074617344' },
	{ NOHLAB: 'https://nohlab.com/work/cycle' },
	'',
	{ SONAR_ISTANBUL: 'https://sonaristanbul.com/' },
	{ OUTERNET_LONDON: 'https://outernetglobal.com/' },
	'',
	{ ARTIFICIAL_ROME: 'https://artificialrome.com/case/legacy-of-tomorrow' },
	{ WALLPAPER_MAGAZINE: 'https://wallpaper.com/porsche' },
	'',
	{ SAASFEE_PAVILLON: 'https://offgrid.studio/assemblage/' },
	{ NATIONAL_TAIWAN_MUSEUM_OF_FINE_ARTS: 'https://csismn.com/patterns-of-possibility-v2' },
];

const listFocusAreas: ListItem[] = [
	//
	'FOCUS AREAS',
	'',
	'IMMERSIVE EXPERIENCES',
	'REAL-TIME VISUALS',
	'',
	'CG FILMS & VFX',
	'DESIGN',
	'PIPELINE DEVELOPMENT',
];

export default function ContentAbout(): ReactElement {
	const getListItemClass = (item: ListItem, index: number, itemsList: ListItem[] = []) => {
		if (typeof item === 'string' && item === '') {
			return 'hidden';
		}
		if (index > 0 && typeof itemsList[index - 1] === 'string' && itemsList[index - 1] === '') {
			return 'mt-4';
		}
		return '';
	};

	const renderListItem = (item: ListItem) => {
		if (typeof item === 'string') {
			return item || <br />;
		}
		const key = Object.keys(item)[0];
		const content = item[key ?? ''];
		return (
			<a target="_blank" href={content}>
				{key}
			</a>
		);
	};

	const renderList = (items: ListItem[]) => {
		return (
			<ul>
				{items.map((item, index) => (
					<li key={index} className={getListItemClass(item, index, items)}>
						{renderListItem(item)}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="col-span-6 grid aspect-auto grid-cols-6 gap-2 sm:aspect-square md:aspect-wide-half lg:aspect-wide-full">
			<AnimationWrapper>
				<div className="col-span-1 row-start-1 hidden md:block">
					TECHNICAL ARTIST &<br />
					ART DIRECTOR
				</div>

				<div className="col-span-6 col-start-1 row-start-1 md:col-span-1 md:col-start-3 md:row-start-1">01</div>
				<div className="col-span-6 col-start-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-1">{renderList(listClients)}</div>
				<div className="col-span-1 col-start-6 row-start-1 hidden md:block xl:col-start-5">
					<a href="mailto:han@iinf.in">han@iinf.in</a>
				</div>
				<div className="col-span-1 col-start-6 row-start-1 hidden justify-self-end lg:block">
					<div className="h-4 w-4 bg-black-x1 dark:bg-white-x1"></div>
				</div>

				<div className="col-span-6 col-start-1 row-start-3 md:col-span-1 md:col-start-3 md:row-start-2">02</div>
				<div className="col-span-6 col-start-1 row-start-4 flex flex-col justify-between md:col-span-1 md:col-start-4 md:row-start-2">
					{renderList(listFocusAreas)}
					<span>/</span>
				</div>
				<div className="col-span-1 col-start-6 row-start-2 hidden md:block xl:col-start-5">
					<Navigation />
				</div>
				<div className="col-span-1 col-start-6 row-start-2 hidden self-end justify-self-end lg:block">
					<span>@U29DC</span>
				</div>
			</AnimationWrapper>
		</div>
	);
}
