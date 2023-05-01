const IS_ANALYZE = process.env.ANALYZE === 'true';
const IS_CLOUDFLARE = process.env.CLOUDFLARE === 'true';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: IS_ANALYZE,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '',
	reactStrictMode: true,

	experimental: {
		appDir: true,
		...(IS_CLOUDFLARE ? { runtime: 'edge' } : {}),
	},
};

module.exports = withBundleAnalyzer(nextConfig);
