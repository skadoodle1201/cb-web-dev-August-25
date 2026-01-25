const express = require("express");
const app = express();

// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");

const todo = ["Swim", "Cook", "Code"];

app.get("/", (req, res) => {
  res.render("index", { todo });
});

app.post("/todo", (req, res) => {
  todo.push(req.body.task);
  res.render("index", { todo });
});

app.listen(4444, () => {
  console.log("http://localhost:4444");
});
