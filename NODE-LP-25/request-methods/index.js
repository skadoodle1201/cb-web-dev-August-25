const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());

//http://localhost:3000/77?first_name=rahul&age=22
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const name = req.query.first_name;
  const age = req.query.age;
  res.send(`Hello World id:${id} and Name: ${name}`);
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("FROM POST");
});

app.put("/", (req, res) => {
  const body = req.body;
  console.log("FROM PUT", body);
  res.send("FROM PUT");
});

app.patch("/", (req, res) => {
  const body = req.body;
  console.log("FROM PATCH", body);
  res.send("FROM PATCH");
});

app.delete("/:id/", (req, res) => {
  const id = req.params.id;
  const name = req.query.first_name;
  const age = req.query.age;
  res.send(`Hello World id:${id} and Name: ${name} FROM DELETE`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
