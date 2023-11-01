import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import React from 'react';
import { Blog } from '../../../../../Backend/Modals/Blog';
import BlogCard from '@/app/components/Admin/Blog/BlogCard';
import { BlogPost } from '../../../../../type';

export const revalidate = 0;

const getBlogs = async () => {
	let blogs = [];
	try {
		await dbConnect();
		blogs = await Blog.find({}).sort({ date: -1 });
		return blogs;
	} catch (error) {
		console.log('Error: Could not get blogs', error);
		return blogs;
	} finally {
		await dbDisconnect();
	}
};

const page = async () => {
	const allBlogs = await getBlogs();
	return (
		<main className='w-full flex flex-wrap gap-8'>
			{allBlogs.length > 0 &&
				allBlogs.map((blog: BlogPost) => {
					return (
						<React.Fragment key={blog._id}>
							<BlogCard data={blog} />
						</React.Fragment>
					);
				})}
		</main>
	);
};

export default page;
