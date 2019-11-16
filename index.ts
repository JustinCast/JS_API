import { Router, Application } from "express";
import * as express from "express";
import * as path from "path"
import { urlencoded, json } from "body-parser";
import FunctionRouter from "./server/src/routes/FunctionRouter";
import UserRouter from "./server/src/routes/UserRouter";
import DinamicApi from "./server/src/routes/DinamicApi";
const { config } = require("dotenv");
class Server {
  app: Application;

  constructor() {
    this.app = express();
    config();
    this.config();
    this.routerConfig();
  }

  config(): void {
    // body-parser parsea el contenido proveniente en la solicitud
    // para permitir una interface de tratamiento de datos más fácil
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use((_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.setHeader("Content-Type", "application/json");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next(); // chain the another middleware in pipeline
    });
  }

  /**
   * Config of routes
   */
  routerConfig(): void {
    this.app.use("/functions", FunctionRouter);
    this.app.use("/users", UserRouter);
    this.app.use("/dinamicAPI", DinamicApi);
    this.app.use(express.static(__dirname + "/dist/js-api"));
    this.app.get("/*", function(req, res) {
      res.sendFile(
        path.join(__dirname + "/dist/js-api/index.html")
      );
    });
    //Set Port
    this.app.listen(5000);
  }
}

export default new Server().app;
