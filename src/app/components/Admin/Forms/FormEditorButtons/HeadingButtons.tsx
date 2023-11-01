'use client';
import React from 'react';
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from 'react-icons/lu';
import { AddHeading } from '../FormSpecialFunctions';

export default function HeadingButtons({ textarea }: { textarea: HTMLTextAreaElement | null }) {
	const headingArray = [
		{ id: 1, icon: <LuHeading1 className={'w-5 h-5'} /> },
		{ id: 2, icon: <LuHeading2 className={'w-5 h-5'} /> },
		{ id: 3, icon: <LuHeading3 className={'w-5 h-5'} /> },
		{ id: 4, icon: <LuHeading4 className={'w-5 h-5'} /> },
		{ id: 5, icon: <LuHeading5 className={'w-5 h-5'} /> },
		{ id: 6, icon: <LuHeading6 className={'w-5 h-5'} /> },
	];
	return (
		<>
			{headingArray.map((item, i) => {
				const { id, icon } = item;
				return (
					<button
						key={id}
						onClick={(e) => {
							e.preventDefault();
							AddHeading(textarea, id);
						}}
						className=' h-10 sm:h-full aspect-square bg-transparent text-white border-white text-lg font-extrabold rounded-md flex justify-center items-center border border-white/50 focus:border-white focus:outline-none'>
						{icon}
					</button>
				);
			})}
		</>
	);
}
