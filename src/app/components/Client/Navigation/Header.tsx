'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar/Navbar';
import { signOut, useSession } from 'next-auth/react';

const anime = {
	initial: { y: 0 },
	open: {
		y: '0.69rem',
		width: '2.5rem',
		height: '0.3rem',
		rotate: '-45deg',
		transition: {
			ease: 'easeOut',
			y: { delay: 0, ease: 'easeOut', duration: 0.15 },
			height: { delay: 0 },
			width: { delay: 0, duration: 0 },
			rotate: {
				delay: 0.2,
			},
		},
	},
	close: {
		y: 0,
		rotate: 0,
		transition: {
			ease: 'linear',
			duration: 0.15,
		},
	},
};
const anime2 = {
	open: { opacity: 0 },
	close: { opacity: 1 },
};
const anime3 = {
	initial: { y: 0 },
	open: {
		y: '-0.69rem',
		width: '2.5rem',
		height: '0.3rem',
		rotate: '45deg',
		transition: {
			ease: 'linear',
			width: { delay: 0, duration: 0 },
			height: { delay: 0 },
			y: { delay: 0, ease: 'easeOut', duration: 0.15 },
			rotate: {
				delay: 0.2,
			},
		},
	},
	close: {
		y: 0,
		rotate: 0,
		transition: {
			ease: 'linear',
			duration: 0.15,
		},
	},
};
const Logo = {
	initial: {
		opacity: 0,
	},
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
};

const NavItem = {
	initial: {
		opacity: 0,
		x: '2rem',
	},
	slideIn: {
		x: 0,
		opacity: 1,
	},
};

const navListAnime = {
	initial: {
		opacity: 1,
	},
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.9,
			duration: 0,
		},
	},
};

const NavLinks = [
	{ title: 'Work', path: '/work' },
	{ title: 'Contact', path: '/contact' },
];

const Header = () => {
	const { data: session, status } = useSession();
	const pathname = usePathname();
	const [navOpen, setNavOpen] = useState<boolean>(false);
	const [scrollPos, setScrollPos] = useState<number>(0);

	useEffect(() => {
		const body = document.querySelector('body')!;

		if (navOpen) {
			const position = window.scrollY;
			setScrollPos(position);
			body.classList.add('overflow-hidden');
			body.classList.add('h-screen');
		} else {
			body.classList.remove('overflow-hidden');
			body.classList.remove('h-screen');
			window.document.documentElement.scrollTop = scrollPos;
		}
	}, [navOpen]);

	useEffect(() => {
		const handleEscClose = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setNavOpen(false);
			}
		};
		window.addEventListener('keydown', handleEscClose);

		return () => {
			window.removeEventListener('keydown', handleEscClose);
		};
	}, []);

	return (
		<>
			<header
				id='navbar'
				className={`sticky top-0 px-6 pt-10 sm:px-8 sm:py-12 md:px-10 md:pt-16 lg:pt-20 5xl:px-16 z-[990] text-white pointer-events-none ${
					navOpen ? 'mix-blend-normal' : 'mix-blend-difference'
				} `}>
				<nav className='flex justify-between items-center'>
					<motion.div
						variants={Logo}
						initial={'initial'}
						animate={!navOpen ? 'show' : 'hide'}
						className={`${pathname === '/' && 'w-[65.5px] aspect-square'}`}>
						<Link
							href={'/'}
							aria-label='Home'
							className={`${pathname === '/' ? 'hidden' : 'flex'} pointer-events-auto`}
							onClick={() => setNavOpen(false)}>
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
					<div className='flex gap-8 sm:gap-14 self-end items-center '>
						<motion.ul
							variants={navListAnime}
							initial={'initial'}
							animate={navOpen ? 'hide' : 'show'}
							exit={'hide'}
							className={`hidden sm:flex font-bold 5xl:font-extrabold text-2xl gap-14 ${navOpen && 'sm:hidden'}`}>
							{NavLinks.map((link) => {
								return (
									<motion.li key={link.path} variants={NavItem} initial={'initial'} animate={'slideIn'}>
										<Link href={link.path} className='hover:text-ThemePrimaryMixBlend transition-colors pointer-events-auto'>
											{link.title}
										</Link>
									</motion.li>
								);
							})}
							{status === 'authenticated' && (
								<motion.li variants={NavItem} initial={'initial'} animate={'slideIn'}>
									<Link href={'/dashboard'} className='hover:text-ThemePrimaryMixBlend transition-colors pointer-events-auto'>
										Dashboard
									</Link>
								</motion.li>
							)}
						</motion.ul>
						{status === 'authenticated' && (
							<motion.button
								variants={NavItem}
								initial={'initial'}
								animate={'slideIn'}
								className={` ${
									navOpen ? 'lg:hidden' : 'sm:hidden lg:block'
								} hover:text-ThemePrimaryMixBlend transition-colors whitespace-nowrap pointer-events-auto font-bold 5xl:font-extrabold text-2xl gap-14`}
								onClick={() => signOut()}>
								Sign out
							</motion.button>
						)}
						<motion.button
							aria-label='Menu'
							variants={NavItem}
							initial={'initial'}
							animate={'slideIn'}
							className='w-10 h-11 z-[999] pointer-events-auto'
							onClick={() => setNavOpen(!navOpen)}>
							<div className='flex flex-col items-end justify-between py-2 h-full w-full '>
								<motion.span
									variants={anime}
									animate={navOpen ? 'open' : 'close'}
									className={`w-10 h-[0.2rem] lg:h-[0.25rem] origin-center bg-white`}></motion.span>
								<motion.span
									variants={anime2}
									animate={navOpen ? 'open' : 'close'}
									className={`w-10 h-[0.188rem] lg:h-[0.25rem] bg-white `}></motion.span>
								<motion.span
									variants={anime3}
									animate={navOpen ? 'open' : 'close'}
									className=' w-8 h-[0.2rem] lg:h-[0.25rem] bg-white origin-center'></motion.span>
							</div>
						</motion.button>
					</div>
				</nav>
			</header>
			<Navbar open={navOpen} setOpen={setNavOpen} />
		</>
	);
};

export default Header;
