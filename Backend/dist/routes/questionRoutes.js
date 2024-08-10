"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questionController_1 = require("../controllers/questionController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.protect, questionController_1.getAllQuestions);
exports.default = router;
