import { dbConnect, dbDisconnect } from '../../../Lib/MongoDB/mongoConnect';
import { Blog } from '../../../../Backend/Modals/Blog.js';
import { NextRequest, NextResponse } from 'next/server';

type queryObj = {
	title?: { $regex: string; $options: string };
	slug?: String;
	desc?: String;
	sort?: String;
	select?: String;
	page?: String;
};

export async function GET(req: NextRequest) {
	const url = new URL(req.url);
	let queryObj: queryObj = {};
	let sortStr;
	let selectStr;
	const limit = 10;
	const title = url.searchParams.get('title');
	const slug = url.searchParams.get('slug');
	const sort = url.searchParams.get('sort');
	const select = url.searchParams.get('select');
	let page = Number(url.searchParams.get('page')) || 1;
	let skip = (page - 1) * limit;

	if (title) queryObj.title = { $regex: title, $options: 'i' };
	if (slug) queryObj.slug = slug;

	try {
		await dbConnect();
		let blogs = Blog.find(queryObj);
		if (sort) {
			sortStr = sort.replaceAll(',', ' ');
			blogs = blogs.sort(sortStr);
		}
		if (select) {
			selectStr = select.replaceAll(',', ' ');
			blogs = blogs.select(selectStr);
		}

		blogs.skip(skip).limit(limit);
		const data = await blogs;
		if (data.length > 0) {
			return NextResponse.json({ success: true, blogs: data }, { status: 200 });
		} else {
			return NextResponse.json({ success: false, message: "Couldn't find any blogs" }, { status: 404 });
		}
	} catch (error) {
		return NextResponse.json({ success: false, message: 'Some error occurred' }, { status: 500 });
	} finally {
		// close the db connection
		dbDisconnect();
	}
}

export async function POST(req: NextRequest) {
	const data = await req.json();
	try {
		await dbConnect();
		const isSlugInvalid = await Blog.findOne({ slug: data.slug });

		// check if the provided slug already exist, return success false if it exists
		if (isSlugInvalid)
			return NextResponse.json({ success: false, message: 'Slug already exist. Please provide a unique slug.' }, { status: 409 });
		// create new blog if provided slug is unique and return success true
		const blog = await Blog.create(data);
		console.log(blog);
		return NextResponse.json({ success: true, message: 'New blog published!', blog }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false, message: 'Some error occurred!' }, { status: 500 });
	} finally {
		await dbDisconnect();
	}
}
