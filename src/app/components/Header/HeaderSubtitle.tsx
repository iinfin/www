import type { ReactElement } from 'react';
import react from 'react';

export default function HeaderSubtitle(): ReactElement {
	return (
		<>
			<div className="col-span-6 md:col-span-2">
				— AN INCOMPLETE
				<br />
				INFINITY /
			</div>
			<div className="col-span-6 row-start-2 sm:col-span-4 md:col-span-2">
				<h4 className="font-heading-04">
					<span className="flex flex-grow flex-wrap justify-between text-justify">
						{[
							'AN EVOLVING ENTITY',
							'ACTING AS',
							'A MULTIFACETED',
							'',
							'PRACTICE —',
							'SPECULATING',
							'→',
							'ARTIFICIAL AESTHETICS',
							'',
							'ACROSS',
							'MEDIUMS',
						].map((item, index) => (
							<react.Fragment key={index}>
								{item === '' ? <div className="w-auto xl:w-full">{/* <br /> */}</div> : <span className="">{item}</span>}
							</react.Fragment>
						))}
					</span>
				</h4>
			</div>
		</>
	);
}
