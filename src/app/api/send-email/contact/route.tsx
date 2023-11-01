import ContactEmail from '@/email/ContactEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		await resend.emails.send({
			from: `${data.firstName} - Contact <onboarding@resend.dev>`,
			to: ['sanksiddharth@gmail.com'],
			subject: 'Contact Us Form',
			reply_to: data.email,
			react: <ContactEmail firstName={data.firstName} lastName={data.lastName} email={data.email} message={data.message} />,
		});
		console.log(data.message);
		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error }, { status: 503 });
	}
}
