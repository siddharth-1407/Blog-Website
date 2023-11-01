import { Toaster } from 'react-hot-toast';

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toaster position='top-right' />
			{children}
		</>
	);
}
