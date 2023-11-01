import Link from 'next/link';
import React from 'react';

type Props = {
	data: {
		id: number;
		title: string;
		path: string;
	};
	className?: string;
};
export default function GenericLink({ data, className = '' }: Props) {
	const { title, path } = data;
	return (
		<Link href={path} className={className}>
			{title}
		</Link>
	);
}
