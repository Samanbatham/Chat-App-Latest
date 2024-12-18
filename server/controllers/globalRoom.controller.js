
import User from  "../model/user.model.js";
import Google from '../model/google.model.js'
import GlobalRoom from "../model/globalRoom.model.js";
import GlobalRoomMessage from "../model/globalRoomMsg.model.js";
import { io } from "../socket/socket.js";
export  const getRoomMsg = async(req,res)=>{
    try {
        const  globalRoomId = req.params.id;
        
    const {messages}= await GlobalRoom.findById(globalRoomId).populate('messages');
    
    if(!messages){
        return res.status(404).json({message: 'Room not found'});
    }
    if(messages.length<0){
        res.status(200).json({success:true,
            messages:[]
        })
    }
    res.status(200).json({success:true,
        messages,
        roomId:process.env.GLOBALROOMID
    })

    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
        console.log("Error in the getRoomMsg controller",error)    
    }
}

export const sendRoomMsg = async(req,res)=>{
    const roomId = req.params.id;
    const {message} = req.body;
    const loggedInUser = req.user.userId;
    
    
    try {
        const room = await GlobalRoom.findById(roomId);
        if(!room){
            return res.status(200).json({message: 'Room not found'});
        }
        const userData = await User.findOne({_id:loggedInUser}) || await Google.findOne({_id:loggedInUser})
        
        
        const newMessage = new GlobalRoomMessage({
            message: message,
            senderId: loggedInUser,
            profilePic:userData.image,
            senderName:userData.username,
            roomId:process.env.GLOBALROOMID
        })
        
        if(!newMessage){
            return res.status(400).json({message: 'Message not created'});
        }
        room.messages.push(newMessage);
        await room.save();
        await newMessage.save();
        io.to(process.env.GLOBALROOMID).emit("GlobalRoomMsg", newMessage);
        res.status(201).json({success:true,
            message:newMessage
        })
        
    }catch(error){
        console.log("Error in the sendRoomMsg controller",error)
        res.status(500).json("Internal Server Error",error)
    }
}

// export const createRoom = async(req,res)=>{

//     const participants = await User.find({});
//     const room = await GlobalRoom.create({participants:participants,
//         roomName:"GlobalChat",
//         messages:[]
//     })
//     if(!room){
//         return res.status(400).json({message: 'Room not created'});
//     }else{
//         res.status(200).json({success:true})
//     }
//     console.log(room)
// }