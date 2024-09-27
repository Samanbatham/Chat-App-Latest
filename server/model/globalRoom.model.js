import mongoose from 'mongoose'

const globalRoomSchema = new mongoose.Schema({
    roomName:{
        type:String,
        required:true,
        unique:true
    },
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'GlobalRoomMessage'
    }]
})

const GlobalRoom = mongoose.model("GlobalRoom",globalRoomSchema);
export default GlobalRoom;