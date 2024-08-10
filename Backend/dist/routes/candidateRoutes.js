"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidateController_1 = require("../controllers/candidateController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.protect, candidateController_1.getAllCandidates);
exports.default = router;
