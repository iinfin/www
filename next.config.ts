import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const IS_ANALYZE = process.env.ANALYZE === 'true';

const nextConfig: NextConfig = {
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

export default withBundleAnalyzer({ enabled: IS_ANALYZE })(nextConfig);
