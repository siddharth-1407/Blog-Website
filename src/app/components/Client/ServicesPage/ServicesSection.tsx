import React from 'react';
import Image from 'next/image';
import { allServices } from '@/Lib/Services/services';

const ServicesSection = () => {
	return (
		<div className='flex flex-col gap-16 lg:gap-0 py-8 lg:pt-0 pb-16 '>
			{allServices?.map((service, i) => {
				const id = service.link.slice(1);
				return (
					<div
						key={service.id}
						id={id}
						className={`flex lg:scroll-m-24 md:mx-auto md:px-16 5xl:px-44 ${
							i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
						}`}>
						<div className={` lg:w-[45%] flex flex-col gap-12`}>
							<div className='flex flex-col gap-4 lg:min-h-[85vh] md:justify-center'>
								<div className={`flex flex-col gap-6 px-6 ${i % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
									<h2 className='w-full md:max-w-[85%] text-ThemeSecondary text-4xl 5xl:text-6xl font-extrabold'>
										{service.title}
									</h2>
									<p className='text-ThemeSecondary font-medium text-lg lg:text-xl 5xl:text-3xl md:max-w-[85%] 5xl:leading-normal'>
										Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life
										online.
									</p>
								</div>

								<div className=' lg:hidden px-6'>
									<div className='relative max-w-lg  rounded-xl overflow-hidden h-full '>
										<Image src={service.img} placeholder='blur' width={512} height={512} alt='image' />
									</div>
								</div>
							</div>
						</div>
						<div className='hidden lg:flex lg:w-[55%] lg:flex-col relative'>
							<div className='min-h-[85vh] flex  items-center '>
								<div className='relative w-full aspect-[1.59997258414]  '>
									<Image
										src={service.img}
										placeholder='blur'
										width={850}
										height={512}
										alt='image'
										className='photo rounded-3xl absolute w-full h-full '
									/>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ServicesSection;
