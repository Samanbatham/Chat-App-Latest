import express from 'express'
import { getConversation } from '../controllers/conversation.controller.js';
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

router.get("/allconversation", protectRoute, getConversation)

export default router;