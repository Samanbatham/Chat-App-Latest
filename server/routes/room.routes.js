import express from 'express'
import protectRoute from '../middlewares/protectRoute.js';

import { AddUserToRoom, createRoom, getMsg, getRooms, sendMsg,GetRoomData, KickUser } from '../controllers/room.controller.js';
const router = express.Router();

router.get("/get/:id" ,protectRoute, getMsg );
router.post("/post/:id" ,protectRoute, sendMsg )
router.post("/create" ,protectRoute, createRoom  )
router.get("/getrooms",protectRoute,getRooms)
router.post("/adduser",AddUserToRoom)
router.get("/getroomdata/:id",GetRoomData);
router.delete("/removeuser",KickUser)
export default router;