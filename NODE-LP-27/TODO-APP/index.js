const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const TodoClass = require("./todo");
// const todo = new TodoClass();

const {
  validateTaskMiddleware,
  validateUpdateTaskMiddleware,
  validateMoveTaskMiddleware,
  validateId,
} = require("./validator");

app.use(
  express.json({
    bodyParser: { extended: true },
  })
);

const userTodoList = {};

app.post("/user/todo", (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  if (userTodoList[username]) {
    return res.status(400).json({
      message: "User Already Exist",
    });
  }
  const todo = new TodoClass();
  userTodoList[username] = todo;
  res.json({
    message: "Success",
  });
});

app.get("/todo", (req, res) => {
  const { username } = req.headers;
  const todo = userTodoList[username];
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  if (!todo) {
    return res.json({
      message: "User Does not exits",
    });
  }

  const list = todo.getList();

  console.log(username, list);

  res.json({
    message: "Success",
    data: list,
  });
});

app.post("/todo", validateTaskMiddleware, (req, res) => {
  const { task } = req.body;
  const { username } = req.headers;
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  const todo = userTodoList[username];
  if (!todo) {
    return res.json({
      message: "User Does not exits",
    });
  }

  const id = uuidv4();

  todo.add(id, task);
  res.json({
    message: "Success",
  });
});

app.patch("/todo", validateUpdateTaskMiddleware, (req, res) => {
  const { id, status, task, action } = req.body;
  const { username } = req.headers;
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  const todo = userTodoList[username];
  if (!todo) {
    return res.json({
      message: "User Does not exits",
    });
  }
  todo.update(id, action, { status, task });

  res.json({
    message: "Success",
  });
});

app.patch("/todo/:id", validateMoveTaskMiddleware, (req, res) => {
  const { id } = req.params;
  const { action = "move-up" } = req.query;
  const { username } = req.headers;
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  const todo = userTodoList[username];
  if (!todo) {
    return res.json({
      message: "User Does not exits",
    });
  }
  todo.move(id, action);
  res.json({
    message: "Success",
  });
});

app.get("/todo/:id", validateId, (req, res) => {
  const { id } = req.params;
  const { username } = req.headers;
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  const todo = userTodoList[username];
  if (!todo) {
    return res.json({
      message: "User Does not exits",
    });
  }
  const todoDetail = todo.getTodoDetail(id);
  res.json({
    message: "Success",
    data: todoDetail,
  });
});

app.delete("/todo/:id", validateId, (req, res) => {
  const { id } = req.params;
  const { username } = req.headers;
  if (!username) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }

  const todo = userTodoList[username];
  if (!todo) {
    return res.json({
      message: "User Does not exits",
    });
  }
  todo.remove(id);
  res.json({
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
