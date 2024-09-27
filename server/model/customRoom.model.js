import mongoose from 'mongoose' 


const customRoomSchema = new mongoose.Schema({
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CustomRoomMsg',
        default:[]
    }],
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    roomName:{
        type:String,
        required:true,
        unique:true
    }
})

const  CustomRoom = mongoose.model('CustomRoom', customRoomSchema);
export default CustomRoom;
