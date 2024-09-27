import mongoose from "mongoose";


const globalRoomMessageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
  message: {
    type: String,
    required: true,
  },
  profilePic:{
    type:String,
    required:true
  },
  senderName:{
    type:String,
    required:true
  }
},{timestamps:true});

const GlobalRoomMessage = mongoose.model("GlobalRoomMessage", globalRoomMessageSchema);

export default GlobalRoomMessage;
