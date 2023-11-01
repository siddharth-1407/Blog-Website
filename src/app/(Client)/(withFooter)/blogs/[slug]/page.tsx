import React from 'react';
import { notFound } from 'next/navigation';
import Scroller from '@/app/components/Client/Scroller/Scroller';
import BlogArticle from '@/app/components/Client/Blog/BlogArticle';
import getBaseUrl from '@/Lib/utils/GetBaseURL';
import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import { Blog } from '../../../../../../Backend/Modals/Blog';

export const revalidate = 604800;
const BASEURL = getBaseUrl();

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const res = await fetch(`${BASEURL}/api/blogs/${slug}`);
	const data = await res.json();
	const blog = data.blog;

	if (!blog) {
		return notFound();
	}
	return {
		title: `${blog.title} - ${process.env.SITENAME}`,
		description: blog.desc,
		authors: [{ name: blog.author }],
		keywords: Array(blog.keywords),
		image: [blog.imageMain],
		openGraph: {
			title: blog.title,
			description: blog.description,
			keywords: Array(blog.keywords),
			images: [blog.imageMain],
			type: blog.og_type,
		},
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { slug } = params;
	let blog;
	try {
		await dbConnect();
		blog = await Blog.findOne({ slug });
		if (!blog) {
			return notFound();
		}
	} catch (error) {
		console.log(error);
	} finally {
		await dbDisconnect();
	}

	return (
		<div className='flex-1 '>
			<div className='w-full py-2 sm:py-4 lg:py-8 px-6 mx-auto sm:px-10 md:px-24 lg:px-40 xl:px-40 xl:max-w-7xl 2xl:max-w-none 2xl:px-52 3xl:px-64 4xl:px-72 5xl:max-w-[90%]'>
				<Scroller />
				<main>
					<BlogArticle blog={blog} />
				</main>
			</div>
		</div>
	);
}
