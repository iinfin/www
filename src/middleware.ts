import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function generateCsp() {
	// const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
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
		{ name: 'style-src', values: ["'report-sample'", "'self'", "'unsafe-inline'"] },
		{ name: 'script-src', values: ["'report-sample'", "'self'", "'unsafe-inline'"] },
	];

	const cspHeader = cspObj
		.map((directive) => {
			return `${directive.name} ${directive.values.join(' ')}`;
		})
		.join('; ')
		.concat('; upgrade-insecure-requests')
		.replace(/\s{2,}/g, ' ')
		.trim();

	return { cspHeader };
}

export function middleware(_req: NextRequest, _fetch: NextFetchEvent) {
	const { cspHeader } = generateCsp();

	const mwRequestHeaders = new Headers(_req.headers);
	mwRequestHeaders.set('content-security-policy', cspHeader);
	// mwRequestHeaders.set('x-nonce', nonce);

	const mwResponse = NextResponse.next({ request: { headers: mwRequestHeaders } });
	mwResponse.headers.set('content-security-policy', cspHeader);

	return mwResponse;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
