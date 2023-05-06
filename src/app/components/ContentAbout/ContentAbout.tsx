import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/Animation/AnimationWrapper';
import Navigation from '@/components/Navigation/Navigation';

const listClients = [
	//
	'CLIENTS & COLLABORATORS',
	'',
	'PORSCHE',
	'SONAR ISTANBUL',
	'',
	'OUTERNET LONDON',
	'NOHLAB',
	'NATIONAL TAIWAN MUSEUM OF FINE ARTS',
	'',
	'ARTIFICIAL ROME',
	'WALLPAPER MAGAZINE',
	'',
	'SAASFEE PAVILLON',
];

const listFocusAreas = [
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
	const getListItemClass = (item: string, index: number, itemsList: string[] = []) => {
		if (item === '') {
			return 'hidden';
		}
		if (index > 0 && itemsList[index - 1] === '') {
			return 'mt-4';
		}
		return '';
	};

	const renderList = (items: string[]) => {
		return (
			<ul>
				{items.map((item, index) => (
					<li key={index} className={getListItemClass(item, index, items)}>
						{item || <br />}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="font-caption-01 top-0 col-span-6 mb-40 mt-40 grid aspect-auto grid-cols-6 gap-2 sm:aspect-square md:aspect-wide-half lg:mb-10 lg:mt-10 lg:aspect-wide-full">
			<AnimationWrapper>
				<div className="col-span-1 row-start-1 hidden md:block">
					TECHNICAL ARTIST &<br />
					ART DIRECTOR
				</div>

				<div className="col-span-6 col-start-1 row-start-1 md:col-span-1 md:col-start-3 md:row-start-1">1</div>
				<div className="col-span-6 col-start-1 row-start-3 md:col-span-1 md:col-start-3 md:row-start-2">2</div>

				<div className="col-span-6 col-start-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-1">{renderList(listClients)}</div>
				<div className="col-span-6 col-start-1 row-start-4 md:col-span-1 md:col-start-4 md:row-start-2">{renderList(listFocusAreas)}</div>

				<div className="col-span-1 col-start-6 row-start-1 hidden md:block xl:col-start-5">
					<span>
						<a href="mailto:han@iinf.in">han@iinf.in</a>
					</span>
				</div>
				<div className="col-span-1 col-start-6 row-start-2 hidden md:block xl:col-start-5">
					<Navigation />
				</div>

				<div className="col-span-1 col-start-6 row-start-1 hidden justify-self-end lg:block">
					<div className="h-4 w-4 bg-black-x1"></div>
				</div>
				<div className="col-span-1 col-start-6 row-start-2 hidden justify-self-end lg:block">
					<span>@U29DC</span>
				</div>
			</AnimationWrapper>
		</div>
	);
}
