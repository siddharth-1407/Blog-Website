import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
	data: { title: string; link: string; id: number };
	setOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarItem = ({ data, setOpen }: Props) => {
	const pathname = usePathname();

	return (
		<Link
			href={data.link}
			className={`font-extrabold text-[3.5rem] md:text-6xl lg:text-[4rem] 5xl:text-[5rem] leading-[1.1] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none ${
				pathname === data.link ? 'text-white' : 'text-black/25'
			}`}
			onClick={() => setOpen(false)}>
			{data.title}
		</Link>
	);
};

export default SidebarItem;
