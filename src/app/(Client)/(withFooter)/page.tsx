import Hero from '@/app/components/Client/Hero/Hero';
import SmoothScroll from '@/Lib/utils/SmoothScroll';
import { Fragment, Suspense } from 'react';
import ServicesSection from '../../components/Client/Sections/ServicesSection/ServicesSection';
import BlogSection from '../../components/Client/BlogSection/BlogSection';
import Section2 from '../../components/Client/Sections/Section2';
import Section3 from '../../components/Client/Sections/Section3';
import ProjectsSection from '../../components/Client/Sections/ProjectsSection';

export default async function Page() {
	return (
		<Fragment>
			<Suspense fallback={null}>
				<SmoothScroll />
			</Suspense>
			<main id='smooth-wrapper'>
				{/* <Preloader_home /> */}
				<Hero />
				<Section2 />
				<Section3 />
				<ServicesSection />
				<ProjectsSection />
				<BlogSection />
			</main>
		</Fragment>
	);
}
