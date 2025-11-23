const express = require("express");
const app = express(); // Give a application instance

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

//To Get data from request using parameter or params method
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Welcome To Express, ${name}`);
});

//To Get data from request using query method
app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`Welcome To Express via QUERY, ${name}`);
});

app.listen(3000, () => {
  console.log("Application listening on 3000");
  console.log("http://localhost:3000");
});
