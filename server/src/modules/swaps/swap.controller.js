import Swap from "../models/Swap.model.js";

// 🔥 SEND REQUEST
export const createSwap = async (req, res) => {
  try {
    const { toUser, skillOffered, skillRequested } = req.body;

    // ❌ prevent self swap
    if (toUser === req.user._id.toString()) {
      return res.status(400).json({
        message: "You cannot send swap request to yourself",
      });
    }

    // ❌ prevent duplicate pending request
    const existing = await Swap.findOne({
      fromUser: req.user._id,
      toUser,
      status: "pending",
    });

    if (existing) {
      return res.status(400).json({
        message: "Swap request already sent",
      });
    }

    const swap = await Swap.create({
      fromUser: req.user._id,
      toUser,
      skillOffered,
      skillRequested,
    });

    res.status(201).json(swap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 GET MY SWAPS
export const getMySwaps = async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [{ fromUser: req.user._id }, { toUser: req.user._id }],
    }).populate("fromUser toUser", "name email");

    res.json(swaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 UPDATE STATUS (accept / reject)
export const updateSwapStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const swap = await Swap.findById(req.params.id);

    if (!swap) {
      return res.status(404).json({ message: "Swap not found" });
    }

    // ❌ only receiver can update
    if (swap.toUser.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    swap.status = status;
    await swap.save();

    res.json(swap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
