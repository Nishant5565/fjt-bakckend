"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:8081',
    credentials: true
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to the Jobs API");
});
app.use("/api/jobs", jobRoutes_1.default);
app.use("/api/categories", categoryRoutes_1.default);
exports.default = app;
