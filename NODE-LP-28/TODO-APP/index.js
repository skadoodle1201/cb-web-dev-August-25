const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const TodoClass = require("./todo");
const todo = new TodoClass();

const {
  validateTaskMiddleware,
  validateUpdateTaskMiddleware,
  validateMoveTaskMiddleware,
  validateId,
} = require("./validator");

app.use("/", express.static(path.join(__dirname, "public")));

app.use(
  express.json({
    bodyParser: { extended: true },
  })
);

app.get("/todo", (req, res) => {
  const list = todo.getList();

  res.json({
    message: "Success",
    data: list,
  });
});

app.post("/todo", validateTaskMiddleware, (req, res) => {
  const { task } = req.body;

  const id = uuidv4();

  todo.add(id, task);
  res.json({
    message: "Success",
  });
});

app.patch("/todo", validateUpdateTaskMiddleware, (req, res) => {
  const { id, status, task, action } = req.body;
  todo.update(id, action, { status, task });

  res.json({
    message: "Success",
  });
});

app.patch("/todo/:id", validateMoveTaskMiddleware, (req, res) => {
  const { id } = req.params;
  const { action = "move-up" } = req.query;
  todo.move(id, action);
  res.json({
    message: "Success",
  });
});

app.get("/todo/:id", validateId, (req, res) => {
  const { id } = req.params;

  const todoDetail = todo.getTodoDetail(id);
  res.json({
    message: "Success",
    data: todoDetail,
  });
});

app.delete("/todo/:id", validateId, (req, res) => {
  const { id } = req.params;

  todo.remove(id);
  res.json({
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
