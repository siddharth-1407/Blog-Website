import NewProjectEmail from '@/email/NewProjectEmail';

export default function page() {
	return (
		<div>
			<NewProjectEmail firstName='sid' lastName='sankhala' email='siddharth@gmail.com' mobileNumber={9985621475} message='hi!' />
		</div>
	);
}
