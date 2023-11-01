import Image from 'next/image';
import React from 'react';
import { WorkImage } from '../../../../../type';

export default function SectionImageContained({ imageData }: { imageData: WorkImage }) {
	const { src, alt } = imageData;
	return (
		<div className='relative py-14 3xl:py-24 after:absolute after:top-0 after:contents-none after:w-full after:h-full '>
			<Image
				src={src}
				placeholder='blur'
				width={1300}
				height={1300}
				alt={alt}
				className='w-full max-w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-8rem)] lg:max-w-[calc(80vw-4rem)] xl:max-w-[calc(70vw-8rem)] mx-auto 6xl:max-w-[1300px] shadow-2xl'
			/>
		</div>
	);
}
