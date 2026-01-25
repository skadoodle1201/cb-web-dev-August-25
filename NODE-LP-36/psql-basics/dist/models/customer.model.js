"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../config/db-connection");
const orders_model_1 = __importDefault(require("./orders.model"));
const User = db_connection_1.psqlConnectionSequelize.define("Users", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});
User.hasMany(orders_model_1.default, {
    foreignKey: "customerId",
}); // User can have many orders
exports.default = User;
