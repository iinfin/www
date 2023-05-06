import Link from 'next/link';
import type { ReactElement } from 'react';

export default function HeaderTitle(): ReactElement {
	return (
		<>
			<ul>
				<li>
					<Link href="/">—</Link>
				</li>
				<li>
					<a href="https://linkedin.com/in/u29dc">INFORMATION</a>
				</li>
				<li>
					<a href="https://instagram.com/u29dc">WORKS</a>
				</li>
			</ul>
		</>
	);
}
