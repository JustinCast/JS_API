import { Router, Application } from "express";
import * as express from "express";
import { urlencoded, json } from "body-parser";
import FunctionRouter from "./routes/FunctionRouter";
import UserRouter from "./routes/UserRouter";
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
    this.app.use(urlencoded({extended: true}));
    this.app.use(json());
    this.app.use((_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.setHeader('Content-Type', 'application/json');
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next(); // chain the another middleware in pipeline
    });
  }

  /**
   * Configuración de entrada al enturador
   */
  routerConfig(): void {
    this.app.use('/functions', FunctionRouter);
    this.app.use('/users', UserRouter);
    //Set Port
    this.app.listen(5000);
  }
}

export default new Server().app;