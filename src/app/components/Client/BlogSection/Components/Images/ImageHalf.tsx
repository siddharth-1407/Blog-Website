import Image from 'next/image';
import React from 'react';

type Props = {
	link: string;
	alt: string;
};
const ImageHalf = ({ link, alt }: Props) => {
	return (
		<div className='flex justify-center my-3 md:my-6 '>
			<div className='md:w-1/2 relative after:absolute after:contents-none after:top-0 after:left-0 after:inset-0 '>
				<Image src={link} width={500} height={500} alt={alt} className='w-full h-full  max-w-5xl' />
			</div>
		</div>
	);
};

export default ImageHalf;
