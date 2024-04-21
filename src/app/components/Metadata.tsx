import type { Metadata } from 'next';

const siteTitle = 'U29DC (IINFIN)';
const siteName = 'U29DC';
const siteDescription = 'An evolving entity acting as a multifaceted practice, speculating artificial aesthetics across mediums.';
const siteUrl = 'https://u29dc.com';

const MetadataTemplate: Metadata = {
	title: {
		default: `${siteTitle}`,
		template: `%s | ${siteTitle}`,
	},
	description: `${siteDescription}`,

	openGraph: {
		title: `${siteTitle}`,
		description: `${siteDescription}`,
		url: `${siteUrl}`,
		siteName: `${siteName}`,
		images: [
			{
				url: `${siteUrl}/assets/meta/cover.png`,
				alt: `${siteName}`,
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		title: `${siteTitle}`,
		card: 'summary_large_image',
		description: `${siteDescription}`,
		images: [
			{
				url: `${siteUrl}/assets/meta/cover.png`,
				alt: `${siteName}`,
			},
		],
	},

	icons: {
		shortcut: '/assets/meta/favicon.ico',
		apple: [
			{
				url: '/assets/meta/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		icon: [
			{
				url: '/assets/meta/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				url: '/assets/meta/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
		],
	},

	manifest: '/assets/meta/site.webmanifest',
	applicationName: `${siteName}`,
	appleWebApp: {
		title: `${siteTitle}`,
		statusBarStyle: 'black',
	},

	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default MetadataTemplate;
