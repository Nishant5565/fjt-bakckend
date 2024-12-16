import express from "express";
import jobRoutes from "./routes/jobRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import cors from 'cors';

const app = express();
app.use(cors(
     {
          origin: 'http://localhost:8081',
          credentials: true
     }
));

app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
