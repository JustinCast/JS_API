import { Router, Request, Response } from "express";
import { config } from "../config/config";
const { Client } = require("pg");
class FunctionRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  async saveFunction(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query("SELECT * FROM save_function($1, $2, $3, $4, $5)", [
        req.body.name,
        req.body.description,
        req.body.tags,
        req.body.code,
        req.body.us_id,
      ])
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  async searchFunction(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));

    await client
      .query("SELECT * FROM search_function_by_name_minimal_result($1)", [
        req.query.name
      ])
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  routes() {
    this.router.post("/saveFunction", this.saveFunction);
    this.router.get("/searchFunction", this.searchFunction);
  }
}

const functionRoutes = new FunctionRouter();
functionRoutes.routes();

export default functionRoutes.router;
