import { Server } from "socket.io";

const onlineUsers = new Map();

export default function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.id);

    socket.on("join", (userId) => {
      socket.join(userId);
      onlineUsers.set(userId, socket.id);
      console.log(`👤 User joined: ${userId}`); // ✅ fixed backtick
    });

    socket.on("send_message", ({ senderId, receiverId, message }) => {
      if (!senderId || !receiverId || !message) return;
      console.log("📩", senderId, "➡", receiverId, ":", message);
      io.to(receiverId).emit("receive_message", {
        senderId,
        receiverId,
        message,
      });
    });

    socket.on("disconnect", () => {
      for (let [userId, sockId] of onlineUsers.entries()) {
        if (sockId === socket.id) {
          onlineUsers.delete(userId);
          console.log(`🔴 User disconnected: ${userId}`); // ✅ fixed backtick
          break;
        }
      }
    });
  });
}
