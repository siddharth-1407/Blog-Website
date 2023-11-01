'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { filterProjects } from '../../../../../type';
import categories from '@/Lib/Projects/ProjectCategories';

const List = {
	initial: {
		opacity: 0,
	},
	appear: {
		opacity: 1,
		transition: {
			ease: 'linear',
			delay: 0.8,
		},
	},
};
type Props = {
	filter: filterProjects | null;
	setFilter: Dispatch<SetStateAction<filterProjects | null>>;
};

const FilterProjects = ({ filter, setFilter }: Props) => {
	return (
		<div className='hidden xl:flex h-fit'>
			<ul className='flex flex-wrap lg:gap-3'>
				{categories.map((category) => {
					return (
						<motion.li key={category.id} variants={List} initial={'initial'} animate={'appear'}>
							<button
								onClick={() => setFilter(category.filter)}
								className={`2xl:px-6 2xl:py-3 xl:px-4 xl:py-2 5xl:px-4 5xl:py-3  ${
									filter === category.filter ? 'border-ThemePrimary' : 'border-transparent'
								}  border-2 text-ThemePrimary font-extrabold text-[min(1.4vw,1.25rem)] 5xl:text-2xl `}>
								{category.title}
							</button>
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
};

export default FilterProjects;
