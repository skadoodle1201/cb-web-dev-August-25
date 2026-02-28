require("dotenv").config();
const express = require("express");
const app = express();
const { mongoConnect } = require("./dbConnection.js");
const Users = require("./models/users.js");

app.use(express.json({ extended: true, bodyParse: true }));

app.post("/user", async (req, res) => {
  try {
    const body = req.body;
    const { username, email, password } = body;
    const createUser = new Users({
      username,
      email,
      password,
    });

    await createUser.save();

    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

app.get("/health", (req, res) => {
  res.send("OK");
});

const startServer = async () => {
  await mongoConnect();

  app.listen(4000, () => {
    console.log("Application started on PORT 4000, http://localhost:4000");
  });
};

startServer();
