import React from 'react';

const YoutubeVideo = ({ id }: { id: string }) => {
	return (
		<div>
			<iframe
				width='100%'
				height='100%'
				className='aspect-video focus-visible:outline-none'
				src={`https://www.youtube.com/embed/${id}`}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen></iframe>
		</div>
	);
};

export default YoutubeVideo;
