'use client';
import { StartYourProjectFormSchema } from '@/app/Schemas';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	mobileNumber: string;
	message: string;
	shouldReceiveMails: boolean;
};
const initialValues: FormData = {
	firstName: '',
	lastName: '',
	email: '',
	message: '',
	mobileNumber: '',
	shouldReceiveMails: false,
};

const sendProjectQuery = async (values: FormData) => {
	const res = await fetch('/api/send-email/new-project', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	});
	if (!res.ok) {
		console.log(res.statusText);
		throw new Error('Some Error occurred while sending the project details!');
	}
};

export default function StartYourProjectForm() {
	const { errors, handleChange, handleBlur, handleSubmit, touched, values } = useFormik({
		initialValues,
		validationSchema: StartYourProjectFormSchema,
		onSubmit: async (values: FormData, action) => {
			try {
				await sendProjectQuery(values);
				toast.success('Message sent!', {
					style: {
						fontFamily: 'sans-serif',
					},
				});
				action.resetForm();
			} catch (error) {
				console.error(error);
				toast.error('Error, try again!', {
					style: {
						fontFamily: 'sans-serif',
					},
				});
			}
		},
	});
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
			className='flex flex-col gap-6 sm:gap-14'>
			<header>
				<h1 className='text-[clamp(1.5rem,8vw,2.5rem)] md:text-[clamp(1.8rem,3.5vw,2.5rem)] 4xl:text-5xl leading-tight font-bold text-Text_blogHeading'>
					Start your project
				</h1>
			</header>
			<div className='flex flex-col gap-10'>
				<div className='flex flex-col gap-6 xl:flex-row'>
					<div className='form-control flex flex-col xl:flex-1 relative'>
						<label htmlFor='firstName' className='sr-only'>
							first name
						</label>
						<input
							type='text'
							id='firstName'
							value={values.firstName}
							placeholder='First Name'
							autoCorrect='off'
							autoComplete='off'
							className='px-1 py-3 border-b border-black focus:border-ThemePrimary focus:outline-none'
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.firstName && errors.firstName && (
							<span className='absolute -bottom-6 text-red-500 text-sm font-medium'>{errors.firstName}</span>
						)}
					</div>
					<div className='form-control flex flex-col xl:flex-1 relative'>
						<label htmlFor='lastName' className='sr-only'>
							last name
						</label>
						<input
							type='text'
							id='lastName'
							value={values.lastName}
							placeholder='Last Name'
							autoCorrect='off'
							autoComplete='off'
							className='px-1 py-3 border-b border-black focus:border-ThemePrimary focus:outline-none'
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.lastName && errors.lastName && (
							<span className='absolute -bottom-6 text-red-500 text-sm font-medium'>{errors.lastName}</span>
						)}
					</div>
				</div>

				<div className='form-control flex flex-col relative'>
					<label htmlFor='email' className='sr-only'>
						email
					</label>
					<input
						type='text'
						id='email'
						value={values.email}
						placeholder='Email'
						autoCorrect='off'
						autoComplete='off'
						className='px-1 py-3 border-b border-black focus:border-ThemePrimary focus:outline-none'
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.email && errors.email && <span className='absolute -bottom-6 text-red-500 text-sm font-medium'>{errors.email}</span>}
				</div>
				<div className='form-control flex flex-col relative'>
					<label htmlFor='mobileNumber' className='sr-only'>
						mobileNumber
					</label>
					<input
						type='text'
						id='mobileNumber'
						value={values.mobileNumber}
						placeholder='+xx xxxxxxxxxx'
						autoCorrect='off'
						autoComplete='off'
						className='px-1 py-3 border-b border-black focus:border-ThemePrimary focus:outline-none'
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.mobileNumber && errors.mobileNumber && (
						<span className='absolute -bottom-6 text-red-500 text-sm font-medium'>{errors.mobileNumber}</span>
					)}
				</div>
				<div className='form-control flex flex-col relative'>
					<label htmlFor='message' className='sr-only'>
						message
					</label>
					<textarea
						id='message'
						value={values.message}
						placeholder='Message'
						autoCorrect='off'
						autoComplete='off'
						className='px-1 py-3 border-2 border-ThemeSecondary/50 resize-none focus:border-black focus:outline-none'
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.message && errors.message && (
						<span className='absolute -bottom-6 text-red-500 text-sm font-medium'>{errors.message}</span>
					)}
				</div>
				<div className='form-control flex gap-4 items-start'>
					<input
						type='checkbox'
						name='shouldReceiveMails'
						id='shouldReceiveMails'
						className='translate-y-1 sm:translate-y-0 appearance-none w-[20px] aspect-square border border-black rounded-full checked:bg-ThemePrimary transition-colors'
						value={values.shouldReceiveMails ? JSON.parse('true') : JSON.parse('false')}
					/>
					<label htmlFor='shouldReceiveMails' className='select-none text-sm font-light tracking-wide'>
						I'm happy to receive a seriously cool monthly newsletter from KOTA.
					</label>
				</div>
				<button
					className='self-start px-8 py-2 border-2 rounded-full border-ThemePrimary bg-transparent hover:bg-ThemePrimary transition-colors'
					type='submit'>
					Submit
				</button>
			</div>
		</form>
	);
}
