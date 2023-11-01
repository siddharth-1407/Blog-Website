'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const fadeIn = {
	initial: {
		opacity: 0,
	},
	fadeIn: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
		},
	},
};
export default function Hero_workLayout({ src }: { src: StaticImport | string }) {
	return (
		<>
			<motion.div
				variants={fadeIn}
				initial='initial'
				animate={'fadeIn'}
				className='relative w-[min(75vw,1300px)] xl:w-[min(65vw,900px)] 2xl:w-[min(60vw,1000px)] 3xl:w-[min(70vw,1000px)] 5xl:w-[min(80vw,1200px)] mx-auto'>
				<Image src={src} placeholder='blur' priority={true} alt='hero image' className='w-full' />
			</motion.div>
		</>
	);
}
