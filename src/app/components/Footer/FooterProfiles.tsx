import type { ReactElement } from 'react';

export default function FooterProfiles(): ReactElement {
	return (
		<>
			<span className="mb-4 w-1/2">PROFILES</span>
			<span className="font-caption-01 flex-grow text-right sm:text-left md:flex-grow-0">
				<ul>
					<li>
						<a target="_blank" href="http://linkedin.com/in/u29dc">
							LINKEDIN
						</a>
					</li>
					<li>
						<a target="_blank" href="http://twitter.com/u29dc">
							TWITTER
						</a>
					</li>
					<li>
						<a target="_blank" href="http://instagram.com/u29dc">
							INSTAGRAM
						</a>
					</li>
					<li>
						<a target="_blank" href="http://vimeo.com/u29dc">
							VIMEO
						</a>
					</li>
				</ul>
			</span>
		</>
	);
}
