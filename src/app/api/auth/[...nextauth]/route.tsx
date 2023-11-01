import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '../../../../../Backend/User/User';
import { dbConnect, dbDisconnect } from '@/Lib/MongoDB/mongoConnect';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credientials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'Email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials || !credentials.email || !credentials.password) return null;
				try {
					await dbConnect();
					const user = await User.findOne({ email: credentials.email });
					if (!user) return null;
					if (!user?.password) return null;
					const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
					return isPasswordCorrect ? user : null;
				} catch (error) {
					console.log(error);
					return null;
				} finally {
					await dbDisconnect();
				}
			},
		}),
	],
	secret: process.env.NEXT_AUTH_SECRET,
	pages: {
		signIn: '/login',
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
