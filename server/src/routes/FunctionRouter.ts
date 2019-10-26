import { Router, Request, Response } from "express";
import { config } from '../config/config';
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
      .query("SELECT * FROM function;")
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  routes() {
    this.router.get("/saveFunction", this.saveFunction);
  }
}

const functionRoutes = new FunctionRouter();
functionRoutes.routes();

export default functionRoutes.router;
