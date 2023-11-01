import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { socials } from './Anim';
import SocialIcon from './SocialIcon';
import Link from 'next/link';

const SocialsIcons = ({ hover = false }: { hover?: boolean }) => {
	return (
		<div>
			<ul className='flex gap-4 lg:gap-6'>
				<motion.li className='w-10 h-10' variants={socials} initial={'initial'} animate={'fadeIn'} exit={'fadeOut'} custom={1}>
					<SocialIcon>
						<Link
							href={'http://instagram.com'}
							className={`w-full h-full border p-0 rounded-full border-white flex justify-center items-center text-white transition-colors ${
								hover && 'hover:border-ThemePrimary hover:text-ThemePrimary'
							}`}>
							<FaInstagram className={'w-5 h-5'} />
						</Link>
					</SocialIcon>
				</motion.li>
				<motion.li className='w-10 h-10' variants={socials} initial={'initial'} animate={'fadeIn'} exit={'fadeOut'} custom={2}>
					<SocialIcon>
						<Link
							href={'http://linkedin.com'}
							className={`w-full h-full border p-0 rounded-full border-white flex justify-center items-center text-white transition-colors ${
								hover && 'hover:border-ThemePrimary hover:text-ThemePrimary'
							}`}>
							<FaLinkedinIn className={'w-5 h-5'} />
						</Link>
					</SocialIcon>
				</motion.li>
				<motion.li className='w-10 h-10' variants={socials} initial={'initial'} animate={'fadeIn'} exit={'fadeOut'} custom={3}>
					<SocialIcon>
						<Link
							href={'http://facebook.com'}
							className={`w-full h-full border p-0 rounded-full border-white flex justify-center items-center text-white transition-colors ${
								hover && 'hover:border-ThemePrimary hover:text-ThemePrimary'
							}`}>
							<FaFacebookF className={'w-5 h-5'} />
						</Link>
					</SocialIcon>
				</motion.li>
				<motion.li className='w-10 h-10' variants={socials} initial={'initial'} animate={'fadeIn'} exit={'fadeOut'} custom={4}>
					<SocialIcon>
						<Link
							href={'http://x.com'}
							className={`w-full h-full border p-0 rounded-full border-white flex justify-center items-center text-white transition-colors ${
								hover && 'hover:border-ThemePrimary hover:text-ThemePrimary'
							}`}>
							<svg
								className='w-5 h-5'
								stroke='currentColor'
								fill='currentColor'
								stroke-width='0'
								viewBox='0 0 512 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'></path>
							</svg>
						</Link>
					</SocialIcon>
				</motion.li>
			</ul>
		</div>
	);
};

export default SocialsIcons;
