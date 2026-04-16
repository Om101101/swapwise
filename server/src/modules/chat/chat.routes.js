import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { sendMessage, getMessages } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", protect, sendMessage);
router.get("/:userId", protect, getMessages);

export default router;