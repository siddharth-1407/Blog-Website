import React from 'react';
import Hero_workLayout from './Hero_workLayout';
import Carousel from '../Swiper/Carousel';
import WorkSection from './WorkSection';
import { Project, ProjectContent_Section } from '../../../../../type';

const images2 = [
	{
		id: 1,
		src: 'https://i.pinimg.com/736x/88/be/7b/88be7b36cabde57783edf3bb0563c3fe.jpg',
		alt: 'image 1',
	},
	{ id: 2, src: 'https://i.pinimg.com/564x/78/a2/57/78a257dd61f47c26fd7f4859c092343a.jpg', alt: 'image 2' },
	{ id: 3, src: 'https://i.pinimg.com/564x/78/a2/57/78a257dd61f47c26fd7f4859c092343a.jpg', alt: 'image 3' },
];

export default function WorkProjectLayout({ data }: { data: Project }) {
	return (
		<div className='min-h-screen flex flex-col gap-10 lg:gap-8 xl:gap-4 '>
			<Hero_workLayout src={data.content.heroImage}/>
			<h1 className='text-Text_blogHeading text-center text-[2rem] md:text-4xl lg:text-5xl 5xl:text-7xl font-extrabold'>{data.title}</h1>
			<div className='mt-8 mx-auto sm:mt-14 md:mt-24 lg:mt-32 5xl:mt-52 w-full'>
				{data.content.sections.map((section: ProjectContent_Section, i: number) => {
					return (
						<React.Fragment key={i}>
							<WorkSection section={{ ...section, index: i + 1 }} />
						</React.Fragment>
					);
				})}
			</div>

			<Carousel ImageArray={images2} />
		</div>
	);
}
