import { DataTypes } from "sequelize";
import { psqlConnectionSequelize } from "../config/db-connection";
import User from "./customer.model";

const Order = psqlConnectionSequelize.define(
  "Orders",
  {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    items: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    timestamps: true,
  },
);

export default Order;
