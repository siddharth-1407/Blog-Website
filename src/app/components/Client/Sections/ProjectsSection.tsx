import React from 'react';
import Link from 'next/link';
import projects from '@/Lib/Projects';
import ProjectCard from '../Projects/ProjectCard';
import Styles from '@/app/Styles/projectCard.module.css';

const ProjectsSection = () => {
	return (
		<section className='bg-ThemeBackgroundDark mx-auto px-6 py-6 sm:px-20 sm:py-12 md:px-16 xl:px-20 md:py-20 xl:py-24  3xl:py-28 5xl:px-48'>
			<div className='flex flex-col gap-16 pb-10 xl:gap-20'>
				<div className='flex flex-col sm:flex-row sm:mb-16'>
					<h2 className='text-ThemePrimary font-extrabold text-[20vh] sm:flex-1 sm:text-[15vh] lg:text-[20vh] 3xl:text-[25vh] xl:leading-snug 3xl:leading-tight '>
						<p className='flex flex-wrap xl:w-2/3 xl:mx-auto'>
							<span className='w-1/2 flex justify-center'>W</span>
							<span className='w-1/2 flex justify-center'>O</span>
							<span className='w-1/2 flex justify-center'>R</span>
							<span className='w-1/2 flex justify-center'>K</span>
						</p>
					</h2>
					<p className='relative text-center text-white font-bold leading-snug text-5xl sm:text-5xl sm:flex-1 sm:self-end sm:top-10 sm:leading-snug md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-8xl 3xl:text-[6.5rem]'>
						Shit-hot work for hot-shot brands
					</p>
				</div>
				<div className='flex gap-y-10 gap-x-16 flex-col sm:grid sm:grid-cols-2 xl:gap-x-20 5xl:gap-x-24'>
					{projects.map((project) => {
						return (
							<li key={project.id} className={`flex items-center xl:aspect-[0.595] ${Styles.projectCard}`}>
								<ProjectCard key={project.id} article={project} dark={true} />;
							</li>
						);
					})}
				</div>
				<div className='flex justify-center text-center'>
					<Link
						href={'/work'}
						className='w-fit px-6 py-4 md:px-6 md:py-3 lg:px-8 lg:py-4 lg:top-6 5xl:top-10 relative self-start uppercase font-semibold tracking-widest text-white text-base rounded-full border md:border-2 border-white hover:text-ThemePrimary hover:bg-white transition-colors focus-visible:outline-none focus-visible:text-ThemePrimary focus-visible:bg-white'>
						See all projects
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
