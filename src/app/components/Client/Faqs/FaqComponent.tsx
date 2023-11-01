'use client';
import React, { useRef, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { motion, cubicBezier, AnimatePresence } from 'framer-motion';

const accordion = {
	show: {
		height: 'auto',
		transition: {
			ease: cubicBezier(0.61, 1, 0.88, 1),
			duration: 0.5,
		},
	},
	hide: {
		height: 0,
		transition: {
			ease: cubicBezier(0.61, 1, 0.88, 1),
			duration: 0.5,
		},
	},
};
export default function FaqComponent({ question, answer }: { question: string; answer: string }) {
	const faq = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div ref={faq}>
			<h2 className='flex'>
				<button
					onClick={handleClick}
					className='flex items-start w-full py-2 gap-6 text-start text-xl sm:text-2xl 5xl:text-[2.5rem] font-extrabold text-Text_blogHeading'
					aria-expanded={open}>
					{open ? (
						<span className='text-ThemePrimary translate-y-0.5 sm:translate-y-0'>
							<AiFillMinusCircle className={'w-7 h-7 sm:w-10 sm:h-10'} />
						</span>
					) : (
						<span className='text-ThemePrimary translate-y-0.5 sm:translate-y-0'>
							<AiFillPlusCircle className={'w-7 h-7 sm:w-10 sm:h-10'} />
						</span>
					)}
					<span className='self-center'>{question}</span>
				</button>
			</h2>

			<AnimatePresence>
				<motion.div className={'overflow-hidden  '} initial={'hide'} variants={accordion} animate={open ? 'show' : 'hide'}>
					<p
						className='whitespace-pre-line text-Text_blogHeading text-base sm:text-base 5xl:text-[1.2rem] py-2 font-medium sm:py-6 max-w-3xl lg:max-w-4xl 3xl:max-w-6xl sm:leading-loose 5xl:leading-loose'
						dangerouslySetInnerHTML={{ __html: answer }}></p>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
