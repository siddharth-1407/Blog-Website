import AdminLinkItem from '@/app/components/Admin/ListsAndItems/AdminLinkItem';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';
const AdminLinks = [
	{ id: 1, title: 'New Blog', path: '/dashboard/new-blog', icon: <MdOutlineArticle className={'w-6 h-6'} /> },
	{ id: 2, title: 'Edit Blog', path: '/dashboard/edit-blog', icon: <BiEdit className={'w-5 h-5'} /> },
];
export default function SideNav() {
	return (
		<aside className='fixed w-full top-14 max-w-[16rem] p-2 flex-1'>
			<nav>
				<ul className='flex flex-col divide divide-y'>
					{AdminLinks.map((link) => {
						return (
							<React.Fragment key={link.id}>
								{' '}
								<AdminLinkItem data={link} />
							</React.Fragment>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
}
