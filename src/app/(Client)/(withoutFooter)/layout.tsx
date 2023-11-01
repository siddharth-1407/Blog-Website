import Header from '@/app/components/Client/Navigation/Header';

export default function ClientLayoutWithoutFooter({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
