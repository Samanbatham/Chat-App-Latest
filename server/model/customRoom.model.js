import mongoose from "mongoose";
import CustomRoomMsg from "./customRoomMsg.model.js";

const customRoomSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomRoomMsg",
      default: [],
    },
  ],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  roomName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const CustomRoom = mongoose.model("CustomRoom", customRoomSchema);
export default CustomRoom;
