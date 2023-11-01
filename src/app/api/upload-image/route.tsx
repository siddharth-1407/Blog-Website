import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs';
import { join } from 'path';

export async function POST(req: NextRequest) {
	const data = await req.formData();
	const file: File | null = data.get('file') as unknown as File;

	if (!file) {
		return NextResponse.json({ success: false }, { status: 500 });
	}

	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	// With the file data in buffer, we can do whatever we want with it.
	// For this we'll just write it to the file system in  public dir.

	try {
		const path = join('/', `/public`, file.name);
		await writeFile(path, buffer, () => {
			console.log(`open ${path} to see the uploaded file.`);
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
