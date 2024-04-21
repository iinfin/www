import type { ReactElement } from 'react';

import VideoElement from '@/components/_Atoms/VideoElement';
import type { Work } from '@/lib/cms';
import { getAllWorks } from '@/lib/cms';

export default async function Works(): Promise<ReactElement> {
	let works: Work[] = [];
	try {
		works = await getAllWorks();
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error fetching works:', error);
		works = [];
	}

	// console.log(works.length, works);

	return (
		<div className="mb-100 col-span-6 grid grid-cols-6 gap-2 md:mb-40">
			<>
				{works.length > 0 ? (
					works.map((work: Work) => (
						<div key={work.id} className="work col-span-6 mb-20 grid grid-cols-6">
							<div className="col-span-6 col-start-1 row-start-1 mb-5 md:col-span-4 md:col-start-3 lg:col-span-3 lg:col-start-4">
								{work.videoCover ? <VideoElement videoUrl={work.videoCover} confidential={work.confidential} /> : <></>}
							</div>
							<div className="col-span-6 row-start-2 md:col-span-1 md:col-start-1 md:row-start-3 lg:col-span-1 lg:col-start-3">
								{work.roles ? (
									work.roles.map((role, index) => (
										<span key={role}>
											{role}
											{index < work.roles.length - 1 ? ', ' : ''}
										</span>
									))
								) : (
									<></>
								)}
							</div>
							<div className="col-span-6 row-start-4 md:col-span-1 md:col-start-3 md:row-start-3 lg:col-span-1 lg:col-start-4">
								{work.clients ? (
									work.clients.map((client, index) => (
										<span key={client}>
											{client}
											{index < work.clients.length - 1 ? ', ' : ''}
										</span>
									))
								) : (
									<></>
								)}
							</div>
							<div className="col-span-6 row-start-3 md:col-span-3 md:col-start-3 md:row-start-2 lg:col-span-3 lg:col-start-4">
								<div className="font-heading-04 lg:font-heading-01">{work.title}</div>
							</div>
						</div>
					))
				) : (
					<></>
				)}
			</>
		</div>
	);
}
