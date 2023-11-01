import FooterCallToActionHandeler from '../../components/Client/Footer/FooterCallToActionHandeler';
import Header from '../../components/Client/Navigation/Header';

export default async function ClientLayoutWithFooter({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<FooterCallToActionHandeler />
		</>
	);
}
