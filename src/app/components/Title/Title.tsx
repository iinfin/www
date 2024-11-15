import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';

export default function Title(): ReactElement {
	const animationIndexStart = 11;

	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-3 col-start-4 row-start-1 text-right sm:text-left md:col-span-1 md:col-start-1"></div>
			<div className="col-span-3 col-start-1 row-start-1 md:col-span-1 md:col-start-3">
				<AnimationWrapper index={animationIndexStart + 1}>
					— AN INCOMPLETE
					<br />
					INFINITY
				</AnimationWrapper>
			</div>
			<div className="col-span-6 col-start-1 md:col-span-3 md:col-start-4">
				<AnimationWrapper index={animationIndexStart + 2}>
					<p className="font-subtitle">U29DC</p>
					<p>(IINFIN) / INOMPLETE INFINITY</p>
				</AnimationWrapper>
			</div>
			<div className="col-span-6 col-start-1 grid grid-cols-6 md:col-start-3 md:grid-cols-3 lg:col-span-3 lg:col-start-3">
				<div className="col-span-6 row-start-2 mt-4 sm:col-span-4 md:col-span-3 lg:col-span-1 lg:col-start-2">
					<AnimationWrapper index={animationIndexStart + 3}>
						U29DC IS AN EVOLVING, MULTIFACETED CREATIVE PRACTICE. GUIDED BY PHILOSOPHY AND ENABLED BY TECHNOLOGY, WE CRAFT AESTHETIC
						EXPERIENCES WITH COMPANIES AND INSTITUTIONS OF A BETTER FUTURE. EMBRACING AN ENIGMATIC STYLE, WE REFLECT ON ART AS AN
						INCOMPLETE JOURNEY - IN SEARCH OF A TIMELESS BEAUTY.
					</AnimationWrapper>
				</div>
			</div>
		</div>
	);
}
