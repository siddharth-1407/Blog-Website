import React from 'react';
import NewBlogForm from '@/app/components/Admin/Forms/BlogsRelated/NewBlogForm';
import BlogPreview from '@/app/components/Admin/Blog/BlogPreview';

const page = () => {
	return (
		<main className='w-full px-4'>
			<NewBlogForm />
		</main>
	);
};

export default page;
