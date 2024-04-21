'use client';

import type { ReactElement } from 'react';
// import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';

interface VideoElementProps {
	videoUrl: string;
	confidential?: boolean;
}

export default function VideoElement({ videoUrl, confidential }: VideoElementProps): ReactElement {
	// const [isLoaded, setIsLoaded] = useState(false);

	// useEffect(() => {
	// 	setIsLoaded(true);
	// }, []);

	return (
		<div className="video-container relative aspect-wide-full">
			<div className="absolute left-0 top-0 z-0 h-full w-full bg-black-x1 opacity-80 dark:bg-white-x1 dark:opacity-10"></div>
			<div className="relative h-full w-full overflow-hidden">
				{/* {isLoaded ? (
					<ReactPlayer
						url={videoUrl}
						controls={true}
						loop
						muted
						playing
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
							transform: 'translate(-50%, -50%) scale(1)',
						}}
					/>
				) : (
					<></>
				)} */}
				<video
					src={videoUrl}
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%) scale(1)',
						width: '100%',
						height: '100%',
					}}
					autoPlay
					loop
					muted
					playsInline
					className="pointer-events-none h-full w-full object-cover"
				></video>
			</div>
			{confidential ? (
				<div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full">
					<div className="font-heading-04 flex h-full w-full items-center justify-center text-white-x1">CONFIDENTIAL</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
