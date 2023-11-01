'use client';
import React, { MouseEvent, useEffect, useState } from 'react';
import { BiLogoYoutube } from 'react-icons/bi';
import AddYoutubeVideoModel from '../../Models/AddYoutubeVideoModel';

export default function YouTubeVideoBtn({ textarea }: { textarea: HTMLTextAreaElement | null }) {
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
				className='p-[0.3rem] h-10 sm:h-full aspect-square bg-transparent text-white italic rounded-md border border-white/50 focus:border-white focus:outline-none object-contain'>
				<BiLogoYoutube className='m-auto w-full h-full' />
			</button>
			{mounted && <AddYoutubeVideoModel textarea={textarea} setDialog={setDialog} />}
		</div>
	);
}
