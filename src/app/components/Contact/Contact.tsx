import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';

// import type { ListItem } from '@/utils/List';
// import { renderList } from '@/utils/List';

// const listProfiles: ListItem[] = [
// 	{ "LET'S CHAT ↗": 'https://u29dc.co/cal' },
// 	'',
// 	{ 'INSTAGRAM @u29dc': 'https://u29dc.co/instagram' },
// 	{ 'LINKEDIN @u29dc': 'https://u29dc.co/linkedin' },
// ];

export default function Contact(): ReactElement {
	return (
		<div className="col-span-6 mb-10 grid grid-cols-6 gap-2">
			<div className="col-span-1 col-start-6 row-start-1 h-fit justify-self-end lg:block">
				<div className="h-4 w-4 bg-white-x1 dark:bg-white-x1"></div>
			</div>
			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-4 md:flex-col">
				<span className="flex-grow text-right sm:text-left md:flex-grow-0">
					{/* {renderList(listProfiles)} */}
					<AnimationWrapper index={1}>
						<a href="https://u29dc.co/cal">BOOK A CALL ↗</a>
					</AnimationWrapper>
				</span>
			</div>

			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-5 md:flex-row">
				<span className="w-1/2">
					<AnimationWrapper index={2}>EMAIL →</AnimationWrapper>
				</span>
				<span className="flex-grow text-right sm:text-left md:flex-grow-0">
					<a href="mailto:han@u29dc.com">
						<AnimationWrapper index={5}>han@u29dc.com</AnimationWrapper>
					</a>
				</span>
			</div>

			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-5 md:flex-row">
				<span className="w-1/2">
					<AnimationWrapper index={3}>INSTAGRAM →</AnimationWrapper>
				</span>
				<span className="flex-grow text-right sm:text-left md:flex-grow-0">
					<AnimationWrapper index={6}>
						<a href="https://instagram.com/u29dc">@u29dc</a>
					</AnimationWrapper>
				</span>
			</div>

			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-5 md:flex-row">
				<span className="w-1/2">
					<AnimationWrapper index={4}>LINKEDIN →</AnimationWrapper>
				</span>
				<span className="flex-grow text-right sm:text-left md:flex-grow-0">
					<AnimationWrapper index={7}>
						<a href="https://linkedin.com/in/u29dc">@u29dc</a>
					</AnimationWrapper>
				</span>
			</div>
		</div>
	);
}
