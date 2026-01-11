"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig = {
    databaseName: process.env.DB_NAME || "my_database",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "password",
    host: process.env.HOST || "localhost",
};
const sequelize = new sequelize_1.Sequelize(dbConfig.databaseName, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: "postgres",
});
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
exports.default = connect;
