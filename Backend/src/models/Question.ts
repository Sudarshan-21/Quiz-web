import mongoose, { Document, Schema } from "mongoose";

interface IQuestion extends Document {
  questionText: string;
  options: string[];
  correctOption: number;
  tags: string[];
  marks: number;
  negativeMarking: number;
}

const QuestionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: Number, required: true },
  tags: { type: [String], index: true },
  marks: { type: Number, required: true },
  negativeMarking: { type: Number, required: true },
});

export default mongoose.model<IQuestion>("Question", QuestionSchema);
