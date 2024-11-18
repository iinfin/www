import type { ReactElement } from 'react';

import AnimationWrapper from '@/components/_Atoms/AnimationWrapper';

type ListItemString = string;
type ListItemLink = { [key: string]: string };
export type ListItem = ListItemString | ListItemLink;

const isListItemString = (item: ListItem): item is ListItemString => typeof item === 'string';

const getListItemClass = (index: number, itemsList: ListItem[] = []) => {
	const prevItem = itemsList[index - 1];
	if (prevItem && isListItemString(prevItem) && prevItem === '') {
		return 'mt-4';
	}
	return '';
};

const renderListItem = (item: ListItem): ReactElement => {
	if (isListItemString(item)) {
		return <>{item || <br />}</>;
	}

	const key = Object.keys(item)[0];
	const content = (item as ListItemLink)[key ?? ''];
	return key ? (
		<a target="_blank" rel="noopener noreferrer" href={content}>
			{key}
		</a>
	) : (
		<></>
	);
};

export const renderList = (items: ListItem[] = [], baseIndex = 0): ReactElement => {
	const DELAY_INCREMENT = 1;

	return (
		<ul>
			{items.map((item, index) => (
				<AnimationWrapper key={index} index={baseIndex + index * DELAY_INCREMENT}>
					<li className={getListItemClass(index, items)}>{renderListItem(item)}</li>
				</AnimationWrapper>
			))}
		</ul>
	);
};
