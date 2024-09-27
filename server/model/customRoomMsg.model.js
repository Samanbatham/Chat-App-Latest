import mongoose from "mongoose";

const customRoomMsgSchema = new  mongoose.Schema({
    senderId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    roomId:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
      },
      senderName:{
        type:String,
        required:true
      }
},{timestamps:true})
const  CustomRoomMsg = mongoose.model('CustomRoomMsg', customRoomMsgSchema);
export default  CustomRoomMsg;


