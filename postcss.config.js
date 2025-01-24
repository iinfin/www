const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		'tailwindcss': {},
		'autoprefixer': {},
		...(IS_PRODUCTION ? { cssnano: {} } : {}),
	},
};
