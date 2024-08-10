import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import candidateRoutes from "./routes/candidateRoutes";
import questionRoutes from "./routes/questionRoutes";

dotenv.config();
const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/questions", questionRoutes);

export default app;
