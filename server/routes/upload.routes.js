import express from 'express'
import upload from '../utils/cloudinary.js'
import protectRoute from '../middlewares/protectRoute.js'
import User from '../model/user.model.js'
import CustomRoom from '../model/customRoom.model.js'
import { editUsername } from '../controllers/user.controller.js'


const router = express.Router()

router.post('/upload', protectRoute, upload.single('image'), async function(req,res){
        const userId = req.user.userId;
        const result = req.file;
        const existingUser = await User.updateOne({_id:userId},{$set:{image:result.path}})
        res.status(200).json({
            success:true,
            message:'Image uploaded successfully',
            data:result
        })
    })

    router.post('/uploadroom/:id', protectRoute, upload.single('image'), async function(req,res){
        const userId = req.user.userId;
        const roomId = req.params.id
        const result = req.file;
        const isRoom = await CustomRoom.findOne({_id:roomId})
        if(!isRoom){
            return res.status(404).json({message:"Room not found"})
        }
        console.log(isRoom,userId)
        if(isRoom.admin != userId){
            return res.status(403).json({message:"You are not the admin of this room"})
        }
        const existingRoom = await CustomRoom.updateOne({_id:roomId},{$set:{image:result.path}})
        res.status(200).json({
            success:true,
            message:'Image uploaded successfully',
            data:result
        })
    })
router.post("/editusername",protectRoute,editUsername);

export default router