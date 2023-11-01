import ContactForm from '@/app/components/Client/Forms/ContactForm';

const Page = () => {
	return (
		<main className='flex-1 mx-auto px-6 py-6 sm:px-20 sm:py-12 md:px-16 md:py-16 xl:px-20 xl:py-12 5xl:px-48 flex flex-col gap-4 md:gap-24'>
			<ContactForm />
		</main>
	);
};

export default Page;
