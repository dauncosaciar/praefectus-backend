import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger.config";
import { connectToDatabase } from "./config/db.config";
import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.routes";
import userRoutes from "./routes/user.routes";
import addressRoutes from "./routes/address.routes";
import studyRoutes from "./routes/study.routes";

// Allow reading .env files
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

// Connect to database
connectToDatabase();

// Create express application
const app = express();

// Logging
app.use(morgan("dev"));

// Allow receiving JSON data in req.body
app.use(express.json());

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", addressRoutes);
app.use("/api/v1/users", studyRoutes);

// Swagger API docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

export default app;
