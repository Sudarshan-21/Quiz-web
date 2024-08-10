import { Request, Response } from "express";
import Question from "../models/Question";

export const getAllQuestions = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, tags, searchText } = req.query;
  const query: any = {};

  if (tags) {
    query.tags = { $in: tags };
  }

  if (searchText) {
    query.questionText = { $regex: searchText, $options: "i" };
  }

  try {
    const questions = await Question.find(query)
      .sort({ updatedAt: -1 })
      .skip((+page - 1) * +limit)
      .limit(+limit);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
