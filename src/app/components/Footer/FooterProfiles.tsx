import type { ReactElement } from 'react';

export default function FooterProfiles(): ReactElement {
	return (
		<>
			<span className="mb-4 w-1/2">PROFILES</span>
			<span className="flex-grow text-right sm:text-left md:flex-grow-0">
				<ul>
					<li>
						<a target="_blank" href="https://linkedin.com/in/u29dc">
							LINKEDIN
						</a>
					</li>
					<li>
						<a target="_blank" href="https://twitter.com/u29dc">
							TWITTER
						</a>
					</li>
					<li>
						<a target="_blank" href="https://instagram.com/u29dc">
							INSTAGRAM
						</a>
					</li>
					<li>
						<a target="_blank" href="https://vimeo.com/u29dc">
							VIMEO
						</a>
					</li>
				</ul>
			</span>
		</>
	);
}
