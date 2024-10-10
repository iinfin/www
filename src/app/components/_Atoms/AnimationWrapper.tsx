'use client';

import { motion } from 'framer-motion';
import type { ReactElement, ReactNode } from 'react';

interface AnimatedWrapperProps {
	children: ReactNode;
	index?: number;
	baseDelay?: number;
	duration?: number;
	offsetY?: number;
}

export default function AnimatedWrapper({
	// parameters
	children,
	index = 0,
	baseDelay = 0.2,
	offsetY = -5,
	duration = 0.5,
}: AnimatedWrapperProps): ReactElement {
	const delay = index * baseDelay;

	return (
		<motion.div initial={{ opacity: 0, y: offsetY }} animate={{ opacity: 1, y: 0 }} transition={{ duration, delay }}>
			{children}
		</motion.div>
	);
}
