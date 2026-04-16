import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  createSwap,
  getMySwaps,
  updateSwapStatus,
} from "../controllers/swap.controller.js";

const router = express.Router();

router.post("/", protect, createSwap);
router.get("/", protect, getMySwaps);
router.put("/:id", protect, updateSwapStatus);

export default router;
