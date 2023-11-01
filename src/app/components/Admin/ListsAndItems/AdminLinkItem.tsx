import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
	data: {
		id: number;
		title: string;
		path: string;
		icon: ReactNode;
	};
};

export default function AdminLinkItem({ data }: Props) {
	const { path, title, icon } = data;
	return (
		<li className='py-2'>
			<div className='text-white bg-white/20 rounded-md flex'>
				<Link href={path} className='w-full px-4 py-2 flex items-center gap-6'>
					<span>{icon}</span>
					<span>{title}</span>
				</Link>
			</div>
		</li>
	);
}
