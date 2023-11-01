'use client';
import React from 'react';
import GenericLink from '../../Commons/GenericLink';
import { AnimatePresence, easeOut, motion } from 'framer-motion';

const ClientLinks = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Work', path: '/work' },
	{ id: 3, title: 'Services', path: '/services' },
	{ id: 4, title: 'Blog', path: '/blog' },
	{ id: 5, title: 'Contact', path: '/contact' },
];

const list = {
	initial: {
		opacity: 0,
		y: '0.3rem',
		x: '-50%',
		display: 'none',
	},
	appear: {
		opacity: 1,
		y: 0,
		display: 'block',
		transition: {
			ease: easeOut,
		},
	},
};
export default function ClientLinksNavigationSlide() {
	return (
		<motion.div initial={'initial'} whileHover={'appear'} animate={'initial'} className='group relative flex items-center'>
			<div className='px-2 lg:px-3 3xl:px-6'>
				<span>Client</span>
			</div>
			<AnimatePresence>
				<motion.div
					variants={list}
					className='absolute top-full left-1/2 py-2 hidden group-hover:block bg-black/95 border-2 border-white min-w-[250px]'>
					<ul className='flex flex-col '>
						{ClientLinks.map((link) => {
							return (
								<li key={link.id} className='flex'>
									<GenericLink data={link} className={'w-full py-2'} />
								</li>
							);
						})}
					</ul>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}
