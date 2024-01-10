import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema(
	{
		slug: { type: String, required: true, lowercase: true, index: { unique: true } },
		date: { type: String, required: true },
		title: { type: String, required: true },
		desc: { type: String, required: true },
		markdown: { type: String, required: true },
		imageMain: { type: String, required: true },
		author: { type: String, required: false },
		tags: [{ type: String, required: false }],
		keywords: [{ type: String, required: false }],
		og_type: { type: String, required: false },
	},
	{ timestamps: true }
);

export const Blog = mongoose.models.blog || mongoose.model('blog', blogSchema);
