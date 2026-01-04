const express = require("express");

const CustomerModel = require("../models/customer.model.js");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const {
  createCustomer,
  login,
} = require("../controllers/customer.controller.js");
const {
  authenticateUser,
} = require("../middleware/authentication.middleware.js");

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;

  const savedCustomer = await createCustomer({
    name,
    email,
    password,
  });

  return res.json({
    message: "Success",
    data: savedCustomer,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Bad Request",
    });
  }

  const isLogin = await login(email, password);

  return res.status(isLogin.statusCode).json(isLogin);
});

router.get("/", authenticateUser, async (req, res) => {
  const { id } = req.user;
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

module.exports = router;
