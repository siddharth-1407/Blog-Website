import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import { User } from '../../../../../Backend/User/User.js';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

type RegisterUserData = {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
	recoveryEmail?: string;
};

export async function POST(req: NextRequest) {
	const { firstName, lastName, email, username, password } = await req.json();

	if (!firstName || !lastName || !email || !username || !password) {
		return NextResponse.json({ success: false, message: 'Required field not provided!' }, { status: 422 });
	}

	try {
		await dbConnect();
		let user = await User.findOne({ email });
		if (user) return NextResponse.json({ success: false, message: 'User already exist' }, { status: 409 });
		const hashedPassword = await bcrypt.hash(password, 10);

		await User.create({ firstName, lastName, email, username, password: hashedPassword });
		return NextResponse.json({ success: true, message: 'User registered successfully!' }, { status: 201 });
	} catch (error) {
		console.log('Some error occurred while registering user');
		console.error('Error', error);
		return NextResponse.json({ success: false, message: 'Some error occurred' }, { status: 500 });
	} finally {
		await dbDisconnect();
	}
}
