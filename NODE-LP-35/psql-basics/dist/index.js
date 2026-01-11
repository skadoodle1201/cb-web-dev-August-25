"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = __importDefault(require("./config/db-connection"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, db_connection_1.default)().then(() => {
    app.listen(3000, () => {
        console.log("listening on port 3000");
    });
});
