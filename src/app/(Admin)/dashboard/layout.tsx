import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SideNav from '@/app/components/Admin/DashboardLayout/SideNav';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

const layout = async ({ children }: { children: ReactNode }) => {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect('/login');
	}
	return (
		<>
			<SideNav />
			<div className='w-[calc(100%-16rem)] mt-14 ml-auto flex px-4'>
				<div className='min-h-screen flex-1 flex'>
					<>{children}</>
				</div>
			</div>
		</>
	);
};

export default layout;
