import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../../../../../type';

type Props = {
	data: BlogPost;
};

const BlogCard = ({ data }: Props) => {
	const keywords: string[] | false = data.keywords ? data.keywords?.slice(0, 3) : false;
	return (
		<article className='group/blog flex '>
			<Link href={`/blogs/${data.slug}`} className='w-full h-full'>
				<div className='w-full h-full flex flex-col justify-between border border-black'>
					<div className='w-full aspect-[1.76153846154] flex flex-col gap-4 overflow-hidden relative before:absolute before:w-full before:h-full before:contents-none before:z-[1] '>
						<Image
							src={data.imageMain}
							width={360}
							height={360}
							alt='article image'
							className='w-full h-full object-cover group-hover/blog:scale-110 group-focus-within/blog:scale-110 transition-transform duration-500'
						/>
					</div>
					<div className='flex flex-col flex-1 justify-between gap-4 p-3 md:p-4 5xl:gap-2 5xl:p-8 group-hover/blog:bg-ThemePrimary transition-colors'>
						<div className='flex gap-3 flex-wrap'>
							{keywords &&
								keywords.map((keyword, i) => {
									return (
										<span
											key={i}
											className='text-xs  lg:text-sm text-ThemePrimary group-hover/blog:text-ThemeSecondary transition-colors leading-[0.5] lg:leading-[0.8] 3xl:leading-[0.9] font-semibold uppercase '>
											{keyword}
										</span>
									);
								})}
						</div>
						<h6 className='text-lg md:text-2xl xl:text-3xl 2xl:text-3xl font-bold line-clamp-2 leading-[1.3] md:leading-[1.3] group-hover/blog:text-white transition-colors'>
							{data.title}
						</h6>
					</div>
				</div>
			</Link>
		</article>
	);
};
// aspect-[1.76153846154]
// gap-4 md:gap-4 5xl:gap-8 p-2 md:p-4 5xl:p-8
export default BlogCard;
