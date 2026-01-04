//Connect function to connect to mongo db
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/my_database";

const dbConnect = async () => {
  await mongoose.connect(url);
  console.log("Connected to db");
};

module.exports = dbConnect;
