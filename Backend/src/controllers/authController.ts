import { Request, Response } from "express";
import Account from "../models/Account";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const account = await Account.findOne({ username });

    if (!account || account.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: account._id, role: account.role },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
