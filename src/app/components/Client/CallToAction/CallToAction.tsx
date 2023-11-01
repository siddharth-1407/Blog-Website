'use client';
import React, { RefObject, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CallToActionModel from './CallToActionModel';

const callToAction = {
	initial: {
		opacity: 0,
	},
	fadeIn: {
		opacity: 1,
		display: 'block',
		transition: {
			duration: 0.25,
			ease: 'linear',
			delay: 0.2,
		},
	},
	fadeOut: {
		opacity: 0,
		display: 'none',
		transition: {
			duration: 0.25,
			ease: 'linear',
			display: {
				delay: 0.25,
			},
		},
	},
};

const CallToAction = ({ trigger }: { trigger: RefObject<HTMLDivElement> }) => {
	const [model, setModel] = useState<boolean>(false);

	const [show, setShow] = useState<boolean>(false);
	const inView = useInView(trigger);
	useEffect(() => {
		if (inView) return setShow(false);
		setShow(true);
	}, [inView]);

	return (
		<>
			<CallToActionModel model={model} setModel={setModel} />
			<motion.div
				variants={callToAction}
				initial={'initial'}
				animate={show ? 'fadeIn' : 'fadeOut'}
				className='fixed bottom-14 right-6 md:right-10 lg:right-16 z-40'>
				<button
					onClick={() => {
						setModel(!model);
					}}
					className='rounded-full border-2 border-ThemePrimary px-6 py-3 md:px-7 md:py-5 lg:px-8 lg:py-6 bg-ThemePrimary text-xs lg:text-sm font-bold text-white tracking-wider hover:bg-white hover:text-ThemePrimary hover:border-ThemePrimary transition-colors focus-visible:bg-white focus-visible:text-ThemePrimary focus-visible:border-ThemePrimary focus-visible:outline-none'>
					<span>START YOUR PROJECT</span>
				</button>
			</motion.div>
		</>
	);
};

export default CallToAction;
