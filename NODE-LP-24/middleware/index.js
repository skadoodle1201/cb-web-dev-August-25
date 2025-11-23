const express = require("express");

const app = express();

// /greet/xxxxxxxx/xxxxx/xxxx
app.use("/greet", (req, res, next) => {
  //Middleware
  console.log("FROM Middelware 1 FOR GREET");
  next();
});
app.get("/greet", (req, res) => {
  res.send("GREETING OF THE DAY");
});

app.use((req, res, next) => {
  console.log("FROM Middelware 2");
  next();
});

app.get("/hello", (req, res) => {
  //Controller
  res.send("HELLO WORLD");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
