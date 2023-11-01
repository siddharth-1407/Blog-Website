'use client';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

type Props = {
	setDialog: Dispatch<SetStateAction<HTMLDialogElement | null>>;
};

const Model = ({ setDialog }: Props) => {
	const router = useRouter();
	const params = useParams();
	const slug = params?.slug;
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	useEffect(() => {
		if (dialogRef.current) {
			setDialog(dialogRef.current);
		}
	}, [dialogRef]);
	useEffect(() => {
		const handleClick = (e: globalThis.MouseEvent) => {
			if (dialogRef.current) {
				const dialogDimensions = dialogRef.current.getBoundingClientRect();
				if (
					e.clientX !== 0 &&
					e.clientY !== 0 &&
					(e.clientX < dialogDimensions.left ||
						e.clientX > dialogDimensions.right ||
						e.clientY < dialogDimensions.top ||
						e.clientY > dialogDimensions.bottom)
				) {
					dialogRef.current.close();
				}
			} else {
				toast.error('Dialog ref is undefined');
			}
		};
		if (dialogRef.current) {
			dialogRef.current.addEventListener('click', (e) => handleClick(e));
		}
		return () => {
			if (dialogRef.current) {
				dialogRef.current.removeEventListener('click', (e) => handleClick(e));
			}
		};
	}, []);
	const handleDelete: () => void = async () => {
		const res = await fetch(`/api/blogs/${slug}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		});
		if (!res.ok) {
			if (res.status === 404) {
				toast.error('Blog not found!');
				return console.error('Error: Blog not found!');
			}
			toast.error('Error: try again!');
			return console.error('Error: Error: Try again!');
		}
		if (dialogRef.current) {
			dialogRef.current.close();
		}
		toast.success('Blog deleted!');
		router.replace('/dashboard/edit-blog');
	};

	return (
		<dialog
			ref={dialogRef}
			id='dialog'
			className='max-w-[calc(100%-3rem)] sm:max-w-md m-x p-4 bg-black text-white/90 rounded-md border border-black'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-4'>
					<h1 className='font-semibold text-xl'>Confirm blog deletion!</h1>
					<p className='text-lg'>
						<span>Are you sure you want to delete this blog?</span>
						<br />
						<span>This action is irreversible and all associated content will be lost forever.</span>
					</p>
				</div>
				<div className='flex justify-end gap-4'>
					<button
						type='button'
						className='px-4 py-2 border border-white rounded-md font-semibold'
						onClick={(e) => {
							dialogRef.current?.close();
						}}>
						Cancel
					</button>
					<button type='button' className='px-4 py-2 border bg-red-600/40 border-red-600 rounded-md font-semibold' onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default Model;
