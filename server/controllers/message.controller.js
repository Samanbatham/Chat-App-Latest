import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const GetMessage = async (req, res) => {
  const recieverId = req.params.id;
  const senderId = req.user.userId;

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, recieverId] },
  }).populate("messages");

  if (!conversation) {
    return res.status(200).json({ message: [] });
  }
  res.status(200).json({
    messages: conversation.messages,
  });
};
export const SendMessage = async (req, res) => {
  const receiverId = req.params.id;
  const senderId = req.user.userId;
  const message = req.body.message;

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });
  if (!conversation) {
    conversation = new Conversation({ participants: [senderId, receiverId] });
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  conversation.messages.push(newMessage);
  await conversation.save();
  await newMessage.save();
  res.status(200).json({
    newMessage,
  });
  const receiverSocketId = getReceiverSocketId(receiverId);
   io.to(receiverSocketId).emit("newMessage", newMessage);
  
};
