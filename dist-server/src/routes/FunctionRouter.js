"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var config_1 = require("../config/config");
var Client = require("pg").Client;
var fs = require("fs");
var FunctionRouter = /** @class */ (function () {
    function FunctionRouter() {
        this.router = express_1.Router();
    }
    /**
     * @Funtion Save Function
     * @param req
     * @param res
     */
    FunctionRouter.prototype.saveFunction = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new Client(config_1.config);
                        return [4 /*yield*/, client
                                .connect()
                                .then(function () { return console.log("connected"); })["catch"](function (err) { return console.error("connection error", err.stack); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client
                                .query("SELECT * FROM save_function($1, $2, $3, $4, $5)", [
                                req.body.name,
                                req.body.description,
                                req.body.tags,
                                req.body.code,
                                req.body.us_id,
                            ])
                                .then(function (data) { return res.status(200).send(data.rows[0]); })["catch"](function (err) {
                                console.log(err);
                                res.send();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function Search function by name
     * @param req
     * @param res
     */
    FunctionRouter.prototype.searchFunction = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new Client(config_1.config);
                        return [4 /*yield*/, client
                                .connect()
                                .then(function () { return console.log("connected"); })["catch"](function (err) { return console.error("connection error", err.stack); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client
                                .query("SELECT * FROM search_function_by_name_minimal_result($1)", [
                                req.query.name,
                            ])
                                .then(function (data) { return res.status(200).send(data.rows[0]); })["catch"](function (err) {
                                console.log(err);
                                res.status(500).send();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function Save dependant function
     * @param req
     * @param res
     */
    FunctionRouter.prototype.saveDependant = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new Client(config_1.config);
                        return [4 /*yield*/, client
                                .connect()
                                .then(function () {
                                console.log("connected");
                            })["catch"](function (err) { return console.error("connection error", err.stack); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client
                                .query("SELECT * FROM save_dependant($1, $2)", [
                                req.body.from,
                                req.body.to,
                            ])
                                .then(function (data) { return res.status(200).send(data.rows); })["catch"](function (err) {
                                console.log(err);
                                res.status(500).send();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function Get function by user name
     * @param req
     * @param res
     */
    FunctionRouter.prototype.getFunctionsByUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new Client(config_1.config);
                        return [4 /*yield*/, client
                                .connect()
                                .then(function () {
                                console.log("connected");
                            })["catch"](function (err) { return console.error("connection error", err.stack); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client
                                .query("SELECT * FROM get_functions_by_user($1)", [req.params.us_id])
                                .then(function (data) { return res.status(200).send(data.rows); })["catch"](function (err) {
                                console.log(err);
                                res.status(500).send();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @Funtion Get all functions
     * @param req
     * @param res
     */
    FunctionRouter.prototype.getAllFunctions = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new Client(config_1.config);
                        return [4 /*yield*/, client
                                .connect()
                                .then(function () { return console.log("connected"); })["catch"](function (err) { return console.error("connection error", err.stack); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client
                                .query("SELECT * FROM get_all_function()")
                                .then(function (data) { return res.status(200).send(data.rows); })["catch"](function (err) {
                                console.log(err);
                                res.status(500).send();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function Update function
     * @param req
     * @param res
     */
    FunctionRouter.prototype.updateFn = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new Client(config_1.config);
                        return [4 /*yield*/, client
                                .connect()
                                .then(function () {
                                console.log("connected");
                            })["catch"](function (err) { return console.error("connection error", err.stack); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client
                                .query("SELECT * FROM update_fn($1, $2, $3, $4, $5)", [
                                req.body._id,
                                req.body._name,
                                req.body._description,
                                JSON.stringify(req.body._tags.tags),
                                req.body._code,
                            ])
                                .then(function () { return res.status(200).send(); })["catch"](function (err) {
                                console.log(err);
                                res.status(500).send();
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FunctionRouter.prototype.routes = function () {
        this.router.post("/saveFunction", this.saveFunction);
        this.router.get("/getAllFunctions", this.getAllFunctions);
        this.router.post("/saveDependant", this.saveDependant);
        this.router.put("/updateFn", this.updateFn);
        this.router.get("/searchFunction", this.searchFunction);
        this.router.get("/getFunctionsByUser/:us_id", this.getFunctionsByUser);
    };
    return FunctionRouter;
}());
var functionRoutes = new FunctionRouter();
functionRoutes.routes();
exports["default"] = functionRoutes.router;
