import CardImage from '/public/Projects/GameDev/trump card game/card.png';
import HeroImage from '/public/Projects/GameDev/trump card game/hero.png';
import SectionImage1 from '/public/Projects/GameDev/trump card game/a.png';
import SliderImage1 from '/public/Projects/GameDev/trump card game/a.png';
import SliderImage2 from '/public/Projects/GameDev/trump card game/b.png';
import { Project } from '../../../../type';

const Project_GameDev_TrumpCards: Project = {
	id: 2,
	title: 'Bringing Cricket Fever to Your Fingertips',//:\n\nThe Ultimate Cricket Cards Game for Indian Fans',
	link: '/trumpcards',
	filter: ['game-dev', 'design'],
	description: 'Developing a match 2 and 3 game using unity for android and IOS platform.',
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
					'Cricket is not just a sport in India; it\'s a way of life, a passion that unites millions across the nation. With the advent of technology, the love for cricket has found a new avenue to flourish - mobile gaming. Imagine a game that combines the thrill of cricket with the excitement of card games, all while allowing you to compete with fellow fans in real-time matches, and even win real money prizes. Enter the world of Trump Card Mania, a revolutionary cricket cards game designed exclusively for the Indian audience.',
				images: [
					{ src: SectionImage1, alt: 'product image', type: 'contained' }
				],
			},
			{
				id: 2,
				title: 'The Genesis of Trump Cards Mania',
				content:
					'Before the frenzy of IPL gripped the nation, there was a void in the gaming market for a cricket-themed card game that catered specifically to the tastes and preferences of Indian fans. That\'s where Trump Cards Mania comes into play. Developed using cutting-edge Unity technology and available on the Android platform, Trump Cards Mania seamlessly blends the strategic elements of card games with the thrill of cricket.',
				images: [],
			},
			{
				id: 3,
				title: 'Features Tailored for Indian Cricket Enthusiasts',
				content:
					"1. Online Multiplayer Gameplay: Say goodbye to solitary gaming experiences. With Trump Card Mania, you can challenge friends or compete against fellow cricket enthusiasts from across the country in real-time multiplayer matches.\n2. Real Money Betting: Elevating the stakes, Trump Card Mania allows players to bet real money on matches. The winner takes home the total amount of the bet, adding an extra layer of excitement and competition to each game.\n3. Cultural Sensitivity in Design: From vibrant visuals depicting iconic cricket stadiums to meticulously crafted card designs showcasing beloved cricket legends, every aspect of Trump Card Mania resonates with the rich tapestry of Indian culture.\n4. Seamless User Experience: User-friendliness is paramount, and Trump Card Mania excels in this aspect. With intuitive controls and a streamlined interface, even novice gamers can dive straight into the action without any hassle.\n5. Immersive Gameplay and Sound: Feel the adrenaline rush as you make strategic decisions and outmaneuver your opponents. Trump Card Mania delivers an immersive gaming experience, complemented by captivating sound effects that transport you to the heart of the cricketing arena.\n6. Responsive Customer Service: Have a query or encountering an issue? Fear not! Trump Card Mania boasts a dedicated customer service team, ready to assist players and ensure a smooth gaming experience for all.\n7. Advanced Analytics: To continuously enhance the gaming experience, Trump Card Mania incorporates robust analytics tools to study user behavior, gather feedback, and implement improvements based on player preferences.",
				images: [],
			},
			{
				id: 8,
				title: 'Conclusion',
				content:
					"Whether you're a die-hard cricket aficionado or a casual gamer looking for some excitement, Trump Card Mania has something for everyone. Immerse yourself in the world of cricket, challenge your friends, and compete for real money prizes - all from the comfort of your smartphone. Experience the thrill of Trump Card Mania today and redefine how you play and perceive cricket games.",
				images: [],
			}
		],
		images: [
			{ id: 1, src: SliderImage1, alt: 'slider image 1' },
			{ id: 2, src: SliderImage2, alt: 'slider image 2' }
		],
	},
};
export default Project_GameDev_TrumpCards;
