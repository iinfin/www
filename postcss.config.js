const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: {
		'@tailwindcss/postcss': {},
		'autoprefixer': {},
		...(IS_PRODUCTION ? { cssnano: {} } : {}),
	},
};
