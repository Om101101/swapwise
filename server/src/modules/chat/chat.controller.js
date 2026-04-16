import Message from "../models/Message.model.js";

// 🔥 SEND MESSAGE
export const sendMessage = async (req, res) => {
  try {
    const { receiver, message } = req.body;

    const newMsg = await Message.create({
      sender: req.user._id,
      receiver,
      message,
    });

    res.json(newMsg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 GET MESSAGES
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: req.params.userId },
        { sender: req.params.userId, receiver: req.user._id },
      ],
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
