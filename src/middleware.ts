import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function generateCsp() {
	const nonce = crypto.randomUUID().replaceAll('-', '');

	const cspObj = [
		{ name: 'base-uri', values: ["'self'"] },
		{ name: 'connect-src', values: ["'self'", '*.vercel-insights.com', 'player.vimeo.com', 'vimeo.com'] },
		{ name: 'default-src', values: ["'self'"] },
		{ name: 'font-src', values: ["'self'"] },
		{ name: 'form-action', values: ["'self'"] },
		{ name: 'frame-ancestors', values: ["'none'"] },
		{ name: 'frame-src', values: ["'self'", 'player.vimeo.com'] },
		{ name: 'img-src', values: ["'self'", 'data:', 'i.vimeocdn.com'] },
		{ name: 'manifest-src', values: ["'self'"] },
		{ name: 'media-src', values: ["'self'", 'i.vimeocdn.com', 'f.vimeocdn.com'] },
		{ name: 'object-src', values: ["'none'"] },
		{
			name: 'script-src',
			values: [
				"'report-sample'",
				"'self'",
				"'unsafe-inline'",
				`'nonce-${nonce}'`,
				/* "'strict-dynamic'", */
				'cdn.jsdelivr.net',
				'player.vimeo.com',
			],
		},
		{
			name: 'style-src',
			values: ["'report-sample'", "'self'", "'unsafe-inline'", `'nonce-${nonce}'`, 'cdn.jsdelivr.net'],
		},
	];

	const csp = cspObj
		.map((directive) => {
			return `${directive.name} ${directive.values.join(' ')}`;
		})
		.join('; ');

	return { csp, nonce };
}

export async function middleware(_req: NextRequest, _fetch: NextFetchEvent) {
	const { csp, nonce } = generateCsp();

	const mwRequestHeaders = new Headers(_req.headers);
	mwRequestHeaders.set('x-nonce', nonce);
	mwRequestHeaders.set('content-security-policy', csp);

	const mwResponse = NextResponse.next({ request: { headers: mwRequestHeaders } });
	mwResponse.headers.set('content-security-policy', csp);

	const forwardedFor = _req.headers.get('x-forwarded-for');
	const ip: string = (_req.ip && _req.headers.get('x-real-ip')) || (forwardedFor ? forwardedFor.split(',').at(0) : null) || 'unknown';
	const city: string = _req.geo?.city || 'unknown';
	const country: string = _req.geo?.country || 'unknown';
	const lat: string = _req.geo?.latitude || 'unknown';
	const lon: string = _req.geo?.longitude || 'unknown';

	const data = { ip, city, country, lat, lon };

	mwResponse.cookies.set('x-data', JSON.stringify(data), {
		httpOnly: false,
		maxAge: 60 * 60 * 24 * 7, // 1 week
	});

	return mwResponse;
}
