import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import { NextRequest, NextResponse } from 'next/server';
import { NewsLetterSub } from '../../../../Backend/NewsLetterSubs/NewsLetterSub.js';

export async function POST(req: NextRequest) {
	const { email } = await req.json();
	if (!email) {
		return NextResponse.json({ success: false, message: 'Required field not provided!' }, { status: 422 });
	}
	if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
		return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
	}
	try {
		await dbConnect();
		const subscriber = await NewsLetterSub.findOne({ email });
		if (subscriber) {
			return NextResponse.json({ success: false, message: 'Sub already exist' }, { status: 409 });
		}
		console.log('awd');
		await NewsLetterSub.create({ email });
		return NextResponse.json({ success: true, message: 'Subscription done!' }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false, message: 'Some error occurred!' }, { status: 503 });
	} finally {
		await dbDisconnect();
	}
}
