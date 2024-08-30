import type { ReactElement } from 'react';

import type { ListItem } from '@/utils/List';
import { renderList } from '@/utils/List';

const listNavigation: ListItem[] = [
	// listNavigation
	{ INFORMATION: 'https://u29dc.co/linkedin' },
	{ PORTFOLIO: 'https://u29dc.co/instagram' },
];

export default function Title(): ReactElement {
	const subtitleItems = [
		'AN EVOLVING',
		'ENTITY',
		'ACTING AS',
		'A MULTIFACETED',
		'PRACTICE',
		'SPECULATING',
		'→',
		'ARTIFICIAL AESTHETICS',
		'ACROSS MEDIUMS',
	];

	const renderSubtitle = (item: string, index: number) => {
		if (item === '') {
			return <div key={index} className="none w-auto lg:block xl:w-full" />;
		}

		return (
			<span key={index} className="gap-x-1">
				{item}
			</span>
		);
	};

	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-3 col-start-4 row-start-1 text-right sm:text-left md:col-span-1 md:col-start-1"></div>
			<div className="col-span-3 col-start-1 row-start-1 md:col-span-1 md:col-start-3">{renderList(listNavigation)}</div>
			<div className="col-span-6 col-start-1 md:col-span-3 md:col-start-4">
				<p className="font-subtitle">U29DC</p>
				<p>(IINFIN)</p>
			</div>
			<div className="col-span-6 col-start-1 grid grid-cols-6 md:col-start-3 md:grid-cols-3 lg:col-span-3 lg:col-start-3">
				<div className="col-span-6 hidden md:col-span-2 md:block">
					— AN INCOMPLETE
					<br />
					INFINITY
				</div>
				<div className="col-span-6 row-start-2 sm:col-span-4 md:col-span-3 lg:col-span-1 lg:col-start-2">
					<p>
						<span className="flex flex-grow flex-wrap justify-between text-justify">{subtitleItems.map(renderSubtitle)}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
