'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';
import { services } from '@/Lib/Services/services';

const ServicesSection = () => {
	const [activeService, setActiveService] = useState(0);

	const servicesAnim = {
		initial: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
			display: 'none',
		},
		start: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
			display: 'flex',
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
			display: 'none',
		},
	};

	const slide = {
		initial: {
			scaleY: '100%',
		},
		start: {
			scaleY: 0,
			transition: {
				ease: easeInOut,
				duration: 0.8,
			},
		},
	};

	return (
		<section
			aria-live='polite'
			className='min-h-screen bg-gradient-to-tr from-ThemePrimary to-[#0dcfd0]/50 via-[#8989e7] relative before:absolute before:top-0 before:left-0 before:inset-0 before:bg-gradient-conic before:from-[#0dcfd0] before:to-[#8989e7]/20 before:via-transparent after:absolute after:top-0 after:left-0 after:inset-0 after:bg-gradient-to-bl after:from-[#0dcfd0]/50 after:to-ThemePrimary after:via-[#8989e7] md:min-h-fit lg:min-h-screen 5xl:py-12'>
			<motion.div
				whileInView={'start'}
				viewport={{ once: true }}
				variants={slide}
				initial={'initial'}
				className='absolute inset-0 bg-white z-10 isolate origin-top hidden md:block'></motion.div>
			<div className='w-full min-h-screen relative z-10 py-20 px-9 sm:px-16 md:mx-auto md:h-fit lg:h-screen lg:px-16 2xl:px-20 5xl:px-48 flex flex-col gap-6 md:gap-0 md:flex-row'>
				<div className='left md:flex-auto md:w-[45%] md:my-auto'>
					<div className='h-full flex flex-col gap-8 md:justify-evenly'>
						<h5 className='uppercase font-semibold text-xs xl:text-base tracking-widest text-white'>Our services</h5>
						<div className='flex flex-col gap-5 md:gap-3  5xl:gap-6'>
							{services.map((service, i) => {
								return (
									<button
										className={`text-start focus-visible:outline-none focus-visible:text-white/90 ${
											activeService === i ? 'text-white' : 'text-black/30'
										}`}
										key={service.id}
										onClick={() => setActiveService(i)}>
										<h3
											className={`text-[2.2rem] lg:text-[2.5rem] xl:text-5xl xl:leading-snug 5xl:text-6xl 5xl:leading-tight leading-snug font-extrabold transition-colors duration-300 max-w-2xl  `}>
											{service.title}
										</h3>
									</button>
								);
							})}
							<Link
								href={'/services'}
								className='hidden md:flex w-fit px-10 py-5 md:px-6 md:py-3 lg:px-8 lg:py-4 lg:top-6 5xl:top-12 relative self-start uppercase font-semibold tracking-widest text-white text-base rounded-full border-2 border-white hover:text-ThemePrimary hover:bg-white transition-colors focus-visible:outline-none focus-visible:text-ThemePrimary focus-visible:bg-white'>
								view all services
							</Link>
						</div>
						<div></div>
					</div>
				</div>
				<div className='right flex-1 md:flex-auto md:w-[55%] md:my-auto'>
					<div className='flex flex-col gap-4 justify-between h-full'>
						<div className='relative w-full xl:w-[85%] 2xl:w-[75%] 5xl:w-full'>
							{services.map((service, i) => {
								return (
									<motion.div
										key={service.id}
										variants={servicesAnim}
										initial={'initial'}
										animate={activeService === i ? 'start' : 'exit'}
										className={`flex flex-col gap-4 5xl:gap-12`}>
										<div className='relative w-full aspect-[1.59997258414] after:absolute after:inset-0'>
											<Image
												src={service.img}
												placeholder='blur'
												fill={true}
												sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 40vw'
												alt='image'
											/>
										</div>
										<p className='text-white text-[0.9rem] lg:text-lg 2xl:text-xl 5xl:text-[1.4rem] 5xl:leading-relaxed leading-loose'>
											{service.text}
										</p>
									</motion.div>
								);
							})}
						</div>
						<Link
							href={'/services'}
							className='md:hidden flex w-fit px-8 py-4 self-start uppercase font-semibold tracking-widest text-white text-xs rounded-full border border-white hover:text-ThemePrimary hover:bg-white transition-colors focus-visible:outline-none focus-visible:text-ThemePrimary focus-visible:bg-white'>
							view all services
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
