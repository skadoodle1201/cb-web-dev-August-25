const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
const todo = [
  "Swim: Swimming is good for health",
  "Make Tea",
  "Bring Vegetables",
];

app.get("/todos", (req, res) => {
  res.json({
    todo,
  });
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  const task = req.body.task;

  todo.push(task);
  res.json({
    message: "Success",
  });
});
app.listen(4444, () => {
  console.log("http://localhost:4444");
});
