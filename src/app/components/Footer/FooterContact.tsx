import type { ReactElement } from 'react';

export default function FooterContact(): ReactElement {
	return (
		<>
			<span className="mb-4 w-1/2">CONTACT →</span>
			<span className="flex-grow text-right sm:text-left md:flex-grow-0">
				<a href="mailto:han@iinf.in">han@iinf.in</a>
			</span>
		</>
	);
}
