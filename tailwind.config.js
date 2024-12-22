/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
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
				'display-title': '16rem',
				'display-subtitle': '4.8rem',
				'heading-01': '7.6rem',
				'heading-02': '4rem',
				'heading-03': '2.4rem',
				'heading-04': '1.8rem',
				'body': '1.2rem',
				'caption-01': '1rem',
				'caption-02': '0.9rem',
			},
			fontWeight: {
				default: 500,
			},
			letterSpacing: {
				default: '0',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: {
					x1: '#000000',
					x2: '#080808',
				},
				white: {
					x1: '#ffffff',
					x2: '#fafafa',
					x3: '#f5f5f5',
				},
			},
			aspectRatio: {
				'wide-full': '4/1',
				'wide-half': '2/1',
				'square': '1/1',
			},
			screens: {
				'3xl': '2160px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
