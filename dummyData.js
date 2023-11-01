import { Blog } from './Backend/Modals/Blog.js';
import dummyData from './dummyData.json' assert { type: 'json' };
import { dbConnect } from './src/Lib/mongoConnect.js';

const insertData = async () => {
	try {
		await dbConnect();
		await Blog.create(dummyData);
		console.log('success');
	} catch (error) {
		console.log(error);
	}
};
