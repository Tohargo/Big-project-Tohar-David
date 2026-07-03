import express from "express";
import cors from "cors";
import { logger } from "./config/logger.js";
import router from "./routes/index.js";

export const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Logger middleware - logs every incoming request
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});

// Routes
app.use("/api", router);