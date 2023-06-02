import type { ReactElement } from 'react';

import HeaderNavigation from './HeaderNavigation';
import HeaderSubtitle from './HeaderSubtitle';
import HeaderTitle from './HeaderTitle';

export default function MainHeader(): ReactElement {
	return (
		<div className="top-0 col-span-6 mb-20 grid grid-cols-6 gap-2">
			<div className="col-span-3 col-start-4 row-start-1 text-right sm:text-left md:col-span-1 md:col-start-1">
				<a target="_blank" href="https://github.com/u29dc/www">
					/src
				</a>
			</div>
			<div className="col-span-3 col-start-1 row-start-1 md:col-span-1 md:col-start-3">
				<HeaderNavigation />
			</div>
			<div className="font-subtitle col-span-6 col-start-1 md:col-span-3 md:col-start-4">
				<HeaderTitle />
			</div>
			<div className="col-span-6 col-start-1 grid grid-cols-6 md:col-start-3 md:grid-cols-3 lg:col-span-3 lg:col-start-3">
				<HeaderSubtitle />
			</div>
		</div>
	);
}
