import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';

export default function Title(): ReactElement {
	const animationIndexStart = 10;

	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-3 col-start-1 row-start-1 hidden md:col-span-1 md:col-start-3 lg:block">
				<AnimationWrapper index={animationIndexStart + 1}>03</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 md:col-span-3 md:col-start-3 lg:col-start-4">
				<AnimationWrapper index={animationIndexStart + 2}>
					<p className="font-subtitle">INCOMPLETE INFINITY</p>
					<p>(@U29DC) (IINFIN)</p>
				</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 grid grid-cols-6 md:col-start-3 md:grid-cols-3 lg:col-span-3 lg:col-start-4">
				<div className="col-span-6 row-start-1 mt-4 sm:col-span-4 lg:col-span-2 3xl:col-span-1">
					<AnimationWrapper index={animationIndexStart + 3}>
						INCOMPLETE INFINITY IS AN EVOLVING, MULTIFACETED CREATIVE PRACTICE WORKING WITH COMPANIES AND INSTITUTIONS IN PURSUIT OF A
						BETTER FUTURE. EMBRACING AN ENIGMATIC STYLE, WE CREATE WORK THAT IS COMPLETED BY THE VIEWER AND LIVES ON IN THEIR MINDS. OUR
						PORTFOLIO ENCOMPASSES COLLABORATIONS WITH PORSCHE, LOTUS, SONY, OUTERNET LONDON, AND EXHIBITIONS IN FRANCE, GERMANY, ISTANBUL,
						AND TAIWAN.
					</AnimationWrapper>
				</div>
			</div>
		</div>
	);
}
