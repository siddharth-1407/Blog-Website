import React from 'react';
import GenericLink from '../../Commons/GenericLink';
import SocialsIcons from '../Socials/SocialsIcons';
import SubToNewsLetter from '../NewsLetter/SubToNewsLetter';

const SiteNavLinks = [
	{ title: 'Home', id: 1, path: '/' },
	{ title: 'Work', id: 2, path: '/work' },
	{ title: 'Services', id: 3, path: '/services' },
	{ title: 'Blog', id: 4, path: '/blogs' },
	{ title: 'FAQs', id: 5, path: '/faq' },
	{ title: 'Privacy Policy', id: 6, path: '/privacy-policy' },
];

const Footer = () => {
	return (
		<footer id='footer' className='bg-[#242424] '>
			<div className='mx-auto px-6 py-6 sm:px-20 sm:py-12 md:px-16 xl:px-20 md:py-20 xl:py-24 3xl:py-28 5xl:px-48 flex flex-col lg:flex-row justify-between'>
				<div className='hidden lg:flex lg:flex-1'>
					<ul className='flex flex-col gap-3'>
						{SiteNavLinks?.map((link) => {
							return (
								<React.Fragment key={link.id}>
									<GenericLink
										data={link}
										className='text-2xl text-white font-bold transition-colors hover:text-ThemePrimary focus-visible:text-ThemePrimary focus-visible:outline-none'
									/>
								</React.Fragment>
							);
						})}
					</ul>
				</div>
				<div className='flex flex-col justify-between items-center lg:items-end gap-8'>
					<div className='flex flex-col items-center lg:items-end gap-8 py-4'>
						<p className='uppercase text-lg text-ThemePrimary font-bold'>Follow</p>
						<SocialsIcons hover={true} />
					</div>
					<div>
						<SubToNewsLetter />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
