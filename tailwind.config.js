/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			'default-sans': [
				'-apple-system',
				'blinkmacsystemfont',
				'Inter var',
				'Inter',
				'Segoe UI',
				'Helvetica Neue',
				'helvetica',
				'arial',
				'ubuntu',
				'sans-serif',
			],
			'default-mono': [
				'SFMono-Regular',
				'Jetbrains Mono',
				'menlo',
				'monaco',
				'consolas',
				'Liberation Mono',
				'Courier New',
				'Lucida Console',
				'monospace',
			],
			'x1': ['PPNeueMontreal', 'ui-sans-serif', 'system-ui'],
			'x2': ['PPSupplyMono', 'ui-monospace'],
		},
		extend: {
			fontSize: {
				root: '10px',
				base: '1.2rem',
			},
			lineHeight: {
				tight: 1,
			},
			fontWeight: {
				normal: 400,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
