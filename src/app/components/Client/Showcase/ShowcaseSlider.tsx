'use client';
import React, { useEffect, useRef } from 'react';
import Showcase_Image from './Item_Image/Showcase_Image';
import Showcase_Video from './Item_video/Showcase_Video';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ShowcaseSlider = () => {
	const wrapper = useRef<HTMLDivElement>(null);
	const firstRow = useRef<HTMLDivElement>(null);
	const secondRow = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(firstRow.current, {
			x: '10vh',
			start: 'top bottom',
			end: 'bottom top',
			scrollTrigger: {
				trigger: firstRow.current,
				scrub: true,
			},
		});
		gsap.to(secondRow.current, {
			x: '-10vh',
			start: 'top bottom',
			end: 'bottom top',
			scrollTrigger: {
				trigger: secondRow.current,
				scrub: true,
			},
		});
	}, []);

	return (
		<section className=' bg-black '>
			<div className='py-6'>
				<div ref={wrapper} className='w-full relative bg-black'>
					<div className='flex flex-col w-full gap-[2.5vw]'>
						<div ref={firstRow} className='row1 min-w-full w-[120vw] flex relative -left-[20vw] md:-left-[15vw] lg:-left-[10vw]'>
							<Showcase_Image image_path={'/home-item-1.jpg'} altText={'homepage of a portfolio website'} />
							<Showcase_Video video_path={'/home-item-2.mp4'} />
							<Showcase_Image image_path={'/home-item-3.jpg'} altText={'homepage of a portfolio website'} />
							<Showcase_Video video_path={'/home-item-4.mp4'} />
						</div>
						<div ref={secondRow} className='row2 min-w-full w-[120vw] flex relative left-0 md:-left-[10vw] lg:-left-[10vw]'>
							<Showcase_Video video_path={'/home-item-5.mp4'} />
							<Showcase_Image image_path={'/home-item-6.jpg'} altText={'E-commerce store website image'} />
							<Showcase_Video video_path={'/home-item-7.mp4'} />
							<Showcase_Image image_path={'/home-item-8.jpg'} altText={'homepage of a portfolio website'} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShowcaseSlider;
