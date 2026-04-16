import API from "./api";
import socket from "./socket.service";

// 📩 Send via socket (real-time)
export const sendMessageSocket = (data) => {
  socket.emit("send_message", data);
};

// 📥 Listen for incoming
export const onReceiveMessage = (callback) => {
  socket.on("receive_message", callback);
};

// 💾 Save to DB — ✅ correct endpoint + correct field name
export const saveMessageToDB = async ({ receiverId, message }) => {
  const res = await API.post("/chat", { receiver: receiverId, message }); // ✅ "receiver" not "receiverId"
  return res.data;
};

// 📜 Get chat history — ✅ correct endpoint
export const getChatHistory = async (receiverId) => {
  const res = await API.get(`/chat/${receiverId}`); // ✅ route param, not query string
  return res.data;
};

// 🔌 Join room
export const joinChat = (userId) => {
  socket.emit("join", userId);
};

// ❌ Remove listener (prevent duplicate messages)
export const removeMessageListener = () => {
  socket.off("receive_message");
};