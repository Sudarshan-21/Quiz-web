import { Router } from "express";
import { getAllQuestions } from "../controllers/questionController";
import { protect } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", protect, getAllQuestions);

export default router;
