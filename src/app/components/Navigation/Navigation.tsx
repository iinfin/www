import Link from 'next/link';
import type { ReactElement } from 'react';

export default function HeaderTitle(): ReactElement {
	return (
		<>
			<ul>
				<li>
					<Link href="/">/</Link>
				</li>
				<li>
					<Link href="/">INFORMATION</Link>
				</li>
				<li>
					{/* TODO */}
					<a href="https://instagram.com/u29dc">WORKS</a>
				</li>
			</ul>
		</>
	);
}
