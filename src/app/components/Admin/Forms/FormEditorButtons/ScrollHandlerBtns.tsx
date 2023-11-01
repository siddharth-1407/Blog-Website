import React from 'react';
import { GoMoveToTop } from 'react-icons/go';
import { HandleScroll } from '../FormSpecialFunctions';

const ScrollHandler = [
	{ id: 1, icon: <GoMoveToTop className='m-auto w-full aspect-square' />, direction: -1 },
	{ id: 2, icon: <GoMoveToTop className='m-auto w-full rotate-180 aspect-square' />, direction: 1 },
];

export default function ScrollHandlerBtns({ textarea }: { textarea: HTMLTextAreaElement | null }) {
	return (
		<>
			{ScrollHandler?.map((item) => {
				const { id, icon, direction } = item;
				return (
					<button
						key={id}
						onClick={(e) => {
							HandleScroll(e, textarea, direction);
						}}
						className='p-[0.3rem] h-10 aspect-square bg-black/50 text-white italic rounded-md border border-white/50 focus:border-white focus:outline-none '>
						{icon}
					</button>
				);
			})}
		</>
	);
}
