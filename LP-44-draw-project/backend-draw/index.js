require("dotenv").config();
const express = require("express");
const app = express();
const { mongoConnect } = require("./dbConnection.js");
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const canvasRoutes = require("./routes/canvas.routes.js");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const FE_URL = process.env.ALLOWED_HOST;
app.use(
  cors({
    origin: FE_URL,
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json({ extended: true, bodyParse: true }));

app.use("/user", userRoutes);
app.use("/canvas", canvasRoutes);

app.get("/health", (req, res) => {
  res.send("OK");
});
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: FE_URL, credentials: true },
});

const roomMap = {};
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join_room", ({ roomId, canvas }) => {
    if (!roomId) {
      return;
    }

    roomId = String(roomId);

    socket.join(roomId);

    const currentRoom = roomMap[roomId];

    if (!currentRoom) {
      roomMap[roomId] = canvas;
    } else {
      socket.emit("room_joined", { roomId, canvas: currentRoom });
    }
  });
  socket.on("canvas_change", ({ roomId, canvas }) => {
    if (!roomId) {
      return;
    }

    roomId = String(roomId);
    roomMap[roomId] = canvas;
    socket.to(`${roomId}`).emit("canvas_modifed", { roomId, canvas });
  });
});

const startServer = async () => {
  await mongoConnect();

  server.listen(4000, () => {
    console.log("Application started on PORT 4000");
  });
};

startServer();
