import WorkHero from '@/app/components/Client/Hero/WorkHero';
import Projects from '@/app/components/Client/WorkPage/Projects';
import React from 'react';

const page = () => {
	return (
		<main className='mx-auto w-full px-6 py-6 sm:px-20 sm:py-12 md:px-16 md:py-16 xl:px-20 xl:py-12 5xl:px-48 flex flex-col gap-4 md:gap-24'>
			<WorkHero />
			<section>
				<Projects />
			</section>
		</main>
	);
};

export default page;
