'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WorkHero = () => {
	return (
		<div className='flex py-4 gap-4 xl:gap-20  5xl:gap-24'>
			<div className='flex-1 bg-red-500'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							ease: 'linear',
							delay: 0.4,
						},
					}}
					className='flex aspect-square md:aspect-auto '>
					aw
				</motion.div>
			</div>
			<div className='hidden flex-1 md:flex flex-col gap-6 py-4 '>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							ease: 'linear',
							delay: 0.25,
						},
					}}
					className='text-center md:text-start text-4xl leading-snug font-bold md:text-[min(4.5vw,2.5rem)] lg:text-[min(4.5vw,3rem)] lg:leading-tight lg:max-w-lg 3xl:text-[min(4.5vw,4rem)] 3xl:max-w-2xl'>
					We are experts in bringing brands to life digitally.
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							ease: 'linear',
							delay: 0.35,
						},
					}}
					className='text-center md:text-start text-base font-medium md:leading-normal md:text-[min(2vw,1.18rem)] lg:leading-loose lg:max-w-lg 3xl:max-w-2xl'>
					KOTA is a progressive and insightful design agency, technically and creatively skilled to translate your brand into its best
					digital self. Our design and development approach creates impactful, engaging brands and immersive digital experiences that bring
					you a return on creativity.
				</motion.p>
			</div>
		</div>
	);
};

export default WorkHero;
