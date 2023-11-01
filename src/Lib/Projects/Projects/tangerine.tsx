import CardImage from '../../../../public/Projects/Tangerine/Card_Image.jpg';
import HeroImage from '../../../../public/Projects/Tangerine/HeroImage.webp';
import SectionImage1 from '../../../../public/Projects/Tangerine/SectionImage1.webp';
import SectionImage2 from '../../../../public/Projects/Tangerine/SectionImage2.webp';
import SectionImage3 from '../../../../public/Projects/Tangerine/SectionImage3.webp';
import SliderImage1 from '../../../../public/Projects/Tangerine/Carousel/SliderImage1.jpg';
import SliderImage2 from '../../../../public/Projects/Tangerine/Carousel/SliderImage2.jpg';
import SliderImage3 from '../../../../public/Projects/Tangerine/Carousel/SliderImage3.jpg';
import { Project } from '../../../../type';

const Project_Tangerine: Project = {
	id: 2,
	title: 'Tangerine',
	link: '/tangerine',
	filter: ['game-dev', 'design'],
	description: 'We took on the challenge of creating the new website for tangerine, a global design pioneer.',
	card_Image: CardImage,
	tags: ['Game development', 'Design', 'Unity'],
	keywords: ['Game development', 'Design', 'Unity'],
	content: {
		heroImage: HeroImage,
		sections: [
			{
				id: 1,
				title: 'The Brief',
				content:
					'We love a challenge here at KOTA, so being tasked with creating a new website for one of the world’s design pioneers was an exciting prospect.\n\n With studios in London and Seoul, tangerine designs compelling customer experiences for globally renowned brands. Their experience spans more than 30 years with countless awards, dozens of patents and game-changing products and services that have exceeded people’s expectations every single time.\n\n The goal of the project was to create a thoughtful, intuitive, inspiring website which supports their new projects, brand values and messaging.\n\n Not only that, the site needed to be multilingual, optimised for strong search/localisation performance and built using a cutting edge framework all linked to a flexible content management system.',
				images: [
					{ src: SectionImage1, alt: 'product image', type: 'contained' },
					{ src: SectionImage2, alt: 'product image', type: 'full' },
				],
			},
			{
				id: 2,
				title: 'Design',
				content:
					'We approached the design with two requirements; it must be cutting edge, and it must stand out from the competition so we started the process by experimenting with unique layouts, finding new and interesting ways to display their content whilst bringing their brand assets to life, digitally.\n\n The majority of animation seen on the site was created in After Effects and then exported using a clever little tool called Lottie. This allowed us to animate the assets using techniques normally too time consuming to be done via coding.',
				images: [],
			},
			{
				id: 3,
				title: 'Development',
				content:
					"Once the design system was established, the dev team proposed the tech stack. As the design incorporated multiple interactive components and large, high-resolution photography we decided on a headless approach using a React based framework. By utilising this technology, the site can load fast and provides the end user with a beautifully smooth experience when browsing and interacting with the elements.\n\n Another of tangerine’s tech requirements was a Wordpress CMS as they were familiar with how it functions from their previous site. As the site needed to be extremely flexible and fully multilingual, Wordpress was the perfect option, giving tangerine's marketing team complete control over every aspect of the site.",
				images: [{ src: SectionImage3, alt: 'product image', type: 'contained' }],
			},
		],
		images: [
			{ id: 1, src: SliderImage1, alt: 'slider image 1' },
			{ id: 1, src: SliderImage2, alt: 'slider image 2' },
			{ id: 1, src: SliderImage3, alt: 'slider image 3' },
		],
	},
};
export default Project_Tangerine;
