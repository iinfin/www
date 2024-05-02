'use client';

import ReactDOM from 'react-dom';

export default function Preload() {
	ReactDOM.preload('/assets/images/noise.webp', { as: 'image' });
	ReactDOM.preload('/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.woff2', { as: 'font', type: 'font/woff2' });
	ReactDOM.preload('/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.woff', { as: 'font', type: 'font/woff' });
	ReactDOM.preload('/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.otf', { as: 'font', type: 'font/otf' });
	ReactDOM.preconnect('https://cdn.u29dc.com/', { crossOrigin: 'anonymous' });
	ReactDOM.prefetchDNS('https://cdn.u29dc.com/');

	return null;
}
