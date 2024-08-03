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
			
			We craft bespoke innovative <strong className='text-ThemePrimary bg-gradient-to-r from-[#4dc9e6] to-[#210cae] text-transparent bg-clip-text'>&nbsp;websites&nbsp;</strong>, immersive
			<strong className='text-ThemePrimary bg-gradient-to-r from-[#28b8d5] to-[#020344] text-transparent bg-clip-text'>&nbsp;games&nbsp;</strong> and 
			personalized <strong className='text-ThemePrimary bg-gradient-to-r from-[#f4119e] to-[#4a313e] text-transparent bg-clip-text'>&nbsp;interior designs&nbsp;</strong>.
			
			</h3>
			<div ref={wrapper} className='flex md:mx-auto md:px-16 5xl:px-44'>
				<div className='lg:w-[45%] flex flex-col gap-12'>
					<div className='flex flex-col gap-4 lg:min-h-[85vh] md:justify-center'>
						<div className=' flex flex-col gap-6 px-6 '>
							<h4 className='text-ThemeSecondary text-4xl 5xl:text-6xl font-extrabold relative before:absolute before:top-[6px] before:-left-4 before:content-["01"] before:text-[0.6rem] sm:before:text-[0.7rem] sm:before:-left-5 5xl:before:text-base 5xl:before:top-0 5xl:before:-left-7 before:w-4 before:h-4 before:leading-none before:text-ThemePrimary sm:text-5xl'>
								Planning
							</h4>
							<p className='text-ThemeSecondary font-medium text-lg 5xl:text-3xl md:max-w-[85%] 5xl:leading-normal'>
								Tailoring our planning process to each client's unique needs, our agency ensures precision and alignment, paving the way for bespoke solutions that truly resonate.
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
								Execution
							</h4>
							<p className='text-ThemeSecondary font-medium text-lg 5xl:text-3xl md:max-w-[85%] 5xl:leading-normal'>
								Executing with client-centric precision, our agency transforms tailored plans into dynamic realities and meaningful experiences, ensuring development aligns seamlessly with unique needs and aspirations.
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
							Empowering clients with measurable impact, our agency's bespoke solutions not only meet but exceed their needs, fostering sustained growth and success.
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
								width={960}
								height={512}
								alt='image'
								className='photo rounded-3xl  absolute w-full h-full '
							/>
							<Image
								src={Execute_Image}
								placeholder='blur'
								width={960}
								height={512}
								alt='image'
								className='photo rounded-3xl absolute w-full h-full '
							/>
							<Image
								src={Impact_Image}
								placeholder='blur'
								width={960}
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
