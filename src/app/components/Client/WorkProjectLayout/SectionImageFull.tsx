import Image from 'next/image';
import React from 'react';
import { WorkImage } from '../../../../../type';

export default function SectionImageFull({ imageData }: { imageData: WorkImage }) {
	const { src, alt } = imageData;
	return (
		<div className='relative mx-auto w-full aspect-video 6xl:max-w-[min(100vw,3403px)] after:absolute after:top-0 after:contents-none after:w-full after:h-full'>
			<Image src={src} placeholder='blur' width={2000} height={2000} alt={imageData.alt} className='object-cover' />
		</div>
	);
}
