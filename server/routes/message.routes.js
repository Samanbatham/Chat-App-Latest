import express from 'express';
import { GetMessage , SendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middlewares/protectRoute.js';
const router = express.Router();

router.get("/:id", protectRoute , GetMessage);

router.post("/send/:id", protectRoute, SendMessage);


export  default router;
