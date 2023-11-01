type Props = {
	data: {
		index: number;
		title: string;
		content: string;
	};
};

export default function WorkSection_Content({ data }: Props) {
	const { index, title, content } = data;
	return (
		<div className='mx-auto py-16 pb-0 sm:pb-4 w-full max-w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-8rem)] lg:max-w-[calc(80vw-4rem)] xl:max-w-[calc(70vw-8rem)] 6xl:max-w-[1300px] flex flex-col gap-8'>
			<h2 className='relative text-[2rem] md:text-4xl lg:text-5xl 5xl:text-7xl font-extrabold text-Text_blogHeading'>
				<span className='absolute -top-5 text-xs text-ThemePrimary'>{index < 10 ? `0${index}.` : `${index}.`}</span>
				{title}
			</h2>
			<p
				className='md:pt-4 text-Text_blogHeading text-lg font-normal lg:font-medium xl:text-xl xl:leading-relaxed'
				dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}></p>
		</div>
	);
}
