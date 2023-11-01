'use client';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';

type Props = {
	title: String;
	desc: String;
	path: Url;
};
const ServicesItem = ({ title, desc, path }: Props) => {
	return (
		<Link
			href={path}
			className='group/service first-of-type:border-t last-of-type:border-t-0 border-b last-of-type:border-b border-slate-400/50 hover:px-1 hover:text-white/70 transition-all'>
			<div className='py-8 flex'>
				<div className='w-1/3 text-2xl flex items-center'>{title}</div>
				<div className='desc w-1/2'>{desc}</div>
				<div className='ml-auto w-14 h-14 p-3 aspect-square rounded-full grid items-center border-2 group-hover/service:bg-white/70 transition-color duration-[400ms]'>
					<MdArrowForward className='w-full h-full -rotate-45  group-hover/service:text-black transition-all duration-[400ms]' />
				</div>
			</div>
		</Link>
	);
};

export default ServicesItem;
