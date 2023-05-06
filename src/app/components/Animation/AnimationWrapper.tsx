'use client';

import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import React, { isValidElement } from 'react';

const itemVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

interface AnimationWrapperProps {
	children: React.ReactNode;
	stagger?: number;
	isReverse?: boolean;
}

const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

const isVoidElement = (element: React.ReactElement): boolean => {
	return voidElements.has(element.type as string);
};

const wrapChildrenWithMotion = (children: React.ReactNode, stagger: number, isReverse: boolean) => {
	const childArray = React.Children.toArray(children);
	const childCount = childArray.length;

	return childArray.map((child, index) => {
		if (isValidElement(child) && !isVoidElement(child)) {
			const effectiveIndex = isReverse ? childCount - index - 1 : index;
			const MotionElement = (typeof child.type === 'string' && motion[child.type as keyof typeof motion]) || motion.div;

			const wrappedChildren = wrapChildrenWithMotion(child.props.children, stagger, isReverse);

			return (
				<MotionElement
					{...child.props}
					key={index}
					initial="hidden"
					animate="visible"
					exit="hidden"
					custom={effectiveIndex}
					variants={itemVariants}
					transition={{ delay: effectiveIndex * stagger, duration: 0.5 }}
				>
					{wrappedChildren}
				</MotionElement>
			);
		}
		return child;
	});
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, stagger = 0.05, isReverse = false }) => {
	const wrappedChildren = wrapChildrenWithMotion(children, stagger, isReverse);

	return <AnimatePresence>{wrappedChildren}</AnimatePresence>;
};

export default AnimationWrapper;
