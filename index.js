"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var body_parser_1 = require("body-parser");
var FunctionRouter_1 = require("./dist-server/src/routes/FunctionRouter");
var UserRouter_1 = require("./dist-server/src/routes/UserRouter");
var DinamicApi_1 = require("./dist-server/src/routes/DinamicApi");
var config = require("dotenv").config;
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        config();
        this.config();
        this.routerConfig();
    }
    Server.prototype.config = function () {
        // body-parser parsea el contenido proveniente en la solicitud
        // para permitir una interface de tratamiento de datos más fácil
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        this.app.use(body_parser_1.json());
        this.app.use(function (_req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            //res.setHeader("Content-Type", "application/json");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next(); // chain the another middleware in pipeline
        });
    };
    /**
     * Config of routes
     */
    Server.prototype.routerConfig = function () {
        this.app.use("/functions", FunctionRouter_1["default"]);
        this.app.use("/users", UserRouter_1["default"]);
        this.app.use("/dinamicAPI", DinamicApi_1["default"]);
        this.app.use(express.static(__dirname + "/dist/js-api"));
        this.app.get("/*", function (req, res) {
            //res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            res.setHeader("Content-Type", "text/html");
            //res.write(path.join(__dirname + "/dist/js-api/index.html"), "utf-8");
            //res.end(); 
            res.sendFile(path.join(__dirname + "/dist/js-api/index.html"));
        });
        //Set Port
        this.app.listen(process.env.port || 3000);
    };
    return Server;
}());
//const server = new Server();
exports["default"] = new Server().app;
