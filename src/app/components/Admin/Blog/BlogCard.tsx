import Image from 'next/image';
import React from 'react';
import { getPlaiceholder } from 'plaiceholder';
import Link from 'next/link';
import { BlogPost } from '../../../../../type';

export default async function BlogCard({ data }: { data: BlogPost}) {
	const { title, imageMain, tags, date, slug } = data;
	const formattedDate = new Date(date).toDateString();
	const buffer = await fetch(imageMain).then(async (res) => {
		return Buffer.from(await res.arrayBuffer());
	});
	const { base64 } = await getPlaiceholder(buffer);
	return (
		<Link href={`/dashboard/edit-blog/${slug}`} className='w-fit h-fit'>
			<article className='max-w-[375px] w-[300px] aspect-[2.9/4] p-3 border border-white rounded-md'>
				<div className='h-full flex flex-col items-center gap-4'>
					<Image
						src={imageMain}
						width={360}
						height={360}
						alt={slug}
						className='min-w-full w-[300px] h-[300px] object-cover aspect-square rounded-md'
						placeholder='blur'
						blurDataURL={base64}
					/>
					<div className='w-full flex-1 flex flex-col justify-between text-white'>
						<h2 className='text-base font-medium line-clamp-2'>{title}</h2>
						<span className='self-end text-sm font-light'>{formattedDate}</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
