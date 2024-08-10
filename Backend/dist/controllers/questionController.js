"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllQuestions = void 0;
const Question_1 = __importDefault(require("../models/Question"));
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, tags, searchText } = req.query;
    const query = {};
    if (tags) {
        query.tags = { $in: tags };
    }
    if (searchText) {
        query.questionText = { $regex: searchText, $options: "i" };
    }
    try {
        const questions = yield Question_1.default.find(query)
            .sort({ updatedAt: -1 })
            .skip((+page - 1) * +limit)
            .limit(+limit);
        res.json(questions);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.getAllQuestions = getAllQuestions;
