'use client';
import React from 'react';
import { useFormik } from 'formik';
import { RegisterUserSchema } from '@/app/Schemas';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	username: '',
};

type UserData = {
	firstName: String;
	lastName: String;
	email: String;
	password: String;
	username: String;
};
const SubmitAction = async (values: UserData) => {
	const res = await fetch('/api/user/new', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(values),
	});
	const data = await res.json();
	console.log(data);
};
const RegisterationForm = () => {
	const { touched, handleChange, handleSubmit, handleBlur, values, errors } = useFormik({
		initialValues,
		validationSchema: RegisterUserSchema,
		onSubmit: (values, action) => {
			SubmitAction(values);
			action.resetForm();
		},
	});
	return (
		<div className='p-8 border-black border-2 rounded-lg flex justify-center items-center gap-12 '>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				<h1 className='text-center text-xl font-semibold'>Register</h1>
				<div className='flex flex-col gap-4'>
					<div className='flex gap-4'>
						<div className='flex flex-col gap-1'>
							<label htmlFor='firstName' className='font-medium px-1'>
								First name
							</label>
							<input
								type='firstName'
								name='firstName'
								id='firstName'
								placeholder='joe@123.com'
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
								className='px-4 py-2 border border-black rounded-md '
							/>
							{touched.firstName && errors.firstName && <span className='text-red-500 text-sm font-medium'>{errors.firstName}</span>}
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='lastName' className='font-medium px-1'>
								Last name
							</label>
							<input
								type='lastName'
								name='lastName'
								id='lastName'
								placeholder='joe@123.com'
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
								className='px-4 py-2 border border-black rounded-md '
							/>
							{touched.lastName && errors.lastName && <span className='text-red-500 text-sm font-medium'>{errors.lastName}</span>}
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='username' className='font-medium px-1'>
							Username
						</label>
						<input
							type='username'
							name='username'
							id='username'
							placeholder='joe@123.com'
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
							className='px-4 py-2 border border-black rounded-md '
						/>
						{touched.username && errors.username && <span className='text-red-500 text-sm font-medium'>{errors.username}</span>}
					</div>
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
					<button type='submit' className='bg-black text-white py-2 rounded-md'>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterationForm;
