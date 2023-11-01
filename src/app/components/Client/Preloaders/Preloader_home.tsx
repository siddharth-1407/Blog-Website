'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap, Power1 } from 'gsap';
import { MdCircle } from 'react-icons/md';

const Preloader_home = () => {
	const wrapper = useRef<HTMLDivElement>(null);
	const para = useRef<HTMLParagraphElement>(null);
	const text = useRef<HTMLSpanElement>(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		document.documentElement.style.overflowY = 'hidden';
	}, []);

	useEffect(() => {
		// Animation to gradually increase the opacity of 'Hello'
		const tl = gsap.timeline();
		tl.fromTo(
			para.current,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				onComplete: () => {
					const languages = [
						'Hello',
						'Hola',
						'Bonjour',
						'नमस्ते ',
						'Nǐ hǎo',
						'こんにちは',
						'Здравствуйте',
						'مرحبا ',
						'안녕하세요',
						'Hallo',
					];
					// Display each language one after another
					let index = 0;
					function showNextLanguage() {
						if (text.current) {
							text.current.textContent = languages[index];
							index++;
							if (index < languages.length) {
								setTimeout(showNextLanguage, 200); // Change language every 0.5 seconds
							} else {
								// Animation completed
								console.log('Animation completed!');
								document.documentElement.style.overflowY = 'auto';
							}
						}
					} // Start displaying languages
					showNextLanguage();
				},
			}
		);
		tl.to(wrapper.current, {
			y: '-100%',
			duration: 0.5,
			ease: Power1.easeInOut,
			delay: 2.8,
			onComplete: () => setIsLoading(false),
		});
	}, []);
	return isLoading ? (
		<div ref={wrapper} className='fixed top-0 left-0 w-full h-screen z-50 bg-black flex justify-center items-center'>
			<div className='wrapper flex flex-col relative'>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					ref={para}
					className={`w-[360px] px-4 py-3 -z-[1] absolute -translate-x-1/2 -translate-y-1/2 flex justify-center gap-4 whitespace-nowrap list-disc text-red-500 text-5xl`}>
					<span className='flex justify-center items-center'>
						<MdCircle className='w-4 h-4' />
					</span>
					<span ref={text} className={`text-white`}>
						Hello
					</span>
				</motion.p>
				{/* {greetingsArray.map((item, i) => {
					return (
						<p
							className={`w-[360px] px-4 py-3 ${possibleClasses[i]} absolute -translate-x-1/2 -translate-y-1/2 flex justify-center gap-4 whitespace-nowrap list-disc bg-gray-900 text-red-500 text-5xl`}>
							<span className='flex justify-center items-center'>
								<MdCircle className='w-4 h-4' />
							</span>
							<span key={i} className={`text-white`}>
								{item}
							</span>
						</p>
					);
				})} */}
			</div>
		</div>
	) : null;
};

export default Preloader_home;
