'use client';
import React, { FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { BlogSchema } from '@/app/Schemas';
import { handleBold, handleItalic } from '../FormSpecialFunctions';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HeadingButtons from '../FormEditorButtons/HeadingButtons';
import YouTubeVideoBtn from '../FormEditorButtons/YouTubeVideoBtn';
import LinkBtn from '../FormEditorButtons/LinkBtn';
import ImageBtn from '../FormEditorButtons/ImageBtn';
import ScrollHandlerBtns from '../FormEditorButtons/ScrollHandlerBtns';
import ImageCardPreviewResponsive from './ImageCardPreviewResponsice';
import ImageCardPreview from './ImageCardPreview';

type initialValuesType = {
	slug: string;
	title: string;
	desc: string;
	imageMain: string;
	tags: string;
	keywords: string;
	author: string;
	og_type: string;
	markdown: string;
};
const initialValues: initialValuesType = {
	slug: '',
	title: '',
	desc: '',
	imageMain: '',
	tags: '',
	keywords: '',
	author: '',
	og_type: '',
	markdown: '',
};
const NewBlogForm = () => {
	const router = useRouter();
	const textarea = useRef<HTMLTextAreaElement>(null);
	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
		initialValues: initialValues,
		validationSchema: BlogSchema,
		onSubmit: (values, action) => {
			// send REQ!!!
			createNewBlog(values, action);
		},
	});
	const [cardImage, setCardImage] = useState<string>(values.imageMain);

	useEffect(() => {
		textarea.current?.addEventListener('input', () => {
			if (textarea.current) {
				textarea.current.style.height = 'auto'; // Reset height to auto to allow it to shrink
				textarea.current.style.height = `${textarea.current.scrollHeight}px`;
			}
		});
	}, []);

	const createNewBlog = async (values: initialValuesType, action: FormikHelpers<initialValuesType>) => {
		// format slug by removeing empty spaces, and convart tags and keywords from string to array
		const formattedSlug = values.slug.toLowerCase().replaceAll(' ', '-');
		const tags = values.tags ? values.tags.split(',') : [];
		const keywords = values.keywords ? values.keywords.split(',') : [];
		const currentDate = new Date();
		const og_type = 'article';
		const PubDate = currentDate.toISOString();

		let res = await fetch('/api/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...values, slug: formattedSlug, date: PubDate, tags, keywords, og_type }),
		});
		if (!res.ok) {
			if (res.status === 409) {
				console.error('Error: Slug already exist!');
				return toast.error('Slug already exist!');
			}
			console.error('Error: Some error occurred!');
			return toast.error('Some error occurred. Try again!');
		}
		toast.success('New blog published!');
		router.push('/dashboard/edit-blog');
		action.resetForm();
	};

	return (
		<>
			<div className=' h-fit mx-auto flex flex-col text-center gap-1 pt-2'>
				<h1 className='font-bold text-2xl text-white'>New Blog!</h1>
				<form
					onSubmit={(e: FormEvent<HTMLFormElement>) => {
						handleSubmit(e);
					}}
					className='w-full flex flex-col gap-4 p-4'>
					<div className='flex flex-col md:flex-row w-full gap-4'>
						<div className='form-control flex-1 relative group'>
							<input
								type='text'
								name='title'
								id='title'
								autoComplete='off'
								value={values.title}
								onChange={handleChange}
								onBlur={handleBlur}
								className='w-full px-3 py-4 pb-2 text-lg text-white border-2 rounded-md bg-black/25 border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
							/>
							<label
								htmlFor='title'
								className={`absolute left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0 group-focus-within:text-white group-focus-within:font-bold  ${
									values.title
										? 'top-0 translate-y-0 text-sm font-bold  '
										: 'text-lg font-semibold text-white -translate-y-1/2 top-7'
								}`}>
								Title
							</label>
							{touched.title && errors.title && (
								<div className='mt-0.5 text-start text-red-500 font-semibold'>
									<span>{errors.title}</span>
								</div>
							)}
						</div>
						<div className='form-control flex-1 relative group'>
							<input
								type='text'
								name='slug'
								id='slug'
								autoComplete='off'
								value={values.slug}
								onChange={handleChange}
								onBlur={handleBlur}
								className=' w-full px-3 py-4 pb-2 text-lg text-white border-2 rounded-md bg-black/25 border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
							/>
							<label
								htmlFor='slug'
								className={`absolute  left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0 group-focus-within:text-white group-focus-within:font-bold  ${
									values.slug
										? 'top-0 translate-y-0 text-sm font-bold  '
										: 'text-lg font-semibold text-white/80 -translate-y-1/2 top-7'
								}`}>
								Slug
							</label>
							{touched.slug && errors.slug && (
								<div className='mt-0.5 text-start text-red-500 font-semibold'>
									<span>{errors.slug}</span>
								</div>
							)}
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='form-control flex-1 relative group'>
							<input
								type='text'
								name='desc'
								id='desc'
								autoComplete='off'
								spellCheck='true'
								value={values.desc}
								onChange={handleChange}
								onBlur={handleBlur}
								className='w-full px-3 py-4 pb-2 text-lg text-white border-2 rounded-md bg-black/25 border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
							/>
							<label
								htmlFor='desc'
								className={`text-white absolute left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0  group-focus-within:font-bold  ${
									values.desc ? 'top-0 translate-y-0 text-sm font-bold  ' : 'text-lg font-semibold -translate-y-1/2 top-7'
								}`}>
								Description
							</label>
							{!errors.desc && (
								<div
									className={`mt-0.5 text-start  font-semibold ${
										touched.desc ? (!errors.desc ? 'text-green-500' : 'text-red-500') : 'text-white'
									}`}>
									<span>{values.desc.length} characters</span>
								</div>
							)}
							{touched.desc && errors.desc && (
								<div className='mt-0.5 text-start text-red-500 font-semibold'>
									<span>{errors.desc}</span>
								</div>
							)}
						</div>
						<div className='flex flex-col sm:flex-row gap-4'>
							<div className='flex flex-col gap-4 justify-between flex-1'>
								<div className='form-control relative group'>
									<input
										type='text'
										name='imageMain'
										id='imageMain'
										autoComplete='off'
										value={values.imageMain}
										onChange={(e) => {
											handleChange(e);
											setCardImage(values.imageMain);
										}}
										onBlur={handleBlur}
										className='w-full px-3 py-4 pb-2 text-lg text-white border-2 rounded-md bg-black/25 border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
									/>
									<label
										htmlFor='imageMain'
										className={`text-white absolute left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0  group-focus-within:font-bold  ${
											values.imageMain
												? 'top-0 translate-y-0 text-sm font-bold  '
												: 'text-lg font-semibold -translate-y-1/2 top-7'
										}`}>
										ImageURL
									</label>
									{touched.imageMain && errors.imageMain && (
										<div className='mt-0.5 text-start text-red-500 font-semibold'>
											<span>{errors.imageMain}</span>
										</div>
									)}
									<ImageCardPreviewResponsive ImageSrc={cardImage} />
								</div>
								<div className='form-control relative group'>
									<input
										type='text'
										name='tags'
										id='tags'
										autoComplete='off'
										spellCheck='true'
										value={values.tags}
										onChange={handleChange}
										onBlur={handleBlur}
										className=' w-full px-3 py-4 pb-2 text-lg text-white border-2 rounded-md bg-black/25 border-white/50 group-focus-within:border-white required:border-black/50 group-focus-within:outline-none peer'
									/>
									<label
										htmlFor='tags'
										className={`text-white absolute left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0 group-focus-within:font-bold  ${
											values.tags ? 'top-0 translate-y-0 text-sm font-bold  ' : 'text-lg font-semibold  -translate-y-1/2 top-7'
										}`}>
										Tags
									</label>
									{touched.tags && errors.tags && (
										<div className='mt-0.5 text-start text-red-500 font-semibold'>
											<span>{errors.tags}</span>
										</div>
									)}
								</div>
								<div className='form-control relative group '>
									<input
										type='text'
										name='keywords'
										id='keywords'
										autoComplete='off'
										spellCheck='true'
										value={values.keywords}
										onChange={handleChange}
										onBlur={handleBlur}
										className=' w-full px-3 py-4 pb-2 text-lg text-white border-2 rounded-md bg-black/25 border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
									/>
									<label
										htmlFor='keywords'
										className={`text-white absolute left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0  group-focus-within:font-bold  ${
											values.keywords
												? 'top-0 translate-y-0 text-sm font-bold  '
												: 'text-lg font-semibold  -translate-y-1/2 top-7'
										}`}>
										Keywords
									</label>
									{touched.keywords && errors.keywords && (
										<div className='mt-0.5 text-start text-red-500 font-semibold'>
											<span>{errors.keywords}</span>
										</div>
									)}
								</div>
								<div className='form-control relative group'>
									<input
										type='text'
										name='author'
										id='author'
										autoComplete='off'
										value={values.author}
										onChange={handleChange}
										onBlur={handleBlur}
										className=' w-full px-3 py-4 pb-2 text-lg text-white border-2 bg-black/25 rounded-md border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
									/>
									<label
										htmlFor='author'
										className={`text-white absolute left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0 group-focus-within:font-bold  ${
											values.author ? 'top-0 translate-y-0 text-sm font-bold  ' : 'text-lg font-semibold -translate-y-1/2 top-7'
										}`}>
										Author
									</label>
									{touched.author && errors.author && (
										<div className='mt-0.5 text-start text-red-500 font-semibold'>
											<span>{errors.author}</span>
										</div>
									)}
								</div>
							</div>
							<ImageCardPreview ImageSrc={cardImage} />
						</div>
						<div className='form-control flex-1 relative group'>
							<input
								type='text'
								name='author'
								id='author'
								autoComplete='off'
								value={values.author}
								onChange={handleChange}
								onBlur={handleBlur}
								className=' w-full px-3 py-4 pb-2 text-lg text-white border-2 bg-black/25 rounded-md border-white/50 group-focus-within:border-white group-focus-within:outline-none peer'
							/>
							<label
								htmlFor='author'
								className={`absolute  left-3 z-10 transition-all group-focus-within:text-sm group-focus-within:top-0 group-focus-within:translate-y-0 group-focus-within:text-white group-focus-within:font-bold  ${
									values.author
										? 'top-0 translate-y-0 text-sm font-bold  '
										: 'text-lg font-semibold text-white/80 -translate-y-1/2 top-7'
								}`}>
								Author
							</label>
							{touched.author && errors.author && (
								<div className='mt-0.5 text-start text-red-500 font-semibold'>
									<span>{errors.author}</span>
								</div>
							)}
						</div>
						<div className='form-control flex-1 relative group border-2 border-white/50 rounded-md bg-black/25 focus-within:border-white px-3 py-0'>
							<div className='sticky top-10 sm:top-14 left-0 -translate-x-2 w-[calc(100%+1rem)] h-fit sm:h-14 bg-[#0a0a0a] border-white/50 sm:border-b flex sm:justify-between '>
								<div className='flex items-center flex-wrap gap-1 justify-between w-full'>
									<div className='relative overflow-hidden flex flex-wrap gap-2 sm:flex-1 sm:h-full pt-2 sm:p-2'>
										<Link
											href={'#markdown'}
											className='absolute bottom-full h-10 px-4 sm:h-full flex items-center bg-black/25 text-lg font-extrabold rounded-md border focus:border-black focus-visible:text-white focus-visible:relative focus-visible:bottom-0 focus-visible:w-auto'>
											Skip to editor
										</Link>
										<HeadingButtons textarea={textarea.current} />
										<button
											onClick={(e: MouseEvent) => handleBold(e, textarea.current)}
											className=' h-10 sm:h-full aspect-square bg-transparent text-white text-lg font-extrabold rounded-md border border-white/50 focus:border-white  focus:outline-none'>
											B
										</button>
										<button
											onClick={(e: MouseEvent) => handleItalic(e, textarea.current)}
											className=' h-10 sm:h-full aspect-square bg-transparent text-white text-lg italic rounded-md font-bold border border-white/50 focus:border-white  focus:outline-none'>
											i
										</button>
										<ImageBtn textarea={textarea.current} />
										<LinkBtn textarea={textarea.current} />
										<YouTubeVideoBtn textarea={textarea.current} />
									</div>

									<div className='hidden p-2 sm:w-fit lg:flex items-stretch flex-row-reverse flex-wrap justify-end sm:justify-start w-full  gap-2'>
										<ScrollHandlerBtns textarea={textarea.current} />
										<button
											type='submit'
											className=' h-10  flex items-center px-4 rounded-md bg-white text-black font-bold text-lg'>
											Publish
										</button>
									</div>
								</div>
							</div>
							<label htmlFor='og_type' className='text-lg font-semibold text-white/80 sr-only '>
								Markdown
							</label>
							{touched.markdown && errors.markdown && (
								<div className='mt-2 text-start text-red-500 font-semibold'>
									<span>{errors.markdown}</span>
								</div>
							)}
							<textarea
								ref={textarea}
								name='markdown'
								id='markdown'
								spellCheck='true'
								placeholder='Markdown...'
								value={values.markdown}
								onChange={handleChange}
								onBlur={handleBlur}
								rows={10}
								className='w-full py-3 h-auto max-h-screen text-lg resize-none bg-transparent text-white group-focus-within:outline-none'></textarea>
						</div>
					</div>
					<button
						type='submit'
						className='lg:hidden h-10 flex justify-center items-center px-4 rounded-md bg-white text-black font-bold border-transparent border text-lg focus-visible:bg-black focus-visible:text-white focus:outline-none focus-visible:border-white'>
						Publish
					</button>
				</form>
			</div>
		</>
	);
};

export default NewBlogForm;
