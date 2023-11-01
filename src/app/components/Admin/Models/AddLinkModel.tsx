import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { AddLinkSchema } from '@/app/Schemas';
import { toast } from 'react-hot-toast';
import { AddLink } from '../Forms/FormSpecialFunctions';

const initialValues = {
	title: '',
	link: '',
};
type Props = {
	textarea: HTMLTextAreaElement | null;
	setDialog: Dispatch<SetStateAction<HTMLDialogElement | null>>;
};
export default function AddLinkModel({ textarea, setDialog }: Props) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const { touched, values, errors, handleBlur, handleChange } = useFormik({
		initialValues,
		validationSchema: AddLinkSchema,
		onSubmit(values, action) {
			if (values.title && values.link) {
				action.resetForm();
				dialogRef.current!.close();
			}
		},
	});
	const handleSubmit = (e: MouseEvent) => {
		e.preventDefault();
		if (dialogRef.current) {
			AddLink(textarea, values, dialogRef.current);
		}
	};
	const handleClose = () => {
		if (dialogRef.current) {
			dialogRef.current.close();
		} else {
			toast.error('Dialog is undefined!');
		}
	};
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
					e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom
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

	return (
		<dialog data-model ref={dialogRef} className='rounded-2xl bg-black/90 text-white'>
			<div className='min-w-[360px] lg:min-w-[400px] p-4  z-10 w-full flex flex-col justify-center gap-4'>
				<div className='form-control flex flex-col text-start gap-2'>
					<label htmlFor='title' className='font-bold ml-1'>
						Title
					</label>
					<input
						type='text'
						name='title'
						placeholder='click here!'
						autoComplete='off'
						value={values.title}
						onBlur={handleBlur}
						onChange={handleChange}
						className='py-2 px-3 border rounded-md bg-black border-white/40 placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white'
					/>
					{touched.title && errors.title && <span className='pl-1 text-red-500 text-sm font-semibold'>{errors.title}</span>}
				</div>
				<div className='form-control flex flex-col text-start gap-2'>
					<label htmlFor='link' className='font-bold ml-1'>
						Link
					</label>
					<input
						type='text'
						name='link'
						placeholder='https://www.website.com'
						autoComplete='off'
						value={values.link}
						onBlur={handleBlur}
						onChange={handleChange}
						className='py-2 px-3 border rounded-md bg-black border-white/40 placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white'
					/>
					{touched.link && errors.link && <span className='pl-1 text-red-500 text-sm font-semibold'>{errors.link}</span>}
				</div>
				<div className='flex justify-end gap-4'>
					<button
						type='button'
						onClick={handleClose}
						className='uppercase text-lg font-light bg-black/10 ring-1 ring-red-500 text-red-500 px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2'>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						className='uppercase text-lg font-medium bg-black/10 ring-1 ring-white text-white px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2'>
						Add link
					</button>
				</div>
			</div>
		</dialog>
	);
}
