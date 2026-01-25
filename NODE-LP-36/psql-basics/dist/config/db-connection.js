"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.psqlConnectionSequelize = void 0;
const sequelize_1 = require("sequelize");
const dbConfig = {
    databaseName: process.env.DB_NAME || "my_database",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "password",
    host: process.env.HOST || "localhost",
};
exports.psqlConnectionSequelize = new sequelize_1.Sequelize(dbConfig.databaseName, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: "postgres",
});
const connect = async () => {
    try {
        await exports.psqlConnectionSequelize.authenticate();
        await exports.psqlConnectionSequelize.sync({ force: true });
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
exports.connect = connect;
