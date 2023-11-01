import React from 'react';
import BlogCard from '@/app/components/Client/BlogSection/Cards/BlogCard';
import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import { Blog } from '../../../../../Backend/Modals/Blog';
import { BlogPost, BlogPostCard } from '../../../../../type';
import BlogHeroCard from '@/app/components/Client/BlogSection/BlogHero/BlogHeroCard';

export const revalidate = 604800;
export default async function page() {
	let blogs = [];
	let latestBlog;

	try {
		await dbConnect();
		blogs = await Blog.find({}).sort({ date: 1 });
		latestBlog = blogs?.[0];
		blogs = blogs?.slice(1);
	} catch (error) {
		console.log(error);
		6;
	} finally {
		await dbDisconnect;
	}

	return (
		<main className='p-6 md:px-10 lg:px-0 lg:pb-16 w-full lg:max-w-[80vw] xl:max-w-[80vw] mx-auto flex flex-col gap-6 lg:gap-16'>
			<BlogHeroCard data={latestBlog} />
			<section className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-16'>
				{blogs?.length > 0 && blogs.map((blog: BlogPost) => <BlogCard key={blog._id} data={blog} />)}
			</section>
		</main>
	);
}
