const mongoose = require("mongoose");

async function mongoConnect() {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  mongoConnect,
};
