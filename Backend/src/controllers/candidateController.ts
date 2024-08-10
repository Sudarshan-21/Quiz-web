import { Request, Response } from "express";
import Candidate from "../models/Candidate";

export const getAllCandidates = async (req: Request, res: Response) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const candidates = await Candidate.find()
      .sort({ createdDate: -1 })
      .skip((+page - 1) * +limit)
      .limit(+limit);
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
