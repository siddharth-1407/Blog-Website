import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Markdown } from '@react-email/markdown';
import { Tailwind } from '@react-email/components';

type Props = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
};
export default function ContactEmail({ firstName, lastName, email, message }: Props) {
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
				<Preview>New Message from your Site</Preview>

				<Body className='bg-white my-auto mx-auto font-sans'>
					<Container className='max-w-[600px] w-full border border-gray-300'>
						<Section className='bg-brand h-24'></Section>
						<Section className='pt-4'>
							<Heading className='text-center text-3xl text-black'>New Message</Heading>
							<Section className='px-3'>
								<Text className='my-1 text-sm font-medium md:text-base sm:font-semibold text-start text-black'>{`From : ${firstName} ${lastName}`}</Text>
							</Section>
						</Section>
						<Hr />
						<Section className='mt-2 pb-4'>
							<Markdown
								markdownCustomStyles={{
									p: {
										color: 'black',
										fontWeight: 500,
										fontSize: `min('1vw','1.25rem')`,
									},
								}}
								markdownContainerStyles={{
									padding: '1rem 0.5rem',
									border: 'solid 1px black',
								}}>
								{message}
							</Markdown>
							<Text className='my-2 px-4 text-sm sm:text-base font-medium sm:font-semibold text-start text-black'>
								Sender&rsquo;s email : {email}
							</Text>
							<Hr />
						</Section>
						<Section className='bg-brand h-24'></Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
