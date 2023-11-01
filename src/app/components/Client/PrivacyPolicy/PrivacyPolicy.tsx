'use client';
import React from 'react';

export default function PrivacyPolicy({ heading, context }: { heading: string; context: string | (string | string[])[] }) {
	return (
		<div className='flex flex-col gap-4 4xl:gap-8 text-Text_blogHeading'>
			<h2 className='font-extrabold text-ThemePrimary text-2xl sm:text-3xl 4xl:text-5xl md:max-w-3xl 4xl:max-w-4xl '>{heading}</h2>

			<div className='flex text-sm sm:text-xs sm:leading-relaxed lg:text-sm 4xl:text-lg font-light 4xl:font-medium flex-col gap-3 md:max-w-3xl 2xl:max-w-4xl 4xl:max-w-5xl'>
				{typeof context === 'string' ? (
					<p dangerouslySetInnerHTML={{ __html: context }}></p>
				) : (
					<ol className='flex flex-col gap-3 list-decimal list-outside pl-4'>
						{context.map((ListItem, i) => {
							return typeof ListItem === 'string' ? (
								<li key={i} className='list-item'>
									<p dangerouslySetInnerHTML={{ __html: ListItem }}></p>
								</li>
							) : (
								<ol key={i} className='flex flex-col gap-3 list-decimal list-outside pl-4 mt-2 4xl:text-base 4xl:font-normal'>
									{ListItem.map((item, i) => {
										return (
											<li key={i} className='first-letter:capitalize'>
												<span>{item}</span>
											</li>
										);
									})}
								</ol>
							);
						})}
					</ol>
				)}
			</div>
		</div>
	);
}
