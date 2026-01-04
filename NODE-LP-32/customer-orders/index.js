const dbConnect = require("./config/db.js");
const express = require("express");
const app = express();

const bcrypt = require("bcrypt");

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

app.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;

  // const hashedPass = await bcrypt.hash(password, 10);

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({
      message: "Bad Request",
    });
  }

  const user = await CustomerModel.findOne({
    email: email,
  });

  if (!user) {
    return res.status(403).json({
      message: "Unauthorized",
      error: "Invalid password or email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(403).json({
      message: "Unauthorized",
      error: "Invalid password or email",
    });
  }

  return res.json({
    message: "Welcome",
  });
});

app.get("/customer", async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(404).json({
      message: "Bad Request",
    });
  }

  const customer = await CustomerModel.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "customerId",
        as: "results",
      },
    },
    {
      $unset: "password",
    },
  ]);

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
