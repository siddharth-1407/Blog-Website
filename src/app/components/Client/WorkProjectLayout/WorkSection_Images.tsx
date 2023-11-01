import React from 'react';
import SectionImageFull from './SectionImageFull';
import SectionImageContained from './SectionImageContained';
import { WorkImage } from '../../../../../type';

type Props = {
	images: WorkImage[];
};
export default function WorkSection_Images({ images }: Props) {
	return (
		<div className='flex flex-col py-4 xl:py-8'>
			{images?.map((image: WorkImage) => {
				return image.type === 'full' ? <SectionImageFull imageData={image} /> : <SectionImageContained imageData={image} />;
			})}
		</div>
	);
}
