import PrivacyPolicy from '@/app/components/Client/PrivacyPolicy/PrivacyPolicyWrapper';
import React from 'react';

export default function page() {
	return (
		<main className='mx-auto px-6 py-12 sm:px-20 sm:pt-12 md:px-16 md:pt-16 lg:px-32 xl:pt-12 5xl:px-48 w-full flex-1 min-h-screen flex flex-col gap-8 md:gap-12'>
			<div className='flex flex-col gap-4 4xl:gap-12'>
				<h1 className='font-extrabold text-ThemePrimary text-3xl sm:text-4xl 4xl:text-6xl'>Privacy Notice</h1>
				<p className='text-sm font-light sm:text-xs lg:text-sm 3xl:text-lg 3xl:font-medium text-Text_blogHeading'>
					This is the privacy notice of Kota Creative Ltd. In this document, “we”, “our”, or “us” refer to Kota Creative Ltd.
					<br />
					<br /> We are company number 08825077 registered in London.
					<br /> <br /> Our registered office is at 74 Great Eastern St.
				</p>
			</div>
			<PrivacyPolicy />
		</main>
	);
}
