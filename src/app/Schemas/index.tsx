import * as Yup from 'yup';

export const BlogSchema = Yup.object({
	title: Yup.string().min(2, 'Title must be at least 2 characters').required('Title is required!'),
	slug: Yup.string().min(2, 'Slug must be at least 2 character').required('Slug is required!'),
	desc: Yup.string()
		.min(20, 'Description must be at least 20 characters')
		.max(150, 'Description must be at most 150 characters')
		.required('Description is required!'),
	imageMain: Yup.string().min(5, 'ImageURL must be at least 5 characters').required('Image url is required!'),
	tags: Yup.string().max(150),
	keywords: Yup.string().max(150),
	author: Yup.string(),
	og_type: Yup.string(),
	markdown: Yup.string().min(50, 'Markdown must be at least 50 characters').required('Markdown is required!'),
});

export const ContactUsSchema = Yup.object({
	firstName: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	email: Yup.string().email().required('Email is required'),
	message: Yup.string().max(1000, 'Too Long').required("Message can't be empty!"),
});
export const StartYourProjectFormSchema = Yup.object({
	firstName: Yup.string().min(2).max(18).required('First name is required'),
	lastName: Yup.string().min(2).max(18).required('Last name is required'),
	email: Yup.string()
		.email()
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please provide a valid email!')
		.required('Email is required'),
	mobileNumber: Yup.string()
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			'Please provide a valid phone number'
		)
		.required('Mobile number is required'),
	message: Yup.string().max(2000, 'Too Long').required("Message can't be empty!"),
	shouldReceiveMails: Yup.boolean(),
});

export const LoginUserSchema = Yup.object({
	email: Yup.string().email().required('Email is required'),
	password: Yup.string().required('Password is required'),
});
export const RegisterUserSchema = Yup.object({
	firstName: Yup.string().min(3, 'Must be at least 3 characters long').max(15, 'Must be at most 15 characters long').required('Name is required'),
	lastName: Yup.string().max(15, 'Must be at most 15 characters long').required('Name is required'),
	email: Yup.string().email().required('Email is required'),
	username: Yup.string().min(5, 'Must be at least 5 characters long').max(15, 'Must be at most 15 characters long').required('Email is required'),
	password: Yup.string()
		.min(8, 'Must be at least 8 characters long')
		.max(15, 'Must be at most 15 characters long')
		.required('Password is required'),
});

export const AddYoutubeVideoSchema = Yup.object({
	id: Yup.string()
		.matches(/[A-Za-z0-9_-]{11}$/, 'Invalid ID')
		.required('Video ID is required!'),
});
export const AddLinkSchema = Yup.object({
	title: Yup.string().required('Title is required'),
	link: Yup.string().required('Link is required'),
});
export const AddImageSchema = Yup.object({
	link: Yup.string().required('Link is required'),
	alt: Yup.string().required('Title is required'),
	type: Yup.string().oneOf(['full', 'half']),
});
