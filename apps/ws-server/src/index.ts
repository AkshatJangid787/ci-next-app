import { WebSocketServer } from "ws";
import pkg from "@repo/db/client";
const { client } = pkg;

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Hi there you are connected to the server");
});
