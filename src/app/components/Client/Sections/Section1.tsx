'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import LinkCircleHover from '../Links/LinkCircleHover';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Section1 = () => {
	const refs = useRef<HTMLSpanElement[]>([]);
	const imageLeft = useRef<HTMLImageElement>(null);
	const imageRight = useRef<HTMLImageElement>(null);
	const ImagecontainerLeft = useRef<HTMLDivElement>(null);
	const ImagecontainerRight = useRef<HTMLDivElement>(null);
	const wrapper = useRef<HTMLDivElement>(null);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const body = document.querySelector('body');

		gsap.registerPlugin(ScrollTrigger);
		gsap.to(body, {
			background: 'black',
			scrollTrigger: {
				trigger: wrapper.current,
				start: '-20% center',
				end: '20% top',
				id: 'section1',
			},
		});
	}, []);
	const createAnimation = () => {
		gsap.to(refs.current, {
			opacity: 1,
			stagger: 0.2,
			scrollTrigger: {
				trigger: container.current,
				start: 'top 50%',
			},
		});
	};
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		createAnimation();

		const t1 = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: '20% bottom',
				end: 'bottom top',
				scrub: true,
			},
		});
		t1.to(imageLeft.current, {
			y: '70%',

			ease: 'none',
		});
		const t2 = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			},
		});
		t2.to(imageRight.current, {
			y: '80vh',

			ease: 'none',
		});
	}, []);
	return (
		<>
			<div ref={wrapper} className='px-6 md:min-h-screen h-fit overflow-hidden'>
				<div className=' flex md:min-h-screen justify-center max-w-5xl xl:max-w-6xl 2xl:max-w-[82.5rem] mx-auto mt-8'>
					<div ref={container} className='my-auto w-full '>
						<div className=' flex flex-col py-12 lg:py-0 justify-between gap-16 h-fit'>
							<div className='heading lg:pl-[15%]'>
								<h2 className='max-w-2xl text-3xl sm:text-5xl leading-tight font-semibold'>
									We unlock the potential of your business with creative design
								</h2>
							</div>
							<div className='flex flex-col sm:flex-row gap-4 xl:gap-20'>
								<div className='imageContainer  w-full sm:w-1/2 lg:w-1/3 overflow-hidden'>
									<div ref={ImagecontainerLeft} className='relative w-full lg:max-h-[35.313rem] aspect-[3/4] object-center'>
										<Image
											ref={imageLeft}
											src={'/1-10.jpg'}
											width={560}
											height={560}
											className='absolute w-full lg:min-w-[34rem] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-full top-[10%]'
											alt='daw'
										/>
									</div>
								</div>
								<div className='flex-1 font-medium md:text-lg lg:text-base flex flex-col lg:justify-between lg:py-16 gap-4 md:gap-12'>
									<p className='lg:flex sm:max-w-[460px] flex-col leading-relaxed'>
										<span
											className='opacity-0'
											ref={(el: HTMLSpanElement) => {
												refs.current.push(el);
											}}>
											From traditional PR and thought leadership campaigns
										</span>
										<span
											className='opacity-0 ml-1 lg:ml-0'
											ref={(el: HTMLSpanElement) => {
												refs.current.push(el);
											}}>
											to storytelling and creative social media management
										</span>
										<span
											className='opacity-0 ml-1 lg:ml-0'
											ref={(el: HTMLSpanElement) => {
												refs.current.push(el);
											}}>
											we’ve got you covered. Something is not your average
										</span>
										<span
											className='opacity-0 ml-1 lg:ml-0'
											ref={(el: HTMLSpanElement) => {
												refs.current.push(el);
											}}>
											order taking vendor. We are proud to be the go-to
										</span>
										<span
											className='opacity-0 ml-1 lg:ml-0'
											ref={(el: HTMLSpanElement) => {
												refs.current.push(el);
											}}>
											partner for some of the world’s biggest agencies
										</span>
										<span
											className='opacity-0 ml-1 lg:ml-0'
											ref={(el: HTMLSpanElement) => {
												refs.current.push(el);
											}}>
											and brands because they trust our expertise
										</span>
									</p>
									<div className='self-center md:self-start'>
										<LinkCircleHover title={'Explore us'} href='/explore' />
									</div>
								</div>
							</div>

							<div className='relative w-full'>
								<div className='absolute w-16 lg:w-20 aspect-square bottom-10 right-0 lg:bottom-24 lg:left-2/3'>
									<div className='absolute right-0 bottom-0 w-10 lg:w-14 aspect-square bg-slate-300'></div>
									<div className='absolute  w-10 lg:w-14 aspect-square bg-gray-400'></div>
								</div>
							</div>
							<div ref={ImagecontainerRight} className='hidden lg:block relative bottom-full h-full pointer-events-none -z-10'>
								<div className='absolute w-48 h-48 xl:w-60 xl:h-60 right-0 -top-[100vh]'>
									<Image ref={imageRight} src={'/2-5.jpg'} fill={true} className='' alt='daw' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section1;
