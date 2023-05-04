import type { ReactElement } from 'react';

export default function FooterProfiles(): ReactElement {
	return (
		<>
			<span className="mb-4 w-1/2">PROFILE</span>
			<span className="font-caption-01 flex-grow text-right sm:text-left md:flex-grow-0">
				<ul>
					<li>
						<a href="http://linkedin.com/in/u29dc">linkedin</a>
					</li>
					<li>
						<a href="http://twitter.com/u29dc">twitter</a>
					</li>
					<li>
						<a href="http://instagram.com/u29dc">instagram</a>
					</li>
					<li>
						<a href="http://vimeo.com/u29dc">vimeo</a>
					</li>
				</ul>
			</span>
		</>
	);
}
