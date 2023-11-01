'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Project } from '../../../../../type';

type Props = {
	article: Project;
	dark?: boolean;
};
// type Props = {
// 	article: {
// 		title: string;
// 		description: string;
// 		image: string | StaticImport;
// 		imageBig: string | StaticImport;
// 		tags: string[];
// 		link: string;
// 	};
// 	dark?: boolean;
// };

const ProjectCard = ({ article, dark = false }: Props) => {
	const slide = {
		initial: {
			scaleY: '100%',
		},
		start: {
			scaleY: 0,
			transition: {
				ease: easeOut,
				duration: 0.8,
			},
		},
	};
	return (
		<article className=' w-full sm:w-fit self-center odd:ml-auto '>
			<Link href={`/work${article.link}`} className='group flex flex-col gap-5 pb-2 focus-visible:outline-none'>
				<div className='relative aspect-[1.14840989399] after:absolute after:inset-0 after:top-0 after:left-0 after:z-10 after:bg-transparent after:transition-colors hover:after:bg-ThemePrimary/50 group-focus-visible:after:bg-ThemePrimary/50'>
					<motion.div
						variants={slide}
						whileInView={'start'}
						viewport={{ once: true }}
						className={` absolute inset-0 origin-top z-20 ${dark ? 'bg-[#242424]' : 'bg-white'}`}></motion.div>
					<Image src={article.card_Image} placeholder='blur' width={750} height={750} sizes='' alt='image' />
				</div>
				{article?.tags?.length > 0 && (
					<div className='pr-4 flex flex-wrap gap-y-1 gap-x-4 sm:gap-x-3'>
						{article.tags.slice(0, 5).map((tag, i) => {
							return (
								<span
									key={i}
									className='text-ThemePrimary tracking-wide uppercase font-semibold sm:font-bold whitespace-nowrap text-[0.78rem] sm:text-[0.8rem] lg:text-[0.83rem] 3xl:text-base'>
									{tag}
								</span>
							);
						})}
					</div>
				)}
				<div className={`flex flex-col gap-2 3xl:gap-4 ${dark ? 'text-white' : 'text-ThemeSecondary 3xl:font-medium'}`}>
					<h5 className='group-hover:text-ThemePrimary group-focus-visible:text-ThemePrimary transition-colors font-extrabold text-3xl lg:text-4xl 3xl:text-5xl 5xl:text-[3.5rem]'>
						{article.title}
					</h5>
					<p className=' leading-relaxed text-[0.9rem] lg:text-[0.95rem] 3xl:text-base 5xl:text-lg'>{article.description}</p>
				</div>
			</Link>
		</article>
	);
};

export default ProjectCard;
