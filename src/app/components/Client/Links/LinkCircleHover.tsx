'use client';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const LinkCircleHover = ({ title, href }: { title: string; href: string }) => {
	const [hover, setHover] = useState<boolean>(false);
	const wrapper = useRef<HTMLDivElement>(null);
	const inner = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const left = gsap.quickTo(inner.current, 'left');
		const top = gsap.quickTo(inner.current, 'top');
		const handleEnter = (e: MouseEvent) => {
			const { x, y } = e;
			if (wrapper.current && inner.current) {
				// Calculate the x and y offsets of the cursor relative to the div
				const xOffset = x - wrapper.current.offsetLeft;
				const yOffset = y - wrapper.current.offsetTop;
				// Calculate the maximum possible x and y offsets to keep the span inside the div
				const maxXOffset = wrapper.current.offsetWidth + inner.current.offsetWidth;
				const maxYOffset = wrapper.current.offsetHeight + inner.current.offsetHeight;
				// Apply the x and y offsets to the span, making sure it stays within the div boundaries
				left(Math.min(Math.max(0, xOffset), maxXOffset));
				top(Math.min(Math.max(0, yOffset), maxYOffset));
			}
		};
		const handleLeave = (e: MouseEvent) => {
			const { pageX, pageY } = e;
			if (wrapper.current && inner.current) {
				// Calculate the x and y offsets of the cursor relative to the div
				const xOffset = pageX - wrapper.current.offsetLeft;
				const yOffset = pageY - wrapper.current.offsetTop;
				// Calculate the maximum possible x and y offsets to keep the span inside the div
				const maxXOffset = wrapper.current.offsetWidth + inner.current.offsetWidth;
				const maxYOffset = wrapper.current.offsetHeight + inner.current.offsetHeight;
				// Apply the x and y offsets to the span, making sure it stays within the div boundaries

				left(Math.min(Math.max(0, xOffset), maxXOffset));
				top(Math.min(Math.max(0, yOffset), maxYOffset));
			}
		};
		if (wrapper.current && inner.current) {
			wrapper.current.addEventListener('mouseenter', handleEnter);
			wrapper.current.addEventListener('mouseleave', handleLeave);
			wrapper.current.addEventListener('mousemove', handleLeave);
		}

		return () => {
			wrapper.current?.removeEventListener('mouseenter', handleEnter);
			wrapper.current?.removeEventListener('mouseleave', handleLeave);
		};
	}, []);

	const innerchild = {
		initial: {
			opacity: 0,
		},
		hoverStart: {
			opacity: 1,
			width: '250%',
			color: '#fffff',
			transition: { duration: 0.4, ease: 'easeOut' },
		},
		hoverEnd: { opacity: 1, width: '1rem', transition: { duration: 0.3 } },
	};

	return (
		<div className='w-min'>
			<motion.div
				ref={wrapper}
				onHoverStart={() => setHover(true)}
				whileHover={{ color: 'white' }}
				onHoverEnd={() => {
					setHover(false);
					wrapper.current!.style.color = 'black';
				}}
				className='group btn-wrapper w-36 aspect-square rounded-full text-black border-none  bg-white'>
				<Link
					href={href}
					className='w-full isolate h-full relative text-lg flex flex-col rounded-full justify-center items-center border font-medium overflow-hidden'>
					<motion.span
						ref={inner}
						initial='initial'
						variants={innerchild}
						animate={hover ? 'hoverStart' : 'hoverEnd'}
						className='-z-10 absolute isolate w-4 aspect-square rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-black pointer-events-none'></motion.span>
					{title}
				</Link>
			</motion.div>
		</div>
	);
};

export default LinkCircleHover;
