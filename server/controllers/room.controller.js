import CustomRoom from "../model/customRoom.model.js";
import CustomRoomMsg from "../model/customRoomMsg.model.js";
import User from "../model/user.model.js";
import Google from "../model/google.model.js";
import { io } from "../socket/socket.js";

export const createRoom = async (req, res) => {
  try {
    const admin = req.user.userId;
    const participants = admin;
    const roomName = req.body.roomName;
    if (!roomName) {
      return res.status(400).json({ message: "Please enter room name" });
    }
    const existingRoom = await CustomRoom.findOne({ roomName });
    if (existingRoom && existingRoom.admin === admin) {
      return res.status(400).json({ message: "Room already exists" });
    }
    const customRoom = await CustomRoom.create({
      participants: [participants],
      admin: admin,
      roomName: roomName,
    });

    if (!customRoom) {
      return res.status(400).json({ message: "Failed to create room" });
    } else {
      return res
        .status(201)
        .json({ message: "Room created successfully", data: customRoom });
    }
  } catch (error) {
    console.log("Error in the createRoom controller", error);
  }
};
export const sendMsg = async (req, res) => {
  const roomId = req.params.id;
  const senderId = req.user.userId;
  const message = req.body.message;
  const loggedInUser = req.user.userId;

  try {
    const existingRoom = await CustomRoom.findById(roomId);
    if (!existingRoom) {
      return res.status(400).json({ message: "Room not found" });
    }
    const userData =
      (await User.findOne({ _id: loggedInUser })) ||
      (await Google.findOne({ _id: loggedInUser }));

    const newMessage = new CustomRoomMsg({
      senderId: senderId,
      roomId: roomId,
      message: message,
      profilePic: userData.image,
      senderName: userData.username,
    });
    console.log(newMessage);
    const savedMessage = await newMessage.save();
    existingRoom.messages.push(savedMessage._id);
    await existingRoom.save();
    res.status(200).json({
      message: true,
      data: savedMessage,
    });
    console.log(savedMessage);

    io.to(roomId).emit("roomMsg", savedMessage);
  } catch (error) {
    console.log("Error in the sendMsg controller", error);
  }
};
export const getMsg = async (req, res) => {
  const roomId = req.params.id;
  try {
    const messages = await CustomRoom.findOne({ _id: roomId })
      .populate("messages")
      .populate();

    if (!messages) {
      return res.status(200).json({ message: false });
    }
    return res.status(200).json({ message: true, data: messages });
  } catch (error) {
    console.log("Error in the getMsg controller", error);
  }
};
export const getRooms = async (req, res) => {
  try {
    const userId = req.user.userId;

    const rooms = await CustomRoom.find({ participants: userId });

    if (!rooms) {
      return res.status(200).json({ message: "No rooms found" });
    } else {
      return res
        .status(200)
        .json({ message: "Rooms found successfully", data: rooms });
    }
  } catch (error) {
    console.log("error in the getRoom controller", error);
  }
};
export const AddUserToRoom = async (req, res) => {
  try {
    const userId = req.body.userId;
    const roomId = req.body.roomId;
    const existingRoom = await CustomRoom.findOne({ _id: roomId });

    if (!existingRoom) {
      return res.status(200).json({ message: "Room not found" });
    }
    const existingParticipant = existingRoom.participants.find(
      (participant) => participant.toString() === userId.toString()
    );
    if (existingParticipant) {
      return res.status(200).json({ message: "User already in the room" });
    }
    existingRoom.participants.push(userId);
    existingRoom.save();
    res.status(200).json({ message: "User added Successfully" });
  } catch (error) {
    console.log("Error in the addUserToRoom controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const GetRoomData = async (req, res) => {
  try {
    const roomId = req.params.id;

    const room = await CustomRoom.findById(roomId)
      .populate("messages")
      .populate("participants");

    if (!room) {
      return res.status(200).json({ message: "Room not found" });
    } else {
      return res
        .status(200)
        .json({ message: "Room data found successfully", room });
    }
  } catch (error) {
    console.log("Error in the getRoomData controller", error);
    res.status(500).json("Internal Server Error");
  }
};
export const KickUser = async (req, res) => {
  try {
    const roomId = req.body.roomId;
    const userId = req.body.userId;
    const existingRoom = await CustomRoom.findOne({ _id: roomId });
    console.log("existingRoom", existingRoom);
    if (!existingRoom) {
      return res.status(200).json({ message: "Room not found" });
    }
    const existingParticipant = existingRoom.participants.find(
      (participant) => participant._id.toString() == userId
    );
    console.log("existingParticipants", existingParticipant);
    if (!existingParticipant) {
      return res.status(200).json({ message: "User not found in the room" });
    }
    existingRoom.participants = existingRoom.participants.filter(
      (participant) => participant._id.toString() !== userId
    );
    await existingRoom.save();
    res.status(200).json({ message: "User kicked successfully" });
  } catch (error) {
    console.log("Error in the kickUser controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};
export const DeleteRoom = async (req, res) => {
  try {
    const roomId = req.params.id;
    const admin = req.user.userId;
    const room = await CustomRoom.findById(roomId);
    if (!room) {
      return res.status(200).json({ message: "Room not found" });
    }
    if (room.admin != admin) {
      return res
        .status(200)
        .json({ message: "You are not admin of this group" });
    }
    if (room.messages.length > 0) {
      await CustomRoomMsg.deleteMany({ _id: { $in: room.messages } });
    }
    await room.deleteOne();
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.log("Error in the deleteRoom controller", error);
    return res.status(500).json("Internal server error");
  }
};

export const EditRoomName = async (req, res) => {
  try {
    const userId = req.user.userId;
    const roomId = req.body.roomId;
    const roomName = req.body.roomName;

    const isRoom = await CustomRoom.findOne({ _id: roomId });
    if (!isRoom) {
      return res.status(200).json({ message: "Room not found" });
    }

    if (isRoom.admin != userId) {
      return res
        .status(200)
        .json({ message: "You are not admin of this group" });
    }
    const updatedRoom = await CustomRoom.updateOne(
      { _id: roomId },
      { $set: { roomName } }
    );
    if (!updatedRoom) {
      return res.status(200).json({ message: "Room name not updated" });
    }
    res.status(200).json({ message: "Room name updated successfully" });
  } catch (error) {
    console.log("Error in the EditRoomName controller", error.message);
    res.status(500).json("Internal server error");
  }
};
