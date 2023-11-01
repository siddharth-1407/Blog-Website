'use client';
import React from 'react';
import { useFormik } from 'formik';
import { ContactUsSchema } from '@/app/Schemas';
import { toast } from 'react-hot-toast';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	message: '',
};

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
};
const sendEmail = async (formData: FormData) => {
	const res = await fetch('/api/send-email/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});
	if (!res.ok) {
		console.log(res.statusText);
		throw new Error('Some Error occurred while sending mail!');
	}
};

const ContactForm = () => {
	const { errors, handleChange, handleBlur, handleSubmit, touched, values } = useFormik({
		initialValues,
		validationSchema: ContactUsSchema,
		onSubmit: async (values: FormData, action) => {
			try {
				await sendEmail(values);
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
		<div className='backdrop-blur-lg'>
			<form className='p-2 lg:p-4 3xl:p-14' onSubmit={(e) => handleSubmit(e)}>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col gap-10'>
						<div className='flex gap-10'>
							<div className='form-control flex flex-col gap-2'>
								<label htmlFor='firstName' className='sr-only'>
									First Name
								</label>
								<input
									type='text'
									placeholder='First Name'
									name='firstName'
									id='firstName'
									className='px-2 py-2 text-lg font-medium border-b border-black focus-visible:outline-none focus-visible:border-ThemePrimary placeholder:font-medium'
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.firstName && errors.firstName && (
									<span className='pl-0 text-sm lg:text-base text-red-500 font-medium'>{errors.firstName}</span>
								)}
							</div>
							<div className='form-control flex flex-col gap-2'>
								<label htmlFor='lastName' className='sr-only'>
									Last Name
								</label>
								<input
									type='text'
									placeholder='Last Name'
									name='lastName'
									id='lastName'
									className='px-2 py-2 text-lg font-medium border-b border-black focus-visible:outline-none focus-visible:border-ThemePrimary placeholder:font-medium'
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.lastName && errors.lastName && (
									<span className='pl-0 text-sm lg:text-base text-red-500 font-medium'>{errors.lastName}</span>
								)}
							</div>
						</div>
						<div className='form-control flex flex-col gap-2'>
							<label htmlFor='email' className='sr-only'>
								Email
							</label>
							<input
								type='text'
								placeholder='Email'
								name='email'
								id='fiemailtName'
								className='px-2 py-2 text-lg font-medium border-b border-black focus-visible:outline-none focus-visible:border-ThemePrimary placeholder:font-medium'
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.email && errors.email && (
								<span className='pl-0 text-sm lg:text-base text-red-500 font-medium'>{errors.email}</span>
							)}
						</div>
						<div className='form-control flex flex-col gap-2'>
							<label htmlFor='message' className='sr-only'>
								Massage
							</label>
							<textarea
								cols={10}
								rows={7}
								placeholder='Message'
								name='message'
								id='message'
								className='sidebar | px-2 py-2 text-lg font-medium border-2 border-gray-400 focus-visible:outline-none focus-visible:border-ThemePrimary placeholder:font-medium'
								value={values.message}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.message && errors.message && (
								<span className='pl-0 text-sm lg:text-base text-red-500 font-medium'>{errors.message}</span>
							)}
							{!errors.message && (
								<span className={`pl-0 text-sm lg:text-base text-green-500 font-medium ${values.message.length <= 0 && 'opacity-0'}`}>
									{values.message.length}
								</span>
							)}
						</div>
					</div>
					<button
						type='submit'
						className='self-end px-9 py-3 border-2 border-ThemePrimary bg-white text-ThemePrimary text-base tracking-wider uppercase font-medium rounded-full hover:bg-ThemePrimary hover:text-white transition-colors '>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
