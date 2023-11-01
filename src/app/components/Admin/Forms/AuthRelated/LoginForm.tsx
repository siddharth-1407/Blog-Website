'use client';
import React from 'react';
import { useFormik } from 'formik';
import { LoginUserSchema } from '@/app/Schemas';
import { signIn } from 'next-auth/react';

const initialValues = {
	email: '',
	password: '',
};

const LoginForm = ({ error }: { error: string | undefined }) => {
	const { touched, handleChange, handleSubmit, handleBlur, values, errors } = useFormik({
		initialValues,
		validationSchema: LoginUserSchema,
		onSubmit: async (values, action) => {
			await signIn('credentials', {
				...values,
				redirect: true,
				callbackUrl: '/dashboard',
			});
			action.resetForm();
		},
	});
	return (
		<div className='p-8 border-black border-2 rounded-lg flex justify-center items-center gap-12 '>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				<h1 className='text-center text-xl font-semibold'>Admin Login</h1>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-1'>
						<label htmlFor='email' className='font-medium px-1'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='joe@123.com'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							className='px-4 py-2 border border-black rounded-md '
						/>
						{touched.email && errors.email && <span className='text-red-500 text-sm font-medium'>{errors.email}</span>}
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='password' className='font-medium px-1'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Joe#123'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							className='px-4 py-2 border border-black rounded-md '
						/>
						{touched.password && errors.password && <span className='text-red-500 text-sm font-medium'>{errors.password}</span>}
					</div>
					{!!error && <span>WRONG CREDENTIALS</span>}
					<button type='submit' className='bg-black text-white py-2 rounded-md'>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
