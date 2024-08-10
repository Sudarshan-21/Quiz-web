"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const candidateRoutes_1 = __importDefault(require("./routes/candidateRoutes"));
const questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", authRoutes_1.default);
app.use("/api/candidates", candidateRoutes_1.default);
app.use("/api/questions", questionRoutes_1.default);
exports.default = app;
