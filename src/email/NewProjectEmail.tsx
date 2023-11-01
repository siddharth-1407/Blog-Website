import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Markdown } from '@react-email/markdown';
import { Tailwind } from '@react-email/components';

type Props = {
	firstName: string;
	lastName: string;
	email: string;
	mobileNumber: number;
	message: string;
};

export default function NewProjectEmail({ firstName, lastName, email, mobileNumber, message }: Props) {
	return (
		<Tailwind
			config={{
				theme: {
					extend: {
						colors: {
							brand: '#780ac7',
						},
					},
				},
			}}>
			<Html lang='en' dir='ltr'>
				<Head />
				<Preview>New Project</Preview>

				<Body className='bg-white my-auto mx-auto font-sans'>
					<Container className='max-w-[600px] w-full border border-gray-300'>
						<Section className='bg-brand h-24'></Section>
						<Section className='pt-4'>
							<Heading className='py-2 text-center text-3xl font-semibold text-black'>New Project</Heading>
							<Hr />
							<Section className='px-3 my-2'>
								<Text className='my-1 px-4 text-sm font-medium md:text-base sm:font-semibold text-start text-black'>{`Client : ${firstName} ${lastName}`}</Text>
								<Text className='my-1 px-4 text-sm sm:text-base font-medium sm:font-semibold text-start text-black'>
									Email : {email}
								</Text>
								<Text className='my-1 px-4 text-sm font-medium md:text-base sm:font-semibold text-start text-black'>{`Contact : ${mobileNumber}`}</Text>
							</Section>
							<Hr />
						</Section>

						<Section className='mt-2 pb-4'>
							<Text className='my-1 px-4 text-sm font-medium md:text-base sm:font-semibold text-start text-black'>Message</Text>
							<Markdown
								markdownCustomStyles={{
									p: {
										color: 'black',
										fontWeight: 500,
										fontSize: `min('1vw','1.25rem') `,
									    padding: '1rem 0.5rem',

									},
								}}
								markdownContainerStyles={{
									minHeight: '15rem',
									margin: '0.5rem',
									padding: '0.8rem 0.5rem',
									borderRadius: '0.5rem',
									border: 'solid 1px rgb(156 163 175)',
								}}>
								{message}
							</Markdown>

							<Hr />
						</Section>
						<Section className='bg-brand h-24'></Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
