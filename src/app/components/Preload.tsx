'use client';

import ReactDOM from 'react-dom';

export default function Preload() {
	ReactDOM.preload('https://u29dc.com/assets/images/noise.webp', { as: 'image' });
	ReactDOM.preconnect('https://cdn.u29dc.com/', { crossOrigin: 'anonymous' });
	ReactDOM.prefetchDNS('https://cdn.u29dc.com/');

	return null;
}
