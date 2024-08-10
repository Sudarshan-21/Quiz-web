import mongoose, { Document, Schema } from "mongoose";

interface ICandidate extends Document {
  name: string;
  email: string;
  phone: string;
  createdDate: Date;
}

const CandidateSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model<ICandidate>("Candidate", CandidateSchema);
