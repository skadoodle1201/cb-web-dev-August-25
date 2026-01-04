const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CustomerModel = require("../models/customer.model.js");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const privateSecret = process.env.JWT_SIGNATURE;

const createCustomer = async ({ name, email, password }) => {
  const newCustomer = new CustomerModel({
    name,
    email,
    password,
  });

  const savedCustomer = await newCustomer.save();

  return savedCustomer;
};

const login = async (email, password) => {
  try {
    const user = await CustomerModel.findOne({
      email: email,
    });

    if (!user) {
      throw new Error("Invalid password or email");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password or email");
    }

    const token = jwt.sign(
      { name: user.name, email: user.email, id: user._id },
      privateSecret
    );

    return {
      message: "Success",
      statusCode: 200,
      token,
    };
  } catch (error) {
    return {
      message: "Unauthorized",
      error: error.message,
      statusCode: 403,
    };
  }
};

module.exports = {
  createCustomer,
  login,
};
