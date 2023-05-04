import type { ReactElement } from 'react';

import HeaderNavigation from './HeaderNavigation';
import HeaderSubtitle from './HeaderSubtitle';
import HeaderTitle from './HeaderTitle';
// import HeaderVersion from './HeaderVersion';

export default function MainHeader(): ReactElement {
	return (
		<div className="font-caption-01 top-0 col-span-6 grid grid-cols-6 gap-2">
			<div className="col-span-3 col-start-1 md:col-span-1 md:col-start-1">
				{/* FIXME */}
				{/* <HeaderVersion /> */}
			</div>
			<div className="col-span-3 col-start-4 md:col-span-1 md:col-start-3">
				<HeaderNavigation />
			</div>
			<div className="font-subtitle col-span-6 col-start-1 md:col-span-3 md:col-start-4">
				<HeaderTitle />
			</div>
			<div className="col-span-6 col-start-1 grid grid-cols-6 md:col-span-3 md:col-start-4 md:grid-cols-3">
				<HeaderSubtitle />
			</div>
		</div>
	);
}
