import ImageBig from '../../../../public/Projects/WoganCoffee/Card_ImageBig.png';
import HeroImage from '../../../../public/Projects/WoganCoffee/HeroImage.webp';
import SectionImage1 from '../../../../public/Projects/WoganCoffee/SectionImage1.webp';
import SliderImage1 from '../../../../public/Projects/WoganCoffee/Carousel/SliderImage1.jpg';
import SliderImage2 from '../../../../public/Projects/WoganCoffee/Carousel/SliderImage2.jpg';
import SliderImage3 from '../../../../public/Projects/WoganCoffee/Carousel/SliderImage3.jpg';
import { Project } from '../../../../type';

const Project_WagonCoffee: Project = {
	id: 1,
	title: 'Wagon Coffee',
	link: '/wagon-coffee',
	filter: ['marketing'],
	description: "We completely transformed the image of Bristol's finest coffee company.",
	card_Image: ImageBig,
	tags: ['branding', 'e-commerce', 'marketing'],
	keywords: ['branding', 'e-commerce', 'marketing'],
	content: {
		heroImage: HeroImage,
		sections: [
			{
				id: 1,
				title: 'The Brief',
				content:
					"Wogan are an independent, family-run coffee company. It was established by the bowler-hatted Mr Wogan in Bristol in 1970. They have been roasting some of the highest quality coffee, with hundreds of varieties, for cafes and customers across the country. They also provide tea, machinery, barista training and even white-label roasting for B2B customers.\n\n As it sometimes happens with multi-generation businesses, over the years their brand became neglected and was in need of a serious boost. They reached out to us for creative guidance on branding, packaging, as well as the website and digital marketing. We even helped them update the look of their cafe and delivery vans!\n\n We're really pleased with the result of our partnership and are excited to help the third-generation Wogans grow the business into a nationally recognisable brand",
				images: [{ src: SectionImage1, alt: 'product image', type: 'full' }],
			},
		],
		images: [
			{ id: 1, src: SliderImage1, alt: 'slider image 1' },
			{ id: 1, src: SliderImage2, alt: 'slider image 2' },
			{ id: 1, src: SliderImage3, alt: 'slider image 3' },
		],
	},
};
export default Project_WagonCoffee;
