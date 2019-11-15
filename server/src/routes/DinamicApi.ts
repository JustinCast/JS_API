import { Router, Request, Response } from "express";
import { config } from "../config/config";
const { Client } = require("pg");
var fs = require("fs");
class DinamicApi {
  router: Router;

  constructor() {
    this.router = Router();
  }



  async dinamic_Api(req: Request, res: Response) {
    res.setHeader('content-type','text/javascript');
    const client = new Client(config);
    await client
      .connect()
      .then(() => console.log("connected"))
      .catch(err => console.error("connection error", err.stack));
    await client
      .query(`SELECT * FROM getFunctionById(${req.query.id})`)
      .then(data => {
        client.end();
        let code_string = '';
        data.rows.forEach( aux => code_string = code_string.concat(aux.code));
        console.log(code_string);
      })
      .catch((err: Error) => {
        client.end();
        return false
      });
  }



  routes() {
    this.router.get("/dinamicAPI",this.dinamic_Api);
  }
}



const dinamicApi = new DinamicApi();
dinamicApi.routes();

export default dinamicApi.router;