import React, { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
	return <div className='flex w-full mt-4'>{children}</div>;
}
