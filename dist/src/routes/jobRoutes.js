"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobController_1 = require("../controllers/jobController");
const router = express_1.default.Router();
router.post("/featured", jobController_1.getFeaturedJobs);
router.post("/apply", jobController_1.applyJob);
router.post("/addjob", jobController_1.addJob);
exports.default = router;
