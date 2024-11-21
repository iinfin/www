import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';
import VideoElement from '@/components/_Atoms/VideoElement';
import type { Work } from '@/lib/cms';

interface WorkItemProps {
	work: Work;
	baseIndex: number;
}

export default function WorkItem({ work, baseIndex }: WorkItemProps): ReactElement {
	const DELAY_TITLE = 0.1;
	const DELAY_CLIENT_START = 0.2;
	const DELAY_CLIENT = 0.05;

	return (
		<div className="work col-span-6 mb-20 grid grid-cols-6">
			<div className="col-span-6 col-start-1 row-start-1 mb-5 md:col-span-4 md:col-start-3 3xl:col-span-3 3xl:col-start-4">
				<AnimationWrapper index={baseIndex}>
					{work.videoCover ? <VideoElement videoUrl={work.videoCover} confidential={work.confidential} /> : null}
				</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-3 md:col-span-3 md:col-start-3 md:row-start-2 lg:col-span-3 lg:col-start-3 3xl:col-span-3 3xl:col-start-4">
				<AnimationWrapper index={baseIndex + DELAY_TITLE}>
					<div className="font-heading-04 lg:font-heading-01">{work.title}</div>
				</AnimationWrapper>
			</div>

			<div className="col-span-6 col-start-1 row-start-4 md:col-span-1 md:col-start-3 md:row-start-3 lg:col-span-1 lg:col-start-3 3xl:col-span-3 3xl:col-start-4">
				{work.clients?.map((client, clientIndex) => (
					<AnimationWrapper key={clientIndex} index={baseIndex + DELAY_CLIENT_START + clientIndex * DELAY_CLIENT}>
						<span>
							{client}
							{clientIndex < work.clients.length - 1 ? ', ' : ''}
						</span>
					</AnimationWrapper>
				))}
			</div>
		</div>
	);
}
