import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, index: { unique: true } },
		username: { type: String, lowercase: true, required: true, index: { unique: true } },
		password: { type: String, required: false },
		recoveryEmail: { type: String, required: false },
	},
	{ timestamps: true }
);

export const User = mongoose.models.user || mongoose.model('user', UserSchema);
