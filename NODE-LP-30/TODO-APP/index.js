const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const TodoClass = require("./todo");

const {
  validateTaskMiddleware,
  validateUpdateTaskMiddleware,
  validateMoveTaskMiddleware,
  validateId,
} = require("./validator");
const { dbConnect } = require("./mongo-config");

app.use("/", express.static(path.join(__dirname, "public")));

(async () => {
  await dbConnect();
})()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.error("DB Connect Failed due to", error);
  });

const todo = new TodoClass();

app.use(
  express.json({
    bodyParser: { extended: true },
  })
);

app.get("/todo", async (req, res) => {
  const list = await todo.getList();

  res.json({
    message: "Success",
    data: list,
  });
});

app.post("/todo", validateTaskMiddleware, async (req, res) => {
  const { task, order } = req.body;

  await todo.add(task, order);
  res.json({
    message: "Success",
  });
});

app.patch("/todo", validateUpdateTaskMiddleware, async (req, res) => {
  try {
    const { id, status, task, action } = req.body;
    await todo.update(id, action, { status, task });

    res.json({
      message: "Success",
    });
  } catch (error) {
    console.log("ERROR updating ", error);
    res.json({
      message: "failed",
      error: error.message,
    });
  }
});

app.patch("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { order } = req.query;
  await todo.move(id, order);
  res.json({
    message: "Success",
  });
});

app.get("/todo/:id", validateId, async (req, res) => {
  const { id } = req.params;

  const todoDetail = await todo.getTodoDetail(id);
  res.json({
    message: "Success",
    data: todoDetail,
  });
});

app.delete("/todo/:id", validateId, async (req, res) => {
  const { id } = req.params;

  await todo.remove(id);
  res.json({
    message: "Success",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
