import express from "express";
import routes from "../routes";
import cors from "cors";

export default function createServer() {
  const app = express();
  app.use(express.json())
  app.use(cors({
    origin: process.env.FRONTEND_HOST
  }));
  routes(app);
  return app;
}