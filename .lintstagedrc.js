module.exports = {
	'*.{js,jsx,ts,tsx,css,scss,less,json,md}': ['prettier --write'],
	'*.{js,jsx,ts,tsx}': ['eslint --fix'],
	'*.{css,scss,less}': ['stylelint --fix'],
};
