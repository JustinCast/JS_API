import { Router, Request, Response } from "express";
import { config } from "../config/config";
const { Client } = require("pg");
var fs = require("fs");
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
      .query("SELECT * FROM save_function($1, $2, $3, $4, $5)", [
        req.body.name,
        req.body.description,
        req.body.tags,
        req.body.code,
        req.body.us_id,
      ])
      .then(data => res.status(200).send(data.rows[0]))
      .catch((err: Error) => {
        console.log(err);
        res.send();
      });
    await client.end();
  }

  /**
   * @function Search function by name
   * @param req
   * @param res
   */
  async searchFunction(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));

    await client
      .query("SELECT * FROM search_function_by_name_minimal_result($1)", [
        req.query.name,
      ])
      .then(data => res.status(200).send(data.rows[0]))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  /**
   * @function Save dependant function
   * @param req
   * @param res
   */
  private async saveDependant(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => {
        console.log("connected");
      })
      .catch((err: Error) => console.error("connection error", err.stack));

    await client
      .query("SELECT * FROM save_dependant($1, $2)", [
        req.body.from,
        req.body.to,
      ])
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  /**
   * @function Get function by user name
   * @param req
   * @param res
   */
  private async getFunctionsByUser(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => {
        console.log("connected");
      })
      .catch((err: Error) => console.error("connection error", err.stack));

    await client
      .query("SELECT * FROM get_functions_by_user($1)", [req.params.us_id])
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
  async getAllFunctions(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query(
        "SELECT * FROM get_all_function()"
      )
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  /**
   * @function Update function
   * @param req
   * @param res
   */
  private async updateFn(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => {
        console.log("connected");
      })
      .catch((err: Error) => console.error("connection error", err.stack));

    await client
      .query("SELECT * FROM update_fn($1, $2, $3, $4, $5)", [
        req.body._id,
        req.body._name,
        req.body._description,
        JSON.stringify(req.body._tags.tags),
        req.body._code,
      ])
      .then(() => res.status(200).send())
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  routes() {
    this.router.post("/saveFunction", this.saveFunction);
    this.router.get("/getAllFunctions", this.getAllFunctions);
    this.router.post("/saveDependant", this.saveDependant);
    this.router.put("/updateFn", this.updateFn);
    this.router.get("/searchFunction", this.searchFunction);
    this.router.get("/getFunctionsByUser/:us_id", this.getFunctionsByUser);
  }
}

const functionRoutes = new FunctionRouter();
functionRoutes.routes();

export default functionRoutes.router;
