import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(_req: NextRequest, _next: NextFetchEvent) {
	const mwRequestHeaders = new Headers(_req.headers);
	const mwResponse = NextResponse.next({ request: { headers: mwRequestHeaders } });

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
