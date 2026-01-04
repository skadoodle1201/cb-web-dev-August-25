const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bcrypt = require("bcrypt");

const customerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

customerSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
const CustomerModel = mongoose.model("customer", customerSchema);

module.exports = CustomerModel;
