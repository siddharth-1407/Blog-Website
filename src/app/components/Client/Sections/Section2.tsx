'use client';
import { useEffect, useRef } from 'react';
import { Quicksand } from 'next/font/google';
import { useInView } from 'framer-motion';
const quicksand = Quicksand({
	subsets: ['latin'],
});

const Section2 = () => {
	const VideoRef = useRef<HTMLVideoElement>(null);
	const inView = useInView(VideoRef, { once: true, margin: '5% 0% 0% 0%' });
	useEffect(() => {
		if (inView) {
			VideoRef.current?.play();
		}
	}, [inView]);
	return (
		<div className='min-h-min flex flex-col  md:flex-row md:mt-12 lg:mt-0'>
			<div className='flex-1 flex items-center '>
				<video ref={VideoRef} loop muted tabIndex={-1} className='pointer-events-none'>
					<source src='/animation-v3.mp4' type='video/mp4' />
				</video>
			</div>
			<div className='flex-1 '>
				<div className='mt-8 mb-12 px-6 sm:pl-16 sm:pr-12 sm:mt-16 md:mb-0 md:mt-0 5xl:pl-28 h-full flex flex-col justify-center gap-6 '>
					<h2 className='text-ThemeSecondary font-bold text-4xl max-w-xs sm:text-5xl sm:max-w-md md:text-[2.5rem] lg:text-5xl 5xl:max-w-3xl 5xl:text-7xl'>
					Dream. Achieve. Prevail.
					</h2>
					<p
						className={`${quicksand.className} text-ThemeSecondary font-medium text-base leading-[1.8] lg:leading-[1.8] 5xl:leading-[1.8] lg:text-lg max-w-[47rem] 5xl:text-xl 5xl:font-semibold`}>
						In the dynamic landscape of web development, game development, and interior design, 
						our agency thrives on problem-solving. We revamp online presence, 
						enhancing gaming experiences, and reshape interiors, providing clients with tailored solutions 
						that redefine their digital and physical environments.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section2;
