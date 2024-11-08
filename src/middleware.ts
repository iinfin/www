import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function generateCsp() {
	const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
	const cspObj = [
		{ name: 'base-uri', values: ["'self'"] },
		{ name: 'connect-src', values: ["'self'", '*.vercel-insights.com'] },
		{ name: 'default-src', values: ["'self'"] },
		{ name: 'object-src', values: ["'none'"] },
		{ name: 'font-src', values: ["'self'"] },
		{ name: 'form-action', values: ["'self'"] },
		{ name: 'frame-ancestors', values: ["'none'"] },
		{ name: 'frame-src', values: ["'self'"] },
		{ name: 'img-src', values: ["'self'", 'data:', 'cdn.u29dc.com'] },
		{ name: 'manifest-src', values: ["'self'"] },
		{ name: 'media-src', values: ["'self'", 'cdn.u29dc.com'] },
		{ name: 'style-src', values: ["'report-sample'", "'self'", "'unsafe-inline'", `'nonce-${nonce}'`] },
		{ name: 'script-src', values: ["'report-sample'", "'self'", "'unsafe-inline'", `'nonce-${nonce}'`, "'strict-dynamic'", 'http:', 'https:'] },
	];

	const cspHeader = cspObj
		.map((directive) => `${directive.name} ${directive.values.join(' ')}`)
		.join('; ')
		.concat('; upgrade-insecure-requests')
		.trim();

	return { cspHeader, nonce };
}

export function middleware(_req: NextRequest, _fetch: NextFetchEvent) {
	const { cspHeader, nonce } = generateCsp();

	const mwRequestHeaders = new Headers(_req.headers);
	mwRequestHeaders.set('content-security-policy', cspHeader);
	mwRequestHeaders.set('x-nonce', nonce);

	const mwResponse = NextResponse.next({ request: { headers: mwRequestHeaders } });
	const path = _req.nextUrl.pathname;

	// Apply Content Security Policy header
	mwResponse.headers.set('content-security-policy', cspHeader);

	// Apply headers conditionally based on path
	if (!path.startsWith('/api')) {
		mwResponse.headers.set('x-xss-protection', '1; mode=block');
		mwResponse.headers.set('x-frame-options', 'deny');
		mwResponse.headers.set('permissions-policy', 'fullscreen=(self)');
	}

	// Apply global headers
	mwResponse.headers.set('strict-transport-security', 'max-age=31557600; includeSubDomains; preload');
	mwResponse.headers.set('x-content-type-options', 'nosniff');
	mwResponse.headers.set('referrer-policy', 'same-origin');
	mwResponse.headers.set('vary', 'Accept-Encoding');

	return mwResponse;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for:
		 * - API routes: (/api)
		 * - Static assets: (_next/static, _next/image)
		 * - Favicons: (favicon.ico)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
