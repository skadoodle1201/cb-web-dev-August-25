const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); //all the domain all the orgins

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "OK",
  });
});

app.get("/todo", (req, res) => {
  return res.status(200).json({
    data: ["Cricket", "Code", "Sing"],
  });
});

app.listen(4444, () => {
  console.log("started server on http://localhost:4444/");
});
