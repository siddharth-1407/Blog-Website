import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NewsLetterSubSchema = new Schema({
	email: { type: String, required: true },
});

export const NewsLetterSub = mongoose.models.NewsLetterSub || new mongoose.model('NewsLetterSub', NewsLetterSubSchema);
