import React from 'react';
import ServicesItem from './ServicesItem/ServicesItem';

const ServicesSection = () => {
	const services = [
		{
			title: 'Web Dev',
			desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ea nulla sint natus eaque tenetur consequuntur facere fugiat labore.',
			path: '/web-dev',
		},
		{
			title: 'Game Dev',
			desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ea nulla sint natus eaque tenetur consequuntur facere fugiat labore.',
			path: '/game-dev',
		},
		{
			title: 'UI/UX Design',
			desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ea nulla sint natus eaque tenetur consequuntur facere fugiat labore.',
			path: '/ui-ux-design',
		},
		{
			title: 'Marketing & SEO',
			desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ea nulla sint natus eaque tenetur consequuntur facere fugiat labore.',
			path: '/marketing-and-seo',
		},
	];
	return (
		<div className='px-6 py-12 h-fit overflow-hidden bg-white'>
			<section className=' flex  justify-center max-w-5xl xl:max-w-6xl 2xl:max-w-[82.5rem] mx-auto mt-8'>
				<div className='flex flex-col gap-12'>
					<h3 className='text-center text-5xl text-black'>Services We offer</h3>
					<div className='flex flex-col mx-6 text-black'>
						{services.map((service) => {
							const { title, desc, path } = service;
							return (
								<React.Fragment key={path}>
									<ServicesItem title={title} desc={desc} path={path} />
								</React.Fragment>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServicesSection;
