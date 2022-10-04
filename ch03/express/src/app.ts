import express, { Request, Response } from "express";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand"
import config from "config";
import routes from "./routes";
import createServer from "./utils/server";

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const port = parseInt(process.env.PORT as string);
const app = createServer();

app.listen(port, async () => {});
