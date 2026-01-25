import { DataTypes } from "sequelize";
import { psqlConnectionSequelize } from "../config/db-connection";
import Order from "./orders.model";

const User = psqlConnectionSequelize.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

User.hasMany(Order, {
  foreignKey: "customerId",
}); // User can have many orders

export default User;
