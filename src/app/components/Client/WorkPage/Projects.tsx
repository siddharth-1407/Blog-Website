'use client';
import React, { useEffect, useState } from 'react';
import projects from '@/Lib/Projects';
import FilterProjects from './FilterProjects';
import { TbGhost2 } from 'react-icons/tb';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import FilterProjectsResponsive from './FilterProjectsResponsive';
import ProjectCardForProjectsPage from '../Projects/ProjectCardForProjectsPage';
import Styles from '@/app/Styles/projectCard.module.css';
import { filterProjects } from '../../../../../type';

const Projects = () => {
	const [filter, setFilter] = useState<filterProjects | null>(null);
	const [filterProjects, setFilterProjects] = useState(projects);

	useEffect(() => {
		let filtered = projects.filter((item) => item.filter.includes(filter));
		if (filter === null) return setFilterProjects(projects);
		setFilterProjects(filtered);
	}, [filter]);

	return (
		<div className='relative flex flex-col  gap-4 sm:gap-16 pb-10 xl:gap-20'>
			<div className='xl:absolute xl:left-1/2 xl:top-7 xl:translate-x-12 5xl:translate-x-16 xl:w-fit flex z-10'>
				<FilterProjectsResponsive filter={filter} setFilter={setFilter} />
				<FilterProjects filter={filter} setFilter={setFilter} />
			</div>
			{filterProjects.length > 0 ? (
				<ul className='flex gap-y-10 3xl:gap-y-16 gap-x-16 flex-col sm:grid sm:grid-cols-2 xl:gap-x-24 5xl:gap-x-32'>
					<AnimatePresence>
						<LayoutGroup>
							{filterProjects.map((project, i) => {
								return (
									<motion.li layout key={project.id} className={`flex xl:aspect-[0.595] ${Styles.projectCard}`}>
										<ProjectCardForProjectsPage index={i} article={project} />
									</motion.li>
								);
							})}
						</LayoutGroup>
					</AnimatePresence>
				</ul>
			) : (
				<div className='flex flex-col justify-center items-center xl:mt-36 xl:mb-16'>
					<TbGhost2 className='w-full h-full max-w-[15rem] text-gray-300' />
					<p className='text-3xl text-gray-400 font-extrabold select-none'>No Projects yet!</p>
				</div>
			)}
		</div>
	);
};

export default Projects;
