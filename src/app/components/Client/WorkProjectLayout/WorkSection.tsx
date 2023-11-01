import React from 'react';
import WorkSection_Content from './WorkSection_Content';
import WorkSection_Images from './WorkSection_Images';
import { WorkImage } from '../../../../../type';

type Props = {
	section: {
		index: number;
		title: string;
		content: string;
		images: WorkImage[]
	};
};

export default function WorkSection({ section }: Props) {
	const { images, title, index, content } = section;
	return (
		<>
			<WorkSection_Content data={{ title, index, content }} />
			{images?.length > 0 && <WorkSection_Images images={images} />}
		</>
	);
}
