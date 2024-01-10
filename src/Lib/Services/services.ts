import GameDev_Image from '/public/services/game-dev.png';
import UI_Image from '/public/services/ui-design.png';
import InteriorDesign_Image from '/public/services/interior-design.png';
// import Image1 from '../../../public/websites.webp';
// import Image2 from '../../../public/brandings.webp';
// import InteriorDesign_Image from '../../../public/marketing.webp';

const services = [
	{
		title: 'Development & UI/UX Design',
		img: UI_Image,
		text: 'Crafting responsive, search engine-friendly website with instant impact, impressive users and effectively positioning your brand.',
		id: 1,
	},
	{
		title: 'Game Development',
		img: GameDev_Image,
		text: 'Using strategic thinking to develop your brand positioning and identity, from logo and visuals, to engaging tone of voice.',
		id: 2,
	},
	{
		title: 'Interior Design',
		img: InteriorDesign_Image,
		text: 'Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions',
		id: 3,
	},
];
const allServices = [
	{
		title: 'Creative Web Design',
		link: '/web-design',
		img: GameDev_Image,
		text: 'Crafting responsive, search engine-friendly website with instant impact, impressive users and effectively positioning your brand.',
		id: 1,
	},
	{
		title: 'Web Development',
		link: '/web-development',
		img: UI_Image,
		text: 'Using strategic thinking to develop your brand positioning and identity, from logo and visuals, to engaging tone of voice.',
		id: 2,
	},
	{
		title: 'Branding',
		link: '/branding',
		img: InteriorDesign_Image,
		text: 'Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions',
		id: 3,
	},
	{
		title: 'Digital Marketing',
		link: '/digital-marketing',
		img: InteriorDesign_Image,
		text: 'Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions',
		id: 4,
	},
	{
		title: 'E-Commerce',
		link: '/e-commerce',
		img: InteriorDesign_Image,
		text: 'Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions',
		id: 5,
	},
	{
		title: 'WordPress',
		link: '/wordpress',
		img: InteriorDesign_Image,
		text: 'Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions',
		id: 6,
	},
];
export { services, allServices };
