import createMDX from '@next/mdx';
import withPlaiceholder from '@plaiceholder/next';

const withMDX = createMDX({
	options: {
		extension: /\.mdx?$/,
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
			},
		],
	},
	experimental: {
		mdxRs: true,
	},
};

export default withPlaiceholder(withMDX(nextConfig));
