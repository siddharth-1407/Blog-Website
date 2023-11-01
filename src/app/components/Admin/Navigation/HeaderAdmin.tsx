import Link from 'next/link';
import React from 'react';
import ClientLinksNavigationSlide from './ClientLinksNavigationSlide';
import AdminLinksNavigationSlide from './AdminLinksNavigationSlider';

export default function HeaderAdmin() {
	return (
		<header className={`w-full fixed top-0 px-6  sm:px-8 md:px-10 5xl:px-16 z-[990] bg-red-400 text-white`}>
			<nav>
				<ul className='flex text-lg 3xl:text-xl text-center'>
					<li>
						<Link href={'/'} aria-label='Home'>
							<svg className='w-11 h-11 sm:w-14 sm:h-14 aspect-square fill-white' width='65.5' height='65.5' viewBox='0 0 65.5 65.5'>
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
					</li>
					<li className='ml-auto flex'>
						<ClientLinksNavigationSlide />
					</li>
					<li className='flex'>
						<AdminLinksNavigationSlide />
					</li>
				</ul>
			</nav>
		</header>
	);
}
