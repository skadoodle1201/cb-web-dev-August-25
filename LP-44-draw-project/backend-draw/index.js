require("dotenv").config();
const express = require("express");
const app = express();
const { mongoConnect } = require("./dbConnection.js");
const Users = require("./models/users.js");
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json({ extended: true, bodyParse: true }));

app.use("/user", userRoutes);

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
