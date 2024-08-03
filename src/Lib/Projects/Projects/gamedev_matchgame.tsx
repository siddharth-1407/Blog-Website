import CardImage from '../../../../public/Projects/GameDev/matchgame/matchcard.png';
import HeroImage from '../../../../public/Projects/GameDev/matchgame/hero.png';
import SectionImage1 from '../../../../public/Projects/GameDev/matchgame/a.png';
import SliderImage1 from '../../../../public/Projects/GameDev/matchgame/b.png';
import SliderImage2 from '../../../../public/Projects/GameDev/matchgame/c.png';
import SliderImage3 from '../../../../public/Projects/GameDev/matchgame/a.png';
import { Project } from '../../../../type';

const Project_GameDev_MatchGame: Project = {
	id: 2,
	title: 'Crafting a Match 2 and 3 Game: A Unity3D Journey',
	link: '/matchgame',
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
					'In the ever-expanding world of mobile gaming, match 2 and 3 games have carved out a special place. These addictive puzzles challenge players to match identical objects while offering a rewarding experience. Today, we delve into the process of developing such a game for Android and iOS using the Unity game engine. Join us on this exciting journey through designing mechanics, UI, animations, programming, and integrating essential features like Facebook SDK, Google Ads, and Firebase Analytics.',
				images: [
					{ src: SectionImage1, alt: 'product image', type: 'contained' }
				],
			},
			{
				id: 2,
				title: 'Designing Mechanics and UI',
				content:
					'At the heart of our game lies the captivating mechanics of matching identical objects. This involves meticulous planning to ensure smooth gameplay progression and engaging challenges. Through Unity intuitive interface, we crafted levels, implemented power-ups, and introduced obstacles to keep players hooked. UI design is equally crucial for enhancing user experience. We focused on creating intuitive interfaces that guide players seamlessly through the game. Clear visual cues and appealing layouts were essential to maintaining player engagement.',
				images: [],
			},
			{
				id: 3,
				title: 'Crafting Animations',
				content:
					"Animations breathe life into our game, making interactions vibrant and immersive. Unity's animation tools enabled us to bring objects to life with smooth transitions and delightful effects. From cascading matches to explosive combos, animations added a layer of excitement to every gameplay session.",
				images: [],
			},
			{
				id: 4,
				title: 'Programming the Game',
				content:
					"The backbone of our game lies in its codebase. Through Unity's scripting capabilities, we programmed gameplay mechanics, UI interactions, and backend functionalities. Clean and efficient code ensured optimal performance across various devices, offering a seamless gaming experience to our players.",
				images: [],
			},
			{
				id: 5,
				title: 'Implementing Multiplayer Functionality',
				content:
					"The allure of competing with friends and strangers alike drove us to implement multiplayer functionality. Through Unity's networking capabilities along with a backend written in nodejs and photon pun, we created a seamless online multiplayer experience where players could compete in real-time matches. Leaderboards added a competitive edge, fueling players' desire to climb the ranks and assert their dominance.",
				images: [],
			},
			{
				id: 6,
				title: 'Building Villages and In-Game Shop',
				content:
					"To add depth to our game, we introduced a village-building mechanic. Players could use earned resources to construct buildings and unlock new features, fostering a sense of progression and accomplishment. An in-game shop offered additional customization options and power-ups, providing players with meaningful choices to enhance their gameplay experience.",
				images: [],
			},
			{
				id: 7,
				title: 'Integrating Essential Features',
				content:
					"To maximize our game's reach and revenue potential, we integrated essential features like Facebook SDK, Google Ads, and Firebase Analytics. Facebook SDK enabled social interactions, allowing players to challenge friends and share achievements. Google Ads provided monetization opportunities through strategic ad placements. Firebase Analytics offered invaluable insights into player behavior, helping us refine and optimize our game over time.",
				images: [],
			},
			{
				id: 8,
				title: 'Conclusion',
				content:
					"Developing a match 2 and 3 game for Android and iOS using Unity was a challenging yet rewarding endeavor. From designing mechanics and UI to programming and integrating essential features, every step of the journey brought us closer to creating an immersive and engaging gaming experience. With multiplayer functionality, in-game shops, and leaderboards, our game offers endless opportunities for players to challenge themselves and connect with others. As we continue to iterate and refine our creation, we look forward to sharing it with the world and witnessing the joy it brings to players worldwide.",
				images: [],
			}
		],
		images: [
			{ id: 1, src: SliderImage1, alt: 'slider image 1' },
			{ id: 2, src: SliderImage2, alt: 'slider image 2' },
			{ id: 3, src: SliderImage3, alt: 'slider image 3' }
		],
	},
};
export default Project_GameDev_MatchGame;
