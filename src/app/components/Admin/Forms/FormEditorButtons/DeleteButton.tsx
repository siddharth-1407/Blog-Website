import React, { MouseEvent, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteBlogModel from '@/app/components/Admin/Models/DeleteBlogModel';
export default function DeleteButton({}) {
	const [mounted, setMounted] = useState<boolean>(false);
	const [dialog, setDialog] = useState<HTMLDialogElement | null>(null);
	const handleDelete = () => {};
	useEffect(() => {
		setMounted(true);
	}, []);
	const handleDialog = (e: MouseEvent) => {
		e.preventDefault();
		if (dialog) {
			dialog.showModal();
		}
	};

	return (
		<>
			<button
				type='button'
				onClick={handleDialog}
				className=' h-10 flex-1 flex justify-center items-center px-4 rounded-md border border-red-500 bg-black/25 text-red-500 font-bold text-lg'>
				Delete
			</button>
			{mounted && <DeleteBlogModel setDialog={setDialog} />}
		</>
	);
}
