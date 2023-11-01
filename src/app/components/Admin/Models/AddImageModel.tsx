import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { AddImageSchema } from '@/app/Schemas';
import { toast } from 'react-hot-toast';
import { AddImage } from '../Forms/FormSpecialFunctions';

const initialValues: {
	link: string;
	alt: string;
	type: 'full' | 'half';
} = {
	link: '',
	alt: '',
	type: 'full',
};
type Props = {
	textarea: HTMLTextAreaElement | null;
	setDialog: Dispatch<SetStateAction<HTMLDialogElement | null>>;
};
export default function AddImageModel({ textarea, setDialog }: Props) {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const { touched, values, errors, handleBlur, handleChange } = useFormik({
		initialValues,
		validationSchema: AddImageSchema,
		onSubmit(values, action) {
			if (values.alt && values.link && values.type) {
				console.log(values);
				action.resetForm();
				dialogRef.current!.close();
			}
		},
	});

	const handleSubmit = () => {
		if (dialogRef.current) {
			AddImage(textarea, values, dialogRef.current);
		}
	};
	const handleClose = () => {
		if (dialogRef.current) return dialogRef.current.close();

		toast.error('Dialog is undefined!');
	};
	useEffect(() => {
		if (dialogRef.current) return setDialog(dialogRef.current);
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

	return (
		<dialog data-model ref={dialogRef} className='rounded-2xl bg-black/90 text-white'>
			<div className='min-w-[360px] lg:min-w-[400px] px-4 py-6 z-10 w-full flex flex-col justify-center gap-4'>
				<div className='form-control flex flex-col text-start gap-2'>
					<label htmlFor='link' className='font-bold ml-1'>
						Link
					</label>
					<input
						type='text'
						name='link'
						placeholder='https://www.website.com/image.webp'
						autoComplete='off'
						value={values.link}
						onBlur={handleBlur}
						onChange={handleChange}
						className='py-2 px-3 border rounded-md bg-black border-white/40 placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white'
					/>
					{touched.link && errors.link && <span className='pl-1 text-red-500 text-sm font-semibold'>{errors.link}</span>}
				</div>
				<div className='form-control flex flex-col text-start gap-2'>
					<label htmlFor='alt' className='font-bold ml-1'>
						Alt text
					</label>
					<input
						type='text'
						name='alt'
						placeholder='a green hat'
						autoComplete='off'
						value={values.alt}
						onBlur={handleBlur}
						onChange={handleChange}
						className='py-2 px-3 border rounded-md bg-black border-white/40 placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white'
					/>
					{touched.alt && errors.alt && <span className='pl-1 text-red-500 text-sm font-semibold'>{errors.alt}</span>}
				</div>
				<div className='form-control flex flex-col text-start gap-2 '>
					<label htmlFor='type' className='font-bold ml-1 '>
						Image type
					</label>
					<select id='type' value={values.type} onChange={handleChange} name='type' className='px-4 py-2 rounded-md bg-black'>
						<option value={'full'}>Full</option>
						<option value={'half'}>Half</option>
					</select>
				</div>
				<div className='flex justify-end gap-4'>
					<button
						type='button'
						onClick={handleClose}
						className='uppercase text-lg font-light bg-black/10 ring-1 ring-red-500 text-red-500 px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2'>
						Cancel
					</button>
					<button
						type='submit'
						onClick={handleSubmit}
						className='uppercase text-lg font-medium bg-black/10 ring-1 ring-white text-white px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2'>
						Add image
					</button>
				</div>
			</div>
		</dialog>
	);
}
