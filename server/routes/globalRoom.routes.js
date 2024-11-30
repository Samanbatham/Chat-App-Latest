import express from 'express'
import { sendRoomMsg , getRoomMsg  } from '../controllers/globalRoom.controller.js';
import protectRoute from '../middlewares/protectRoute.js';
// import { createRoom } from '../controllers/globalRoom.controller.js';
const router = express.Router();

router.get("/get/:id" ,protectRoute, getRoomMsg );
router.post("/post/:id" ,protectRoute, sendRoomMsg )
//router.post('/create',createRoom);

export default router;