const mongoose = require("mongoose");

async function mongoConnect() {
  try {
    console.log("Trying to connect to mongo.....");
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to mongo.....");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  mongoConnect,
};
