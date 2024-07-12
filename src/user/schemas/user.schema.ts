import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
});
