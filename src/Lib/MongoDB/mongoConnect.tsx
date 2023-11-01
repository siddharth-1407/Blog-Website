import mongoose from 'mongoose';

// db connect
export async function dbConnect() {
	try {
		await mongoose.connect(process.env.MONGO_URI!, {
			dbName: 'BlogDB',
		});
		console.log('Connected to database!');
	} catch (error) {
		console.log("couldn't connect to database");
	}
}
export async function dbDisconnect() {
	try {
		await mongoose.connection.close();
		console.log('Database connection closed!');
	} catch (error) {
		console.error('Error closing Mongoose connection:', error);
	}
}
