import React from 'react';
import Link from 'next/link';

type Props = {
	link: string;
	title: string;
};

const NormalLink = ({ link, title }: Props) => {
	return (
		<>
			&nbsp;
			<Link href={link} target='_blank' className='text-lg text-ThemePrimary font-semibold hover:text-ThemePrimaryHover transition-colors  '>
				{title}
			</Link>
			&nbsp;
		</>
	);
};

export default NormalLink;
