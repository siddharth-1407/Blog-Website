'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { AnimatePresence, motion } from 'framer-motion';
import { filterProjects } from '../../../../../type';
import categories from '@/Lib/Projects/ProjectCategories';

const options = {
	initial: {
		height: 0,
	},
	show: {
		height: 'auto',
	},
	hide: {
		height: 0,
	},
};
type Props = {
	filter: filterProjects | null;
	setFilter: Dispatch<SetStateAction<filterProjects | null>>;
};
const FilterProjectsResponsive = ({ filter, setFilter }: Props) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleFilter = (filter: filterProjects | null) => {
		setFilter(filter);
		setOpen(false);
	};
	return (
		<div className='xl:hidden flex pb-8 md:pb-0 '>
			<motion.div id='wrapper' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3, ease: 'linear' } }}>
				<button
					aria-expanded={open ? true : false}
					onClick={() => setOpen(!open)}
					className='flex items-center gap-2 text-ThemePrimary text-xl md:text-2xl font-extrabold '>
					<p className=''>Filter</p>
					<GoTriangleDown className={`${open ? 'rotate-180' : 'rotate-0'} transition-transform`} />
				</button>
				<AnimatePresence>
					<motion.div
						className='overflow-hidden mt-4'
						inert={open ? false : ''}
						variants={options}
						initial={'initaial'}
						animate={open ? 'show' : 'hide'}>
						<ul className='flex flex-col gap-2'>
							{categories.map((category, i) => {
								return (
									<li key={category.id} className='px-4'>
										<button
											onClick={() => handleFilter(category.filter)}
											className={`py-1 px-2 text-ThemePrimary text-xl font-extrabold border-2 ${
												filter === category.filter ? 'border-ThemePrimary' : 'border-transparent'
											}`}>
											{category.title}
										</button>
									</li>
								);
							})}
						</ul>
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default FilterProjectsResponsive;
