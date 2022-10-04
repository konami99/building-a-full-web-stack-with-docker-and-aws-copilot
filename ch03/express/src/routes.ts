import { Express, Request, Response } from "express";
import { result } from "lodash";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
}

export default routes;