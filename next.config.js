const IS_ANALYZE = process.env.ANALYZE === 'true';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: IS_ANALYZE,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '',
	reactStrictMode: true,

	experimental: {
		turbo: {},
	},

	env: {
		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
	},
};

module.exports = withBundleAnalyzer(nextConfig);
