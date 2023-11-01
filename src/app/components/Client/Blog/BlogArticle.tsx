import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/app/mdx-components.js';
import components from '@/Lib/utils/BlogComponetExport';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { BlogPost } from '../../../../../type';

export default function BlogArticle({ blog }: { blog: BlogPost }) {
	return (
		<article>
			<MDXRemote
				components={useMDXComponents(components)}
				source={blog.markdown}
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
										className: 'hash-link snap-start focus-visible:outline-none',
									},
								},
							],
						],
					},
				}}
			/>
		</article>
	);
}
