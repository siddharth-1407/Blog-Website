import Image from 'next/image';
import HeroImage from '../../../../../public/home-kota.webp';

const Hero = () => {
	return (
		<section className='min-h-[83vh]'>
			<div className={` mt-24 flex flex-col gap-12 lg:gap-0 lg:mt-0 lg:flex-row lg:max-w-[990px] xl xl:max-w-7xl mx-auto`}>
				<div className='flex-1 w-full h-full flex justify-center lg:justify-normal'>
					<Image src={HeroImage} placeholder='blur' width={500} height={500} alt='hero image' className='hidden md:block lg:w-[80%] ' />
					<Image src={HeroImage} placeholder='blur' width={250} height={250} alt='hero image' className='md:hidden' />
				</div>
				<div className='text-center lg:text-start flex-1 flex flex-col justify-center gap-8 '>
					<h1 className='text-ThemeSecondary sm:mx-auto sm:max-w-xl text-5xl sm:text-6xl lg:mx-0 lg:text-[5rem] xl:text-7xl font-bold 5xl:max-w-2xl 5xl:text-8xl'>
						Rebel against boring
					</h1>
					<p className='text-ThemeSecondary font-semibold mx-auto max-w-sm text-base lg:max-w-md lg:mx-0 lg:text-xl 5xl:max-w-xl 5xl:text-2xl'>
						We’re a creative web design agency based in London that crafts beautiful and original websites for brands who{' '}
						<span className='text-ThemePrimary '>refuse to blend in.</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
