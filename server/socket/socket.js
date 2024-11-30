import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});
const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;
  console.log(userSocketMap);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User ${userId} joined room: ${roomId}`);
  });
  socket.on("globaljoinroom", () => {
    const globalRoomId = process.env.GLOBALROOMID;
    socket.join(globalRoomId);
    console.log(`User ${userId} joined room: ${globalRoomId}`);
  });

  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);

    if (userId) {
      delete userSocketMap[userId];
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, io, server };
