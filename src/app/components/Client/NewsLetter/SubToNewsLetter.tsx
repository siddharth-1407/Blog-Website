'use client';
import React, { MouseEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function SubToNewsLetter() {
	const emailRef = useRef<HTMLInputElement>(null);
	const [email, setEmail] = useState<{ value: string; error: string }>({ value: '', error: '' });

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		if (!email.value) {
			return setEmail({ value: '', error: 'Email is required!' });
		}
		if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
			emailRef.current && emailRef.current.focus();
			return setEmail({ value: '', error: 'Invalid format' });
		}
		try {
			const res = await fetch('/api/news-letter', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: email.value }),
			});
			if (!res.ok) {
				switch (res.status) {
					case 422:
						setEmail({ value: '', error: 'Email is required!' });
						return console.log('required values not provided!');
					case 409:
						toast.success('Already a subscriber! 😆');
						setEmail({ value: '', error: '' });
						return console.log('Already a subscriber');

					default:
						toast.error('Error try again');
						return console.log('some error occured');
				}
			}
			toast.success('Subscribed 😁');
			setEmail({ value: '', error: '' });
		} catch (error) {
			console.log(error);
			toast.error('Error Try again!');
		}
	};

	return (
		<div>
			<p className='py-4 text-center lg:text-end text-xl text-ThemePrimary font-bold'>Subscribe to our newsletter</p>
			<form className='flex items-start '>
				<div className='flex flex-col gap-1 items-center'>
					<label htmlFor='email' className='sr-only'>
						Email
					</label>
					<input
						ref={emailRef}
						type='email'
						name='email'
						id='email'
						autoComplete='off'
						placeholder='joe@abc.com'
						className='px-3 py-2 border border-transparent focus-visible:outline-none focus-visible:border-ThemePrimary placeholder:text-gray-400'
						value={email.value}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail({ value: e.target.value, error: '' })}
					/>
					{email.error && <span className='text-red-500 font-medium text-sm'>{email.error}</span>}
				</div>
				<button className='px-4 py-2 border border-ThemePrimary bg-ThemePrimary text-white font-bold' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}
