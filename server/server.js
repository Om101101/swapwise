import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import swapRoutes from "./src/routes/swap.routes.js";
import chatRoutes from "./src/routes/chat.routes.js";
import initSocket from "./src/socket/index.js"; // ✅ central socket file

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/swaps", swapRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => res.send("API Running 🚀"));

const server = http.createServer(app);

// ✅ Socket initialized from one place only
initSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`); // ✅ fixed backtick
});
