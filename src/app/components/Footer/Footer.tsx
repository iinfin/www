import type { ReactElement } from 'react';

import FooterContact from './FooterContact';
import FooterProfiles from './FooterProfiles';

export default function MainFooter(): ReactElement {
	return (
		<div className="bottom-0 col-span-6 mt-20 grid grid-cols-6 items-end gap-2">
			<div className="col-span-6 col-start-1 row-start-3 h-full w-full justify-end md:col-span-1 md:col-start-6 md:row-start-1 ">
				<img src="/assets/images/barcode.png" alt="" className="float-right h-full w-full dark:invert sm:h-1/2 md:w-1/2" />
			</div>
			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-4 md:flex-col">
				<FooterProfiles />
			</div>
			<div className="col-span-6 col-start-1 flex h-full flex-row justify-between md:col-span-1 md:col-start-5 md:flex-row">
				<FooterContact />
			</div>
		</div>
	);
}
