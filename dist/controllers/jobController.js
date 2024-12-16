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
exports.addJob = exports.applyJob = exports.getFeaturedJobs = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const getFeaturedJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.body;
        console.log(category);
        const jobs = yield client_1.default.job.findMany({
            where: { category: { id: category } },
            include: { category: true },
        });
        res.status(200).json(jobs);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch featured jobs." });
    }
});
exports.getFeaturedJobs = getFeaturedJobs;
const applyJob = (req, res) => {
    res.status(200).json({ message: "Application successful (mocked)." });
};
exports.applyJob = applyJob;
const addJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, company, location, salary, featured, categoryId } = req.body;
        const newJob = yield client_1.default.job.create({
            data: {
                title,
                company,
                location,
                salary,
                featured,
                categoryId,
            },
        });
        res.status(201).json(newJob);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to add job." });
    }
});
exports.addJob = addJob;
