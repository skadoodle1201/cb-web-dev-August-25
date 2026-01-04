const express = require("express");
const router = express.Router();

const OrderModel = require("../models/order.model.js");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

router.post("/", async (req, res) => {
  const { customerId, price, items = [] } = req.body;
  if (!(Array.isArray(items) && items.length)) {
    return res.json({
      message: "bad request",
    });
  }

  const newOrder = new OrderModel({
    customerId: new ObjectId(customerId),
    items,
    price,
  });

  const saveOrder = await newOrder.save();
  console.log(saveOrder);

  return res.json({
    message: "Success",
    data: saveOrder,
  });
});

router.get("/:customerId", async (req, res) => {
  const { customerId } = req.params;
  const { orderId } = req.query;

  const searchQuery = {
    customerId: new ObjectId(customerId),
  };

  if (orderId) {
    searchQuery._id = new ObjectId(orderId);
  }

  const order = await OrderModel.find(searchQuery);

  return res.json({
    message: "Success",
    data: order,
  });
});

module.exports = router;
