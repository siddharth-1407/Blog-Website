import Hero from '@/app/components/Client/ServicesPage/Hero';
import ServicesSection from '@/app/components/Client/ServicesPage/ServicesSection';

export const revalidate = 0;
export default function Home() {
	return (
		<main id='smooth-wrapper' className='flex-1 '>
			<Hero />
			<ServicesSection />
		</main>
	);
}
