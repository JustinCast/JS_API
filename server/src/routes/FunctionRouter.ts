import { Router, Request, Response } from "express";
import { config } from '../config/config';
const { Client } = require("pg");
class FunctionRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  /**
   * @Funtion Save Function
   * @param req
   * @param res
   */
  async saveFunction(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query("select f.id,f.name, f.description, f.tags,u.name user_name from _function as f INNER JOIN _user as u ON f.us_id = u.id;")
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  /**
   * @Funtion Get all functions
   * @param req
   * @param res
   */
  async getAllFunction(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query("select f.id,f.name, f.description, f.tags,f.code,u.name user_name from _function as f INNER JOIN _user as u ON f.us_id = u.id;")
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }
  routes() {
    this.router.get("/saveFunction", this.saveFunction);
    this.router.get("/getAllFunctions", this.getAllFunction);
  }
}

const functionRoutes = new FunctionRouter();
functionRoutes.routes();

export default functionRoutes.router;
