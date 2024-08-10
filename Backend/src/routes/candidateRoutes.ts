import { Router } from "express";
import { getAllCandidates } from "../controllers/candidateController";
import { protect } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", protect, getAllCandidates);

export default router;
