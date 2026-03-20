import express from "express";
import dotenv from "dotenv";
import authRoutes from "../../routes/auth.routes";
import profileRoutes from "../../routes/profile.routes";
import userRoutes from "../../routes/user.routes";
import addressRoutes from "../../routes/address.routes";
import studyRoutes from "../../routes/study.routes";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", addressRoutes);
app.use("/api/v1/users", studyRoutes);

export default app;
