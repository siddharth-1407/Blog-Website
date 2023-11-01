'use client';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Cursor = () => {
	const outerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const movementX_outer = gsap.quickTo(outerRef.current, 'left', { duration: 0.8, ease: 'power3' });
		const movementY_outer = gsap.quickTo(outerRef.current, 'top', { duration: 0.8, ease: 'power3' });
		const movementX_inner = gsap.quickTo(innerRef.current, 'left', { duration: 0.8, ease: 'power2' });
		const movementY_inner = gsap.quickTo(innerRef.current, 'top', { duration: 0.8, ease: 'power2' });
		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			if (outerRef.current && innerRef.current) {
				gsap.to(innerRef.current, { duration: 0.8, x: 0, y: 0, ease: 'power2' });
				movementX_outer(clientX - outerRef.current.offsetWidth / 2);
				movementY_outer(clientY - outerRef.current.offsetWidth / 2);
				movementX_inner(clientX - innerRef.current.offsetWidth / 2);
				movementY_inner(clientY - innerRef.current.offsetWidth / 2);
			}
		};

		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, x: '0px', y: '0px', transition: { duration: 0.8 } }}
				ref={outerRef}
				id='cursor_Outer'
				className='mix-blend-difference z-50 outer hidden sm:block fixed top-1/2 left-1/2  rounded-full w-10 aspect-square border border-slate-50 pointer-events-none'
			/>
			<motion.div
				initial={{ opacity: 0, x: '1.13rem', y: '1.13rem' }}
				animate={{ opacity: 1, transition: { duration: 0.8 } }}
				ref={innerRef}
				id='cursor_Inner'
				className='mix-blend-difference z-50 inner hidden sm:block  fixed top-1/2 left-1/2  w-1 aspect-square rounded-full border bg-slate-50 pointer-events-none'
			/>
		</>
	);
};

export default Cursor;
