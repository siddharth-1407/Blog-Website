'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/app/Styles/swiper.css';
import { MdOutlineNavigateNext } from 'react-icons/md';
import Image from 'next/image';
import React from 'react';
import { WorkSliderImage } from '../../../../../type';

export default function Carousel({ ImageArray }: { ImageArray: WorkSliderImage[] }) {
	return (
		<div className='relative w-full max-w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-8rem)] lg:max-w-[calc(80vw-4rem)] xl:max-w-[calc(70vw-8rem)] mx-auto 6xl:max-w-[1300px]'>
			<Swiper
				grabCursor={true}
				slidesPerView={1}
				loop={true}
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				className='aspect-video absolute'>
				<div className='relative'>
					{ImageArray.map((img) => {
						return (
							<React.Fragment key={img.id}>
								<SwiperSlide className='bg-blue-400'>
									<Image
										src={img.src}
										fill
										alt={img.alt ? img.alt : ''}
										sizes='(max-width: 625px) 100vw, (max-width: 1300px) 50vw, 2000px'
									/>
								</SwiperSlide>
							</React.Fragment>
						);
					})}
				</div>

				<div className='swiper-button-next pointer-events-none '>
					<MdOutlineNavigateNext className={'text-white scale-150 w-7 h-11 '} />
				</div>
				<div className='swiper-button-prev pointer-events-none '>
					<MdOutlineNavigateNext className={'text-white rotate-180 scale-150 w-7 h-11 '} />
				</div>
			</Swiper>
		</div>
	);
}
