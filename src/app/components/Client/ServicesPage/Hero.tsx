'use client';
import Image from 'next/image';
import React from 'react';
import { allServices } from '@/Lib/Services/services';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicesList = {
	initial: {
		y: '1rem',
		opacity: 0,
	},
	fadeIn: (i: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.8 + i * 0.15,
			ease: 'linear',
		},
	}),
};

const Hero = () => {
	return (
		<section className='min-h-fit py-8 md:pb-20 flex md:mx-auto px-4 md:px-16 5xl:px-44 3xl:min-h-[80vh] 5xl:my-auto 3xl:pb-44'>
			<div className='flex flex-col lg:flex-row gap-4 lg:gap-0 mx-auto'>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }} className='flex lg:w-[55%] items-center'>
					<p className='w-full flex flex-wrap font-extrabold text-[8vh] lg:text-[15vh] 5xl:text-[10em]'>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>S</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>E</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>R</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>V</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>I</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>C</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>E</span>
						<span className='w-1/4 h-1/4 aspect-square flex justify-center lg:justify-start items-center '>S</span>
					</p>
				</motion.div>
				<div className='flex flex-col gap-16 lg:w-[45%] justify-center '>
					<motion.div initial={{ opacity: 0, y: '1.5rem' }} animate={{ opacity: 1, y: 0, transition: { ease: 'linear', delay: 0.5 } }}>
						<p className='max-w-3xl lg:max-w-none 3xl:max-w-[45rem] text-center text-base font-semibold text-black leading-relaxed sm:text-xl lg:text-xl xl:text-2xl 5xl:text-[1.6rem] lg:text-start lg:leading-relaxed 3xl:leading-relaxed'>
							Crafting <strong className='text-ThemePrimary'>standout websites and branding</strong> using sound strategic thinking and
							eye-catching digital, that creates instant impact and sparks emotion. To really see what we can do, take a look at our
							full range of digital creative agency services.
						</p>
					</motion.div>
					{/* List start */}
					<div className='hidden lg:flex'>
						<ul className=' flex flex-wrap gap-y-5 lg:text-lg xl:text-xl 3xl:text-2xl font-bold text-ThemeSecondary'>
							{allServices.map((service, i) => {
								const link = service.link.slice(1);
								return (
									<motion.li
										key={service.id}
										variants={servicesList}
										initial={'initial'}
										animate={'fadeIn'}
										custom={i + 1}
										className='w-1/2 opacity-0'>
										<Link href={`#${link}`} className=' flex gap-4 items-center'>
											<svg width='7.32' height='12.2' viewBox='0 0 7.32 12.2'>
												<g id='Group_596' data-name='Group 596' transform='translate(-121.109 -960.958) rotate(45)'>
													<rect
														id='Rectangle_1019'
														data-name='Rectangle 1019'
														width='8.627'
														height='1.725'
														transform='translate(766 593)'
														fill='#f74ea1'></rect>
													<rect
														id='Rectangle_1020'
														data-name='Rectangle 1020'
														width='8.627'
														height='1.725'
														transform='translate(772.901 601.627) rotate(-90)'
														fill='#f74ea1'></rect>
												</g>
											</svg>
											{service.title}
										</Link>
									</motion.li>
								);
							})}
						</ul>
					</div>
					{/* List end */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
