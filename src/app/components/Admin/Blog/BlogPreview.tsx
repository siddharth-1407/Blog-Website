import { MDXRemote } from 'next-mdx-remote/rsc';
import components from '@/Lib/utils/BlogComponetExport';
import { useMDXComponents } from '../../../mdx-components';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeSlug from 'rehype-slug';

const BlogPreview = ({ markdown }: { markdown: string }) => {
	return (
		<div className='bg-white preview flex-1 w-full px-6 py-2 mx-auto sm:px-10sm:py-4 md:px-24 lg:px-40lg:py-8 xl:px-40 xl:max-w-7xl 2xl:max-w-none 2xl:px-52 3xl:px-64 4xl:px-72 5xl:max-w-[90%]'>
			<MDXRemote
				components={useMDXComponents(components)}
				source={markdown}
				options={{
					mdxOptions: {
						remarkPlugins: [remarkGfm],
						rehypePlugins: [
							rehypeSlug,
							[
								rehypeAutolinkHeadings,
								{
									behaviour: 'wrap',
									properties: {
										className: 'hash-link snap-start ',
									},
								},
							],
						],
					},
				}}
			/>
		</div>
	);
};

export default BlogPreview;
