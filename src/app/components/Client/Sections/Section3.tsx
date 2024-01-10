'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Planning_Image from '/public/Home/planing.png';
import Execute_Image from '/public/Home/execute.png';
import Impact_Image from '/public/Home/impact3.png';
// import Image1 from '/public/Home/image1.jpg';
// import Execute_Image from '/public/Home/Execute_Image.jpg';
// import Impact_Image from '/public/Home/Impact_Image.jpg';

const Section3 = () => {
	const wrapper = useRef<HTMLDivElement>(null);
	const ImageContainer = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const photos = gsap.utils.toArray('.photo');
		gsap.set(photos, { opacity: 0 });
		const animation = gsap.to(photos, {
			opacity: 1,
			duration: 0.15,
			stagger: 1,
		});

		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.create({
			trigger: wrapper.current,
			start: 'top 15%',
			end: '90% bottom',
			animation: animation,
			scrub: true,
		});
		ScrollTrigger.create({
			trigger: wrapper.current,
			start: 'top 10%',
			end: 'bottom bottom',
			pin: ImageContainer.current,
		});
	}, []);
	return (
		<section className='flex flex-col my-12 sm:my-20 gap-20 5xl:gap-10'>
			<h3 className='px-6 text-ThemeSecondary font-extrabold leading-snug text-[2rem] sm:max-w-2xl sm:text-3xl sm:pr-0  md:pl-24  md:max-w-2xl lg:max-w-5xl lg:leading-normal lg:text-5xl 5xl:leading-tight 5xl:py-20 5xl:pl-48 5xl:text-[4rem] 5xl:max-w-[75%]'>
				Our creative digital agency designs and develops bespoke websites with
				<strong className='text-ThemePrimary'>&nbsp;three things in mind;</strong>
			</h3>
			<div ref={wrapper} className='flex md:mx-auto md:px-16 5xl:px-44'>
				<div className='lg:w-[45%] flex flex-col gap-12'>
					<div className='flex flex-col gap-4 lg:min-h-[85vh] md:justify-center'>
						<div className=' flex flex-col gap-6 px-6 '>
							<h4 className='text-ThemeSecondary text-4xl 5xl:text-6xl font-extrabold relative before:absolute before:top-[6px] before:-left-4 before:content-["01"] before:text-[0.6rem] sm:before:text-[0.7rem] sm:before:-left-5 5xl:before:text-base 5xl:before:top-0 5xl:before:-left-7 before:w-4 before:h-4 before:leading-none before:text-ThemePrimary sm:text-5xl'>
								Beauty
							</h4>
							<p className='text-ThemeSecondary font-medium text-lg 5xl:text-3xl md:max-w-[85%] 5xl:leading-normal'>
								Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.
							</p>
						</div>
						<div className=' lg:hidden px-6'>
							<div className='relative max-w-lg  rounded-xl overflow-hidden h-full '>
								<Image src={Planning_Image} placeholder='blur' width={512} height={512} alt='image' />
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-4 lg:min-h-[85vh] md:justify-center'>
						<div className='flex flex-col gap-6 px-6 '>
							<h4 className='text-ThemeSecondary text-4xl 5xl:text-6xl font-extrabold relative before:absolute before:top-[6px] before:-left-4 before:content-["02"] before:text-[0.6rem] sm:before:text-[0.7rem] sm:before:-left-5 5xl:before:text-base 5xl:before:top-0 5xl:before:-left-7 before:w-4 before:h-4 before:leading-none before:text-ThemePrimary sm:text-5xl'>
								Thought
							</h4>
							<p className='text-ThemeSecondary font-medium text-lg 5xl:text-3xl md:max-w-[85%] 5xl:leading-normal'>
								As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target
								audience.
							</p>
						</div>
						<div className=' lg:hidden px-6'>
							<div className='relative max-w-lg rounded-xl overflow-hidden h-full '>
								<Image src={Execute_Image} placeholder='blur' width={512} height={512} alt='image' />
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-4 lg:min-h-[90vh] md:justify-center'>
						<div className='flex flex-col gap-6 px-6 '>
							<h4 className='text-ThemeSecondary text-4xl 5xl:text-6xl font-extrabold relative before:absolute before:top-[6px] before:-left-4 before:content-["03"] before:text-[0.6rem] sm:before:text-[0.7rem] sm:before:-left-5 5xl:before:text-base 5xl:before:top-0 5xl:before:-left-7 before:w-4 before:h-4 before:leading-none before:text-ThemePrimary sm:text-5xl'>
								Impact
							</h4>
							<p className='text-ThemeSecondary font-medium text-lg 5xl:text-3xl md:max-w-[85%] 5xl:leading-normal'>
								Designing tailor made solutions that resonate with your customers and drives them to act.
							</p>
						</div>
						<div className=' lg:hidden px-6'>
							<div className='relative max-w-lg rounded-xl overflow-hidden h-full '>
								<Image src={Impact_Image} placeholder='blur' width={512} height={512} alt='image' />
							</div>
						</div>
					</div>
				</div>
				<div className='hidden lg:flex lg:w-[55%] lg:flex-col relative'>
					<div ref={ImageContainer} className='min-h-[85vh] flex  items-center '>
						<div className='relative w-full aspect-[1.59997258414]  '>
							<Image
								src={Planning_Image}
								placeholder='blur'
								width={850}
								height={512}
								alt='image'
								className='photo rounded-3xl  absolute w-full h-full '
							/>
							<Image
								src={Execute_Image}
								placeholder='blur'
								width={850}
								height={512}
								alt='image'
								className='photo rounded-3xl absolute w-full h-full '
							/>
							<Image
								src={Impact_Image}
								placeholder='blur'
								width={850}
								height={512}
								alt='image'
								className='photo rounded-3xl absolute w-full h-full '
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section3;
