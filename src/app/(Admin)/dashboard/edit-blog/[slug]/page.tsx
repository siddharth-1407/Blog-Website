import EditBlogForm from '@/app/components/Admin/Forms/BlogsRelated/EditBlogForm';
import { notFound } from 'next/navigation';
import React from 'react';
import BlogPreview from '@/app/components/Admin/Blog/BlogPreview';
import matter from 'gray-matter';

type Props = {
	params: { slug: string };
};
export const revalidate = 0;
const BASEURL: string = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.BASEURL}`;

const getBlogData = async (slug: string) => {
	const res = await fetch(`${BASEURL}/api/blogs/${slug}`);
	const data = await res.json();
	if (res.ok) {
		return data.blog;
	}

	return notFound();
};

const page = async ({ params }: Props) => {
	const { slug } = params;
	const blog = await getBlogData(slug);

	const matterResult = matter(blog.markdown);
	return (
		<div className='flex-1'>
			<h1 className='text-center font-bold text-2xl text-white'>{blog.title}</h1>

			<div>
				<EditBlogForm initialData={blog} />
			</div>
			{blog && <BlogPreview markdown={matterResult.content} />}
		</div>
	);
};

export default page;
