'use client';

import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function ContentAboutVideo(): ReactElement {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<>
			{isLoaded ? (
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
			) : (
				<></>
			)}
		</>
	);
}
