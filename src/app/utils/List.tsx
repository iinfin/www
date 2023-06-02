import type { ReactElement } from 'react';

export type ListItem = string | { [key: string]: string };

const getListItemClass = (item: ListItem, index: number, itemsList: ListItem[] = []) => {
	if (typeof item === 'string' && item === '') {
		return 'hidden';
	}
	if (index > 0 && typeof itemsList[index - 1] === 'string' && itemsList[index - 1] === '') {
		return 'mt-4';
	}
	return '';
};

const renderListItem = (item: ListItem): ReactElement => {
	if (typeof item === 'string') {
		return <>{item || <br />}</>;
	}
	const key = Object.keys(item)[0];
	const content = item[key ?? ''];
	return (
		<a target="_blank" href={content}>
			{key}
		</a>
	);
};

export const renderList = (items: ListItem[]): ReactElement => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index} className={getListItemClass(item, index, items)}>
					{renderListItem(item)}
				</li>
			))}
		</ul>
	);
};
