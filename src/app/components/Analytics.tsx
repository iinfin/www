'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import type { ReactElement } from 'react';

export default function Analytics(): ReactElement {
	return <VercelAnalytics />;
}
