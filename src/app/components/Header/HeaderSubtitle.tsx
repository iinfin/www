import type { ReactElement } from 'react';

export default function HeaderSubtitle(): ReactElement {
	const items = [
		'AN EVOLVING',
		'ENTITY',
		'ACTING AS',
		'A MULTIFACETED',
		'PRACTICE —',
		'',
		'SPECULATING',
		'→',
		'ARTIFICIAL AESTHETICS',
		'ACROSS MEDIUMS',
	];

	const renderItem = (item: string, index: number) => {
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
		<>
			<div className="col-span-6 md:col-span-2">
				— AN INCOMPLETE
				<br />
				INFINITY /
			</div>
			<div className="col-span-6 row-start-2 sm:col-span-4 md:col-span-3 lg:col-span-2">
				<h4 className="font-heading-04">
					<span className="flex flex-grow flex-wrap justify-between text-justify">{items.map(renderItem)}</span>
				</h4>
			</div>
		</>
	);
}
