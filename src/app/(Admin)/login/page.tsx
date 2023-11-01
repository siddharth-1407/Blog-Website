import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginForm from '@/app/components/Admin/Forms/AuthRelated/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
	searchParams?: Record<'callbackUrl' | 'error', string>;
};
const page = async (props: Props) => {
	const session = await getServerSession(authOptions);
	if (session) {
		redirect('/dashboard');
	}
	return (
		<div className='flex-1 flex justify-center items-center'>
			<LoginForm error={props.searchParams?.error} />
		</div>
	);
};

export default page;
