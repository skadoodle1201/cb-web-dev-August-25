const dbConnect = require("./config/db.js");
const express = require("express");
const app = express();

const CustomerModel = require("./models/customer.model.js");
const OrderModel = require("./models/order.model.js");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

app.use(
  express.json({
    bodyparser: {
      extended: true,
    },
  })
);

(async () => {
  await dbConnect();
})()
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error starting application", err);
  });

app.post("/customer", async (req, res) => {
  const { name, email, password } = req.body;

  const newCustomer = new CustomerModel({
    name: name,
    email: email,
    password: password,
  });

  const savedCustomer = await newCustomer.save();
  return res.json({
    message: "Success",
    data: savedCustomer,
  });
});

app.get("/customer", async (req, res) => {
  const { id } = req.query;
  const searchQuery = {};
  if (id) {
    searchQuery._id = new ObjectId(id);
  }

  const customer = await CustomerModel.find(searchQuery);
  return res.json({
    message: "Success",
    data: customer,
  });
});

app.post("/order", async (req, res) => {
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

app.get("/order/:customerId", async (req, res) => {
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
