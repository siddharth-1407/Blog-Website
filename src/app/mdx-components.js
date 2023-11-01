// import type { MDXComponents } from 'mdx/types';
import Styles from './Styles/blog.module.css';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.

export function useMDXComponents(components) {
	return {
		// Allows customizing built-in components, e.g. to add styling.
		h1: ({ children }) => (
			<h1
				id={children?.props.href.slice(1)}
				className='text-Text_blogHeading font-extrabold text-3xl sm:text-5xl md:text-5xl sm:leading-snug md:leading-normal my-4  focus-within:text-black'>
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2
				id={children?.props.href.slice(1)}
				className='text-Text_blogHeading font-extrabold text-2xl sm:text-[2.3rem] my-5 focus-within:text-black'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3
				id={children?.props.href.slice(1)}
				className='text-Text_blogHeading font-extrabold text-[1.3rem] sm:text-2xl  my-4  focus-within:text-black'>
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4
				id={children?.props.href.slice(1)}
				className='text-Text_blogHeading font-semibold text-[1.23rem] sm:text-[1.6rem] md:text-2xl my-4  focus-within:text-black'>
				{children}
			</h4>
		),
		h5: ({ children }) => (
			<h5 id={children?.props.href.slice(1)} className='text-Text_blogHeading font-bold text-[1.3rem]  my-4  focus-within:text-black'>
				{children}
			</h5>
		),
		h6: ({ children }) => (
			<h6
				id={children?.props.href.slice(1)}
				className='text-Text_blogHeading font-extrabold text-[1.05rem] md:text-xl  my-4  focus-within:text-black'>
				{children}
			</h6>
		),
		ul: ({ children }) => <ul className='list-disc list-inside '>{children}</ul>,
		ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
		p: ({ children }) => <p className='text-Text_blogNormal font-medium text-lg sm:text-base md:text-lg 3xl:text-xl my-4'>{children}</p>,
		blockquote: ({ children }) => <blockquote className='relative p-1 md:p-4 rounded-md bg-gray-600 text-white '>{children}</blockquote>,

		...components,
	};
}
