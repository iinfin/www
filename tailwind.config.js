/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'PPNeueMontreal',
					...[
						'-apple-system',
						'BlinkMacSystemFont',
						'Inter var',
						'Inter',
						'Segoe UI',
						'Helvetica Neue',
						'Helvetica',
						'Arial',
						'Roboto',
						'Ubuntu',
						'sans-serif',
					],
				],
				mono: [
					'PPSupplyMono',
					...[
						'SFMono-Regular',
						'Jetbrains Mono',
						'Menlo',
						'Monaco',
						'Consolas',
						'Liberation Mono',
						'Courier New',
						'Lucida Console',
						'monospace',
					],
				],
			},
			fontSize: {
				'root': '10px',
				'display-title': '15rem',
				'display-subtitle': '5rem',
				'heading-01': '7.5rem',
				'heading-02': '4rem',
				'heading-03': '2.5rem',
				'heading-04': '1.8rem',
				'body': '1.2rem',
				'caption-01': '1.1rem',
				'caption-02': '1rem',
			},
			lineHeight: {
				normal: 1.1,
				tight: 1,
			},
			fontWeight: {
				medium: 500,
			},
			letterSpacing: {
				normal: '-0.02em',
				tight: '-0.1em',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: {
					x1: '#000000',
					x2: '#121212',
				},
				white: {
					x1: '#ffffff',
					x2: '#fafafa',
				},
			},
			aspectRatio: {
				'wide-full': '4/1',
				'wide-half': '2/1',
				'square': '1/1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
