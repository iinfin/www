'use client';

import type { ReactElement } from 'react';
import ReactPlayer from 'react-player';

interface ContentAboutVideoProps {
	isActive?: boolean;
}

export default function ContentAboutVideo({ isActive = false }: ContentAboutVideoProps): ReactElement {
	return (
		<div
			className={`relative h-full w-full overflow-hidden transition-opacity duration-200 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
		>
			<ReactPlayer
				url="https://vimeo.com/832904842"
				playing
				muted
				loop
				width="100%"
				height="100%"
				config={{
					vimeo: {
						playerOptions: {
							background: true,
							quality: '1080p',
							dnt: true,
						},
					},
				}}
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%) scale(2)',
				}}
			/>
		</div>
	);
}
