import React from 'react';
import { BlogPostCard } from '../../../../../../type';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogHeroCard({ data }: { data: BlogPostCard }) {
	console.log(data);
	const date = new Date(data.date);
	return (
		<Link href={`/blogs/${data?.slug}`}>
			<div className='relative w-full aspect-square sm:aspect-[4/1.8] after:absolute after:-z-10 after:bottom-0 after:left-0 after:contents-none after:w-full after:h-[80%] after:bg-gradient-to-t after:from-black after:to-transparent'>
				<Image src={data.imageMain} alt='' fill className='object-cover -z-10' sizes='(max-width:625px) 100vw, 80vw ' />
				<div className='w-full h-full flex flex-col justify-end gap-2 lg:gap-4  p-7'>
					<span className='uppercase text-sm text-ThemePrimary tracking-widest font-bold'>Latest</span>
					<div className='flex justify-between items-end'>
						<h1 className='text-white text-xl md:text-[min(3vw,3rem)] md:leading-tight lg:text-[min(2.5vw,3rem)] font-extrabold sm:max-w-[60%] line-clamp-2'>
							{data.title}
						</h1>
						<span className='hidden md:block text-white text-sm xl:text-base font-medium 3xl:font-semibold'>{date.toDateString()}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
