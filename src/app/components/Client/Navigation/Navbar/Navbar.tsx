'use client';
import Link from 'next/link';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ListItems, slide, logo } from './Anime';
import SocialsIcons from '../../Socials/SocialsIcons';
import SidebarItem from './SidebarItem';
import CallToAction from './CallToAction';
import { signOut, useSession } from 'next-auth/react';

const NavLinks = [
	{ title: 'Work', link: '/work', id: 1 },
	{ title: 'Services', link: '/services', id: 2 },
	{ title: 'Blog', link: '/blogs', id: 3 },
	{ title: 'Contact', link: '/contact', id: 4 },
	{ title: 'FAQ', link: '/faq', id: 5 },
];
const AdminLinks = [{ title: 'Dashboard', link: '/dashboard', id: 1 }];

const Sidebar = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const { status } = useSession();
	return (
		<motion.nav
			inert={open ? false : ''}
			variants={slide}
			animate={open ? 'slideIn' : 'slideOut'}
			initial={'initial'}
			className='z-50 min-h-screen h-full w-full fixed bottom-full bg-pink-500'>
			<div className='flex h-full flex-col pt-11 pb-10 px-6 lg:px-8 lg:py-14 3xl:p-20 5xl:p-16 '>
				<motion.div
					variants={logo}
					initial={'initial'}
					animate={open ? 'fadeIn' : 'fadeOut'}
					className='mt-4 md:ml-0 md:mt-8 3xl:mt-4 flex justify-between items-end pr-16'>
					<Link href={'/'} aria-label='Home' onClick={(e: MouseEvent) => setOpen(false)}>
						<svg className='w-11 h-11 sm:w-16 sm:h-16 aspect-square fill-white' width='65.5' height='65.5' viewBox='0 0 65.5 65.5'>
							<path d='M0,0V65.5H65.5V0ZM61.861,61.861H3.639V3.639H61.861Z' fill='#00000'></path>
							<path
								d='M55.253,62.748l-3.72-12.13h-.081l-3.881,12.13H42.8L49.754,45.2h3.4l6.873,17.548Z'
								transform='translate(-8.19 -8.649)'></path>
							<path d='M21.252,62.748V49.162H16.4V45.2H30.47v3.962H25.619V62.748Z' transform='translate(-3.138 -8.649)'></path>
							<path
								d='M51.357,13.7a8.889,8.889,0,0,0-7.278,3.558A7.646,7.646,0,0,0,42.947,19.2a11.6,11.6,0,0,0-.647,3.72h0a8.836,8.836,0,0,0,9.057,8.814h.4a9.033,9.033,0,0,0,8.733-9.3A8.939,8.939,0,0,0,51.357,13.7Zm.081,14.151c-2.83,0-4.771-2.426-4.771-5.256a4.891,4.891,0,0,1,4.69-5.094c2.83,0,4.69,2.426,4.69,5.175C56.047,25.343,54.187,27.85,51.438,27.85Z'
								transform='translate(-8.094 -2.62)'></path>
							<path
								d='M25.419,31.548l-4.69-7.52h-.081v7.52H16.2V14h4.448v7.925h.081L25.58,14H30.19l-5.741,8.733,6.065,8.814Z'
								transform='translate(-3.1 -2.679)'></path>
						</svg>
					</Link>
				</motion.div>
				<div className='pl-1 flex-1 flex flex-row items-center sm:px-8 md:px-0 lg:w-2/3 w-full mx-auto'>
					<ul className='flex-1 flex flex-col gap-4 5xl:gap-6 md:pl-[10%] lg:px-0 md:justify-center'>
						{NavLinks.map((item, i) => (
							<motion.li key={item.id} variants={ListItems} animate={open ? 'fadeIn' : 'fadeOut'} custom={i}>
								<SidebarItem data={item} setOpen={setOpen} />
							</motion.li>
						))}
						{status === 'authenticated' &&
							AdminLinks.map((item) => {
								return (
									<motion.li key={item.id} variants={ListItems} animate={open ? 'fadeIn' : 'fadeOut'} custom={NavLinks.length}>
										<div className='block lg:hidden'>
											<SidebarItem data={item} setOpen={setOpen} />
										</div>
									</motion.li>
								);
							})}
					</ul>
					{status === 'authenticated' && (
						<ul className='hidden lg:flex flex-col gap-4'>
							{AdminLinks.map((item) => {
								return (
									<motion.li key={item.id} variants={ListItems} animate={open ? 'fadeIn' : 'fadeOut'} custom={1}>
										<SidebarItem data={item} setOpen={setOpen} />
									</motion.li>
								);
							})}
							<motion.li variants={ListItems} animate={open ? 'fadeIn' : 'fadeOut'} custom={2}>
								<button
									className='text-black/25 font-extrabold text-[3.5rem] md:text-6xl lg:text-[4rem] 5xl:text-[5rem] leading-[1.1] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none'
									onClick={() => signOut()}>
									Sign out
								</button>
							</motion.li>
						</ul>
					)}
				</div>
				<div className='relative flex justify-between sm:pl-8'>
					<AnimatePresence>{open && <SocialsIcons />}</AnimatePresence>
					<CallToAction open={open} />
				</div>
			</div>
		</motion.nav>
	);
};

export default Sidebar;
