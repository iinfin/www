import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';

type ContactProps = {
	showIndex?: boolean;
};

export default function Contact({ showIndex = true }: ContactProps): ReactElement {
	const animationIndexStart = 0;

	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-1 row-start-2 hidden lg:block">
				<AnimationWrapper index={animationIndexStart + 1}>
					<div className="bg-white-x1 dark:bg-white-x1 h-1 w-4"></div>
				</AnimationWrapper>
			</div>

			<div className="col-span-1 col-start-6 row-start-1 mb-4 h-fit justify-self-end md:mb-0 lg:block">
				<AnimationWrapper index={animationIndexStart + 1}>
					<div className="bg-white-x1 dark:bg-white-x1 h-4 w-4"></div>
				</AnimationWrapper>
			</div>

			{showIndex && (
				<div className="col-span-3 row-start-2 hidden md:col-span-1 md:col-start-1 md:block lg:col-start-3">
					<div className="w-full pr-20 text-right">
						<AnimationWrapper index={animationIndexStart + 1}>01</AnimationWrapper>
					</div>
				</div>
			)}
			<div className="col-span-3 col-start-1 row-start-2 md:col-span-3 md:col-start-3 lg:col-start-4">
				<AnimationWrapper index={animationIndexStart + 1}>↳ CONTACT</AnimationWrapper>
				<AnimationWrapper index={animationIndexStart + 2}>↳ BOOK A CALL</AnimationWrapper>
				<AnimationWrapper index={animationIndexStart + 3}>↳ FOLLOW</AnimationWrapper>
				<AnimationWrapper index={animationIndexStart + 4}>↳ CONNECT</AnimationWrapper>
			</div>

			<div className="col-span-3 col-start-4 row-start-2 text-right md:col-span-2 md:col-start-5 md:text-left">
				<AnimationWrapper index={animationIndexStart + 1}>
					<a href="mailto:han@u29dc.com">HAN@U29DC.COM</a>
				</AnimationWrapper>
				<AnimationWrapper index={animationIndexStart + 2}>
					<a href="https://cal.com/u29dc">CAL@U29DC</a>
				</AnimationWrapper>
				<AnimationWrapper index={animationIndexStart + 3}>
					<a href="https://instagram.com/u29dc">INSTAGRAM@U29DC</a>
				</AnimationWrapper>
				<AnimationWrapper index={animationIndexStart + 4}>
					<a href="https://linkedin.com/in/u29dc">LINKEDIN@U29DC</a>
				</AnimationWrapper>
			</div>
		</div>
	);
}
