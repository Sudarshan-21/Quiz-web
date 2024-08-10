import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IUser {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as IUser;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
