'use client';
import useDebounce from '@/Hooks/useDebounce';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ImageCardPreviewResponsive({ ImageSrc }: { ImageSrc: string }) {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const src = useDebounce(ImageSrc, 2000);
	const handleLoad = () => {
		setLoading(false);
		if (error) {
			setError(false);
		}
	};

	return (
		<div className='relative my-4 min-h-[13rem] min-w-[13rem] flex justify-center object-contain bg-slate-500 lg:hidden'>
			{loading && !error && <p className='absolute '>Loading...</p>}
			{src !== '' && !src.match(/^(https:\/\/(?:images\.unsplash\.com|i\.pinimg\.com)\/.*)$/) && error && (
				<p className='absolute text-center'>Please provide a valid Image</p>
			)}
			{src !== '' && src.match(/^(https:\/\/(?:images\.unsplash\.com|i\.pinimg\.com)\/.*)$/) && (
				<Image
					className='object-contain'
					src={src}
					width={208}
					height={208}
					onLoad={handleLoad}
					onError={() => {
						setError(true);
					}}
					alt='blog-card-image'
				/>
			)}
		</div>
	);
}
