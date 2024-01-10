import { CapitalizeFirstLetter } from '@/Lib/utils/CapitalizeFirstLetter';
import NewProjectEmail from '@/email/NewProjectEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import { NewsLetterSub } from '../../../../../Backend/NewsLetterSubs/NewsLetterSub.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		const firstName = CapitalizeFirstLetter(data.firstName);
		const lastName = CapitalizeFirstLetter(data.lastName);
		console.log(data);
		if (data.shouldReceiveMails) {
			await dbConnect();
			const subscriber = await NewsLetterSub.findOne({ email: data.email });
			console.log(data);
			console.log(subscriber);
			if (!subscriber) {
				await NewsLetterSub.create({ email: data.email });
			}
		}

		await resend.emails.send({
			from: `${data.firstName} - Contact <onboarding@resend.dev>`,
			to: ['sanksiddharth@gmail.com'],
			subject: 'New project',
			reply_to: data.email,
			react: (
				<NewProjectEmail
					firstName={firstName || data.firstName}
					lastName={lastName || data.lastName}
					email={data.email}
					mobileNumber={data.mobileNumber}
					message={data.message}
				/>
			),
		});
		console.log(data.message);
		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error }, { status: 503 });
	} finally {
		await dbDisconnect();
	}
}
