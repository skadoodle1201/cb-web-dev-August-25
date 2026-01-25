"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("./config/db-connection");
const express_1 = __importDefault(require("express"));
const customer_model_1 = __importDefault(require("./models/customer.model"));
const orders_model_1 = __importDefault(require("./models/orders.model"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/sign-up", async (req, res) => {
    const { email, name, password } = req.body;
    const newUser = await customer_model_1.default.create({
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
        const newOrder = await orders_model_1.default.create({
            customerId,
            price,
            items,
        });
        return res.json({
            ...newOrder,
        });
    }
    catch (error) {
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
    const users = await customer_model_1.default.findAll({
        include: {
            model: orders_model_1.default,
            where: {
                price: 34.22,
            },
        },
    });
    return res.json({
        users: users,
    });
});
(0, db_connection_1.connect)().then(() => {
    app.listen(3000, async () => {
        console.log("listening on port 3000");
    });
});
