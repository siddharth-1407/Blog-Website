import { dbConnect, dbDisconnect } from '../../../../Lib/MongoDB/mongoConnect';
import { NextRequest, NextResponse } from 'next/server';
import { Blog } from '../../../../../Backend/Modals/Blog';

type Content = {
	params: { slug: string };
};

export async function GET(req: NextRequest, content: Content) {
	const { slug } = content.params;
	try {
		await dbConnect();
		const blog = await Blog.findOne({ slug });

		// return success false with 404 if the blog does not exit
		if (!blog) return NextResponse.json({ success: false, message: '404 Request blog does not exist!' }, { status: 404 });

		// return the blog if it exist
		return NextResponse.json({ success: true, blog }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, message: 'Some error occurred' }, { status: 500 });
	} finally {
		// close the db connection
		await dbDisconnect();
	}
}
export async function PUT(req: NextRequest, content: Content) {
	const { slug } = content.params;
	const payload = await req.json();

	try {
		await dbConnect();
		const blog = await Blog.findOneAndUpdate({ slug }, payload);

		if (blog) {
			// update the blog if it exist
			return NextResponse.json({ success: true, message: 'Blog has been updated!' }, { status: 200 });
		} else {
			// return success false with 404 if the blog does not exit
			return NextResponse.json({ success: false, message: 'Could not find the blog to update!' }, { status: 404 });
		}
	} catch (error) {
		console.error('Error updating blog:', error);
		return NextResponse.json({ success: false, message: 'An error occurred while updating the blog.' }, { status: 500 });
	} finally {
		// close the db connection
		await dbDisconnect();
	}
}
export async function DELETE(req: NextRequest, content: Content) {
	const { slug } = content.params;
	console.log(slug);
	try {
		await dbConnect();
		const blog = await Blog.findOneAndRemove({ slug });

		if (blog) {
			// update the blog if it exist
			return NextResponse.json({ success: true, message: 'Blog has been deleted!' }, { status: 200 });
		} else {
			// return success false with 404 if the blog does not exit
			return NextResponse.json({ success: false, message: "Couldn't not found." }, { status: 404 });
		}
	} catch (error) {
		console.error('Error deleting blog:', error);
		return NextResponse.json({ success: false, message: 'An error occurred while deleting the blog.' }, { status: 500 });
	} finally {
		// close the db connection
		dbDisconnect();
	}
}
