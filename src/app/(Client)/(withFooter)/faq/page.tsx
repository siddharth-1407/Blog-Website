import Faqs from '@/app/components/Client/Faqs/Faqs';
import React from 'react';

export default function page() {
	return (
		<>
			<div className='mx-auto px-4 py-12 sm:px-20 sm:pt-12 md:px-16 md:pt-16 xl:px-20 xl:pt-12 5xl:px-48 w-full flex flex-col gap-8 md:gap-24 lg:gap-12'>
				<h1 className='text-center text-3xl sm:text-4xl lg:text-5xl text-Text_blogHeading font-extrabold'>Working with KOTA</h1>
				<p className='text-center text-ThemeSecondary font-semibold mx-auto max-w-xl text-lg sm:text-xl lg:max-w-2xl lg:text-2xl lg:leading-relaxed 5xl:max-w-xl 5xl:text-2xl'>
					Below we provide some useful guidance that will save you some time in helping to establish if we might be a good fit for you or
					your project.
				</p>
			</div>
			<main className='flex-1 mx-auto px-6 mb-8 py-6 sm:px-20 sm:py-12 md:px-28 md:py-16 xl:px-28 xl:py-12 5xl:px-48 w-full flex flex-col gap-4'>
				<Faqs />
			</main>
		</>
	);
}
