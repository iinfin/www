'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights as VercelSpeedInsights } from '@vercel/speed-insights/next';
import type { ReactElement } from 'react';

export default function Analytics(): ReactElement {
	return (
		<>
			<VercelAnalytics />;
			<VercelSpeedInsights />;
		</>
	);
}
