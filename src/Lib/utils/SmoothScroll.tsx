'use client';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

const SmoothScroll = () => {
	let lenis: Lenis;

	useEffect(() => {
		(async () => {
			const Lenis = (await import('@studio-freight/lenis')).default;
			lenis = new Lenis();
			lenis.on('scroll', ScrollTrigger.update);

			gsap.ticker.add((time: number) => {
				lenis.raf(time * 1000);
			});
			gsap.ticker.lagSmoothing(0);
		})();
		return () => {
			if (lenis) {
				lenis.scrollTo(0, {
					immediate: true,
				});
				lenis.destroy();
			}
		};
	}, []);

	return null;
};

export default SmoothScroll;
