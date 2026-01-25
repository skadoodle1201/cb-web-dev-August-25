import { connect } from "./config/db-connection";
import express from "express";
import User from "./models/customer.model";
import Order from "./models/orders.model";

const app = express();

app.use(express.json());

app.post("/sign-up", async (req, res) => {
  const { email, name, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
  });
  return res.json({
    name,
    email,
    password,
  });
});

app.post("/order", async (req, res) => {
  try {
    const { price, items, customerId } = req.body;

    console.log({
      customerId,
      price,
      items,
    });
    const newOrder = await Order.create({
      customerId,
      price,
      items,
    });

    return res.json({
      ...newOrder,
    });
  } catch (error) {
    console.log(error);
  }
});

// app.patch("/order", async (req, res) => {
//   const { orderId, updatePrice } = req.body;
//   const newOrder = await Order.update(
//     {
//       price: updatePrice,
//     },
//     {
//       where: {
//         id: orderId,
//       },
//     },
//   );

//   // await Order.destroy({
//   //   where: {
//   //     id: orderId,
//   //   },
//   // });

//   // await User.drop({
//   //   cascade: true,
//   // });

//   return res.json({
//     message: "Success",
//   });
// });

app.get("/orders", async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Order,
      where: {
        price: 34.22,
      },
    },
  });
  return res.json({
    users: users,
  });
});

connect().then(() => {
  app.listen(3000, async () => {
    console.log("listening on port 3000");
  });
});
