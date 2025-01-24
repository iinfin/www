module.exports = {
	extends: [
		// base config
		'airbnb-base',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				endOfLine: 'auto',
				plugins: ['prettier-plugin-tailwindcss'],
			},
		],
	},
	overrides: [
		{
			files: ['./src/**/*.ts', './src/**/*.tsx'],
			plugins: [
				// plugins
				'@typescript-eslint',
				// 'unused-imports',
				'simple-import-sort',
			],
			extends: [
				// extends
				'airbnb-typescript',
				'next/core-web-vitals',
				'plugin:prettier/recommended',
			],
			parserOptions: {
				project: './tsconfig.json',
			},
			rules: {
				'react/destructuring-assignment': 'off',
				'react/require-default-props': 'off',
				'react-hooks/exhaustive-deps': 'off',
				'@next/next/no-img-element': 'off',
				'@typescript-eslint/comma-dangle': 'off',
				'@typescript-eslint/consistent-type-imports': 'error',
				'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
				'import/prefer-default-export': 'off',
				'import/extensions': 'off',
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-throw-literal': 'off',
				// 'unused-imports/no-unused-imports': 'error',
				// 'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			},
		},
	],
};
