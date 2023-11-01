import React from 'react';

const Showcase_Video = ({ video_path }: { video_path: string }) => {
	return (
		<div className='w-1/3 lg:w-1/4 aspect-video '>
			<div className='px-[1.25vw] relative before:absolute before:contents-none before:w-full before:h-full before:top-0 before:left-0 before:z-[1]'>
				<video autoPlay muted={true} loop className='w-full h-full'>
					<source src={video_path} />
				</video>
			</div>
		</div>
	);
};

export default Showcase_Video;
