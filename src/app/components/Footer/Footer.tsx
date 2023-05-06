import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/Animation/AnimationWrapper';

import FooterContact from './FooterContact';
import FooterProfiles from './FooterProfiles';

export default function MainFooter(): ReactElement {
	return (
		<div className="bottom-0 col-span-6 mt-4 grid grid-cols-6 items-end gap-2">
			<AnimationWrapper>
				<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-4 md:flex-col">
					<FooterProfiles />
				</div>
				<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-5 md:flex-col">
					<FooterContact />
				</div>
			</AnimationWrapper>
		</div>
	);
}
