import { io } from "socket.io-client";

const URL = process.env.DOMAIN_URL;

export const socket = io(URL, {
  autoConnect: false, // prevents connection on page load
});

export const connectToRoom = ({ id, canvas }) => {
  if (!id) {
    id = Math.floor(100000 + Math.random() * 900000);
  }

  const roomId = String(id);
  const joinPayload = { roomId, canvas };

  if (socket.connected) {
    socket.emit("join_room", joinPayload);
    return roomId;
  }

  socket.connect();
  socket.once("connect", () => {
    socket.emit("join_room", joinPayload);
  });

  return roomId;
};
