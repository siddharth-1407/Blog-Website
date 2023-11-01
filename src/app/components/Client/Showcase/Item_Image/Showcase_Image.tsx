import React from 'react';
import Image from 'next/image';

const Showcase_Image = ({ image_path, altText }: { image_path: string; altText: string }) => {
	return (
		<div className='w-1/3 lg:w-1/4 aspect-video '>
			<div className='px-[1.25vw] w-full h-full'>
				<div className='w-full h-full relative before:absolute before:contents-none before:w-full before:h-full before:top-0 before:left-0 before:z-[1]'>
					<Image src={image_path} fill={true} alt={altText} />
				</div>
			</div>
		</div>
	);
};

export default Showcase_Image;
