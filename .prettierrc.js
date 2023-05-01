module.exports = {
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	printWidth: 150,
	quoteProps: 'consistent',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: '*.{yml,yaml}',
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
	plugins: [
		// plugins
		'prettier-plugin-css-order',
		'prettier-plugin-tailwindcss',
	],
	tailwindConfig: './tailwind.config.js',
};
