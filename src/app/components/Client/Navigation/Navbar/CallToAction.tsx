'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { callToAction } from './Anime';

const CallToAction = ({ open }: { open: boolean }) => {
	return (
		<>
			<div className='hidden sm:flex absolute -bottom-4 right-2 5xl:-bottom-4 5xl:right-6'>
				<motion.div className='flex gap-6 5xl:gap-12' variants={callToAction} initial={'initial'} animate={open ? 'fadeIn' : 'fadeOut'}>
					<div className='hidden lg:flex items-center py-3 5xl:py-8'>
						<span className='font-extrabold text-2xl 5xl:text-3xl text-white'>Lets get cracking</span>
					</div>
					<div className='hidden lg:block w-[1px] bg-white h-full'></div>
					<div className='flex py-3 5xl:py-8'>
						<button className='px-7 py-4 5xl:px-8 5xl:py-5 rounded-full font-semibold 5xl:text-base text-white bg-black/20 hover:bg-white hover:text-ThemePrimary  focus-visible:bg-white focus-visible:text-ThemePrimary focus-visible:outline-none  transition-colors sm:text-sm'>
							START YOUR PROJECT
						</button>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default CallToAction;
