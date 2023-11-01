'use client';
import React, { MouseEvent, useEffect, useState } from 'react';
import { BiSolidImageAlt } from 'react-icons/bi';
import AddImageModel from '../../Models/AddImageModel';

export default function ImageBtn({ textarea }: { textarea: HTMLTextAreaElement | null }) {
	const [mounted, setMounted] = useState<boolean>(false);
	const [dialog, setDialog] = useState<HTMLDialogElement | null>(null);
	useEffect(() => {
		setMounted(true);
	}, []);
	const handleDialog = (e: MouseEvent) => {
		e.preventDefault();
		if (dialog) {
			return dialog.showModal();
		}
		return console.error('Dialog is undefined');
	};
	return (
		<div className='relative w-10 aspect-square'>
			<button
				onClick={handleDialog}
				className='p-[0.3rem]  h-10 sm:h-full aspect-square bg-transparent text-white italic rounded-md font-bold  border border-white/50 focus:border-white focus:outline-none object-contain'>
				<BiSolidImageAlt className='m-auto w-full h-full' />
			</button>
			{mounted && <AddImageModel textarea={textarea} setDialog={setDialog} />}
		</div>
	);
}
