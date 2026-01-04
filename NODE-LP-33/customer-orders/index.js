require("dotenv").config();

const dbConnect = require("./config/db.js");
const express = require("express");
const app = express();

const customerRoutes = require("./routes/customer.routes.js");
const orderRoutes = require("./routes/order.routes.js");

app.use(
  express.json({
    bodyparser: {
      extended: true,
    },
  })
);

app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);

(async () => {
  await dbConnect();
})()
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error starting application", err);
  });
