import mongoose, { Document, Schema } from "mongoose";

interface IAccount extends Document {
  username: string;
  password: string;
  role: string;
}

const AccountSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["Admin", "Delivery Admin"] },
});

export default mongoose.model<IAccount>("Account", AccountSchema);
