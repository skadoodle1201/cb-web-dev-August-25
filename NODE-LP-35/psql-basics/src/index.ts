import connect from "./config/db-connection";
import express from "express";
const app = express();

connect().then(() => {
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
});
