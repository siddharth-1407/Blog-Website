'use client';
import { AnimatePresence, motion, cubicBezier, easeOut } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import StartYourProjectForm from '@/app/components/Client/Forms/StartYourProjectForm';

const modelAnime = {
	initial: {
		y: '100%',
		opacity: 0,
		transition: {
			ease: easeOut,
		},
	},
	hide: {
		y: '-100%',
		transition: {
			ease: easeOut,
		},
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			ease: cubicBezier(0.25, 1, 0.5, 1),
		},
	},
};
export default function CallToActionModel({ model, setModel }: { model: boolean; setModel: React.Dispatch<React.SetStateAction<boolean>> }) {
	const emailRef = useRef<HTMLParagraphElement>(null);
	const copyIndicator = useRef<HTMLSpanElement>(null);
	const [copied, setCopied] = useState<boolean>(false);

	const copyToClipboard = () => {
		setCopied(true);
		try {
			if (emailRef.current) {
				navigator.clipboard.writeText(emailRef.current.innerHTML);
				setTimeout(() => {
					if (copyIndicator.current) {
						copyIndicator.current.textContent = '';
					}
				}, 2000);
			} else {
				console.error('Error: EmailRef is undefined!');
			}
		} catch (error) {
			console.error(error);
		}
	};
	const handleMouseLeave = () => {
		if (copied) {
			setCopied(false);
		}
	};
	return (
		<AnimatePresence>
			{model && (
				<motion.div
					key={1}
					inert={model}
					variants={modelAnime}
					initial='initial'
					animate={model ? 'show' : 'hide'}
					exit={'hide'}
					className='fixed w-screen overflow-auto scrollbar h-screen p-6 bg-white backdrop-blur-sm flex flex-col lg:p-8 z-[999]'>
					<div className='flex justify-end '>
						<button
							onClick={() => {
								setModel(!model);
							}}>
							<MdClose className={'w-12 h-12 text-ThemePrimary'} />
						</button>
					</div>
					<div className='flex flex-1 lg:items-center '>
						<section className='flex-1 overflow-auto md:py-10 lg:p-10 max-w-6xl xl:max-w-[90%] 2xl:min-h-[90%] mx-auto flex flex-col md:flex-row md:divide-x sm:divide-y md:divide-y-0 divide-black bg-red-7'>
							<div className='hidden sm:flex flex-col md:flex-1 gap-16 pb-6 lg:pb-0 py-4 md:py-5 md:min-h-[90%] lg:min-h-[80%]  md:px4 lg:pr-8'>
								<div>
									<h3 className='text-[clamp(1.5rem,8vw,3.5rem)] md:text-[clamp(1.8rem,3.5vw,2.5rem)] 4xl:text-5xl leading-tight 4xl:leading-[3.5rem] max-w-lg font-bold text-ThemePrimary'>
										Let us help you get your projects started.
									</h3>
								</div>
								<div className='flex flex-col gap-1 4xl:gap-8'>
									<p className='text-[clamp(1.125rem,3.5vw,1.5rem)] md:text-[clamp(1.125rem,2vw,1.5rem)] 4xl:text-2xl text-Text_blogHeading font-medium'>
										Contact us
									</p>
									<div className='group relative cursor-pointer'>
										<p
											ref={emailRef}
											onClick={copyToClipboard}
											onMouseLeave={handleMouseLeave}
											className='text-[clamp(1.5rem,6vw,2.5rem)] md:text-[clamp(1.8rem,3.5vw,2.5rem)] 4xl:text-5xl font-bold text-ThemePrimary'>
											hello@kota.co.uk
										</p>
										<span
											ref={copyIndicator}
											aria-live='polite'
											className='group-hover:block hidden absolute 4xl:translate-y-1 text-sm 4xl:text-base font-semibold text-ThemePrimary'>
											{copied ? 'Copied!' : 'Copy to clipboard!'}
										</span>
									</div>
								</div>
								<div>
									<ul className='flex flex-col gap-3 text-[clamp(1.5rem,5vw,2.2rem)] md:text-[clamp(1.8rem,3.5vw,2rem)] 4xl:text-4xl'>
										<li className='flex flex-wrap gap-x-2 items-center'>
											<strong className='text-Text_blogHeading leading-tight '>London:</strong>
											<span className='text-ThemePrimary leading-tight font-bold'>+44(0) 20398745132</span>
										</li>
										<li className='flex flex-wrap gap-x-2 items-center'>
											<strong className='text-Text_blogHeading '>New York:</strong>
											<span className='text-ThemePrimary font-bold'>+1 20398745132</span>
										</li>
									</ul>
								</div>
							</div>
							<div className='h flex flex-1 flex-col gap-3 py-4 md:py-5'>
								<section className='md:px-4 lg:pl-8 lg:pr-0'>
									<StartYourProjectForm />
								</section>
							</div>
						</section>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
