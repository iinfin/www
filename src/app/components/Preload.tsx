'use client';

import ReactDOM from 'react-dom';

export default function Preload() {
	ReactDOM.prefetchDNS('https://cdn.u29dc.com/');
	ReactDOM.preconnect('https://cdn.u29dc.com/', { crossOrigin: 'anonymous' });
	ReactDOM.preload('https://cdn.u29dc.com/_noise.webp', { as: 'image' });
	ReactDOM.preload('/assets/images/_noise.webp', { as: 'image' });
	ReactDOM.preload('/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.woff2', { as: 'font', type: 'font/woff2' });
	ReactDOM.preload('/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.woff', { as: 'font', type: 'font/woff' });
	ReactDOM.preload('/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.otf', { as: 'font', type: 'font/otf' });

	return <></>;
}
