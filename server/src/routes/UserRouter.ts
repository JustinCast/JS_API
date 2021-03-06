import { Router, Request, Response } from "express";
import { config } from "../config/config";
const { Client } = require("pg");
class UserRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  /**
   * @Funtion Save User
   * @param req
   * @param res
   */
  async saveUser(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query(
        "SELECT * FROM saveUser($1,$2,$3,$4)",
        [req.body.name, req.body.email, req.body.photo, req.body.uid]
      )
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }
  /**
   * @Funtion Get Users
   * @param req
   * @param res
   */
  async getUsers(req: Request, res: Response) {
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query("SELECT * FROM get_all_user()")
      .then(data => res.status(200).send(data.rows))
      .catch((err: Error) => {
        console.log(err);
        res.status(500).send();
      });
    await client.end();
  }

  
  routes() {
    this.router.post("/saveUser", this.saveUser);
    this.router.get("/getUsers", this.getUsers);
  }
}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;
