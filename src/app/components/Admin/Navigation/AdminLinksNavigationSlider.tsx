'use client';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import React, { useRef } from 'react';
import GenericLink from '../../Commons/GenericLink';
import { signOut } from 'next-auth/react';

const AdminLinks = [
	{ id: 1, title: 'Dashboard', path: '/dashboard' },
	{ id: 2, title: 'New Blog', path: '/dashboard/new-blog' },
	{ id: 3, title: 'Edit Blog', path: '/dashboard/edit-blog' },
];

const list = {
	initial: {
		opacity: 0,
		y: '0.3rem',
		x: '25%',
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
export default function AdminLinksNavigationSlide() {
	return (
		<motion.div initial={'initial'} whileHover={'appear'} animate={'initial'} className='group relative flex items-center'>
			<div className='px-2 lg:px-3 3xl:px-6'>
				<span>Admin</span>
			</div>
			<AnimatePresence>
				<motion.div
					variants={list}
					className='absolute top-full right-0 py-2 hidden group-hover:block bg-black/95 border-2 border-white min-w-[250px]'>
					<ul className='flex flex-col'>
						{AdminLinks.map((link) => {
							return (
								<li key={link.id} className='flex'>
									<GenericLink data={link} className='w-full py-2' />
								</li>
							);
						})}
						<li>
							<button className='py-2 w-full' onClick={() => signOut()}>
								Log out
							</button>
						</li>
					</ul>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}
