//get mongoose
//schema Class/Constructor
//Create order scheam using Schema Class

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    items: [
      {
        type: String,
        required: true,
      },
    ],
    customerId: {
      type: ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel;
