import Image from 'next/image';
import React from 'react';

type Props = {
	link: string;
	alt: string;
};
const ImageFull = ({ link, alt }: Props) => {
	return (
		<div className='relative after:absolute after:contents-none after:top-0 after:left-0 after:inset-0 '>
			<Image src={link} width={1000} height={1000} alt={alt} className='w-full h-full aspect-auto ' />
		</div>
	);
};

export default ImageFull;
