import { Express, Request, Response } from "express";
import { result } from "lodash";
import { emailHandler } from "./controllers/email.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/emails", emailHandler);
}

export default routes;