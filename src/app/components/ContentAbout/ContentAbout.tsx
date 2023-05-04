import type { ReactElement } from 'react';

import Navigation from '../Navigation/Navigation';

export default function ContentAbout(): ReactElement {
	const getListItemClass = (itemsList: string[], item: string, index: number) => {
		if (item === '') {
			return 'hidden';
		}
		if (index > 0 && itemsList[index - 1] === '') {
			return 'mt-4';
		}
		return '';
	};

	return (
		<div className="font-caption-01 top-0 col-span-6 grid aspect-auto grid-cols-6 gap-2 gap-y-20 sm:aspect-square md:aspect-wide-half lg:aspect-wide-full">
			<div className="col-span-1 row-start-1 hidden md:block">
				TECHNICAL ARTIST &<br />
				ART DIRECTOR
			</div>

			<div className="col-span-6 col-start-1 row-start-1 md:col-span-1 md:col-start-3 md:row-start-1">1</div>
			<div className="col-span-6 col-start-1 row-start-2 md:col-span-1 md:col-start-4 md:row-start-1">
				<ul>
					{[
						// content
						'CLIENTS',
						'',
						'PORSCHE',
						'LOTUS CARS',
						'',
						'OUTERNET LONDON',
						'NOHLAB',
						'TAIWAN MUSEUM OF FINE ARTS',
						'',
						'ARTIFICIAL ROME',
						'WALLPAPER MAGAZINE',
						'',
						'SAASFEE PAVILLON',
					].map((item, index, itemsList) => (
						<li key={index} className={getListItemClass(itemsList, item, index)}>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className="col-span-6 col-start-1 row-start-3 md:col-span-1 md:col-start-3 md:row-start-2">2</div>
			<div className="col-span-6 col-start-1 row-start-4 md:col-span-1 md:col-start-4 md:row-start-2">
				<ul>
					{[
						// content
						'FOCUS AREAS',
						'',
						'IMMERSIVE EXPERIENCES',
						'REAL-TIME VISUALS',
						'',
						'CG FILMS & VFX',
						'DESIGN',
						'PIPELINE DEVELOPMENT',
					].map((item, index, itemsList) => (
						<li key={index} className={getListItemClass(itemsList, item, index)}>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className="col-span-1 col-start-6 row-start-1 hidden md:block xl:col-start-5">
				<span>han@iinf.in</span>
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
		</div>
	);
}
