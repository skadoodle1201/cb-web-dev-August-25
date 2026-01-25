"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../config/db-connection");
const Order = db_connection_1.psqlConnectionSequelize.define("Orders", {
    customerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    items: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
        defaultValue: [],
    },
}, {
    timestamps: true,
});
exports.default = Order;
