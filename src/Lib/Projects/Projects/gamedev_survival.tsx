import CardImage from '../../../../public/Projects/GameDev/Survival/survivalcard.png';
import HeroImage from '../../../../public/Projects/GameDev/Survival/game 2.png';
import SectionImage1 from '../../../../public/Projects/GameDev/Survival/game 5.png';
import SliderImage1 from '../../../../public/Projects/GameDev/Survival/game 6.png';
import SliderImage2 from '../../../../public/Projects/GameDev/Survival/game 10.png';
import SliderImage3 from '../../../../public/Projects/GameDev/Survival/game 11.png';
import { Project } from '../../../../type';

const Project_GameDev_Survival: Project = {
	id: 2,
	title: 'Survival - FPS shooter',
	link: '/survival',
	filter: ['game-dev', 'design'],
	description: 'We’ll delve into the fascinating world of developing a first-person shooter (FPS) game with a unique twist – time-shifting abilities – set in a procedurally generated city.',
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
					'The concept revolves around an FPS game where players are equipped with the ability to manipulate time. This introduces an extra layer of strategy and creativity, as players can freeze, rewind, or accelerate time during intense combat scenarios. The setting is a procedurally generated city, ensuring a dynamic and ever-changing environment for players to explore. To enhance the gaming experience, players have access to two primary weapons – a rifle and grenades. Additionally, enemies are equipped with advanced AI, and players can collect power-ups such as health points, grenade pickups, and ammo pickups.',
				images: [
					{ src: SectionImage1, alt: 'product image', type: 'contained' }
				],
			},
			{
				id: 2,
				title: 'Design',
				content:
					'The core of the game revolves around the time-shifting mechanic. Players must strategically use their abilities to navigate through challenging situations, outsmart enemies, and solve environmental puzzles. Each time-shifting ability should have distinct advantages and disadvantages, creating a balanced and engaging gameplay experience.\n\n The decision to set the game in a procedurally generated city adds an element of unpredictability. The city layout, building placement, and even the time of day can vary from one playthrough to another. This ensures that players are constantly challenged and encourages replayability, as they explore different versions of the city with each session.\n\n The inclusion of two primary weapons – a rifle and grenades – adds variety to the gameplay. The rifle provides accurate and sustained fire, while grenades offer a powerful area-of-effect option. Enemies, equipped with advanced AI, adapt to the player’s strategies, providing a challenging and dynamic combat experience.\n\n To keep players engaged, power-ups play a crucial role. Health points, grenade pickups, and ammo pickups are strategically placed throughout the city. Players must balance the use of time-shifting abilities with the need to collect these power-ups to survive and progress through the game.',
				images: [],
			},
			{
				id: 3,
				title: 'Conceptualization and Planning',
				content:
					"Before diving into development, create a detailed game design document (GDD) outlining the core mechanics, level designs, and overall vision. Establish a roadmap that includes milestones and deadlines to keep the development process organized.",
				images: [],
			},
			{
				id: 4,
				title: 'Unity Setup',
				content:
					"Set up a new Unity project in unity 2022.3.15f1 with the necessary assets, including 3D models for the city, characters, weapons, and special effects. Ensure that the Unity Editor is equipped with essential plugins and tools.",
				images: [],
			},
			{
				id: 5,
				title: 'Time-Shifting Mechanics',
				content:
					"Implement the time-shifting mechanics using Unity's scripting system (C#). Create custom scripts for freezing, rewinding, and accelerating time. Test and refine these mechanics to ensure a smooth and intuitive player experience.",
				images: [],
			},
			{
				id: 6,
				title: 'Procedural Generation',
				content:
					"Created a custom procedural generation tools using the wave function collapse algorithm to create the city. This involves generating building layouts, street patterns, and environmental elements dynamically. Fine-tune the parameters to balance randomness and structure, providing an exciting cityscape.",
				images: [],
			},
			{
				id: 7,
				title: 'Weapons and Enemies',
				content:
					"Implement the rifle and grenade mechanics, including shooting, reloading, and grenade throwing. Develop advanced AI for enemies, ensuring they respond intelligently to the player's actions and create challenging combat scenarios.",
				images: [],
			},
			{
				id: 8,
				title: 'Power-Ups',
				content:
					"Integrate the power-up system, allowing players to collect health points, grenade pickups, and ammo pickups strategically. Implement systems for spawning and managing these power-ups throughout the game.",
				images: [],
			},
			{
				id: 9,
				title: 'Playtesting and Iteration',
				content:
					"Regular playtesting is crucial to identifying and resolving bugs, balancing gameplay, and refining the overall user experience. Gather feedback from playtesters to make informed decisions for further iterations.",
				images: [],
			},
			{
				id: 10,
				title: 'Optimization and Polish',
				content:
					"Optimize the game for performance by refining code, textures, and models. Add polish to the visuals, audio, and user interface to enhance the overall quality and appeal of the game.",
				images: [],
			},
			{
				id: 11,
				title: 'Conclusion',
				content:
					"Developing an FPS game with time-shifting abilities in a procedurally generated city, complete with weapons, advanced AI enemies, and power-ups, is a complex yet rewarding endeavor. Unity's versatile capabilities make it an ideal choice for bringing such a unique concept to life. By combining innovative design approaches with a meticulous development process, we created an immersive and memorable gaming experience that captivates players with its dynamic gameplay and ever-changing cityscape.",
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
export default Project_GameDev_Survival;
