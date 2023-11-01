import React from 'react';
import BlogCard from './Cards/BlogCard';
import Link from 'next/link';
import { Blog } from '../../../../../Backend/Modals/Blog';
import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import { BlogPost } from '../../../../../type';
export const revalidate = 604800;
const getLatestBlogData = async () => {
	let blogs = [];
	try {
		await dbConnect();
		blogs = await Blog.find({}).sort({ date: -1 }).limit(3);
		return blogs;
	} catch (error) {
		console.log(error);
		return blogs;
	} finally {
		await dbDisconnect();
		return blogs;
	}
};

const BlogSection = async () => {
	const latestBlogsData = await getLatestBlogData();
	const blogs = latestBlogsData;

	return (
		<>
			{blogs.length > 0 && (
				<section className='mx-auto px-6 py-12 sm:px-20 sm:py-12 md:px-16 xl:px-20 md:py-20 xl:py-24  3xl:py-28 5xl:px-48  overflow-hidden '>
					<div className='flex flex-col gap-6 md:gap-16 items-center'>
						<h6 className='text-center text-[2.6rem] text-ThemeSecondary font-extrabold self-start'>Latest Articles</h6>
						<div className='w-full grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-6 sm:gap-2 md:gap-6 lg:gap-10 3xl:gap-16 text-black '>
							{blogs.map((blog: BlogPost) => {
								return <BlogCard key={blog._id} data={blog} />;
							})}
						</div>
						<div className='text-center mt-8 md:mt-0 3xl:mt-4 flex justify-center'>
							<Link
								href={'/blogs'}
								className='w-fit px-6 py-4 md:px-6 md:py-3 lg:px-8 lg:py-4 relative self-start uppercase font-semibold tracking-widest text-base rounded-full border md:border-2 text-ThemePrimary border-ThemePrimary hover:text-white hover:bg-ThemePrimary transition-colors focus-visible:outline-none focus-visible:text-ThemePrimary focus-visible:bg-white'>
								View all Blog posts
							</Link>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default BlogSection;
