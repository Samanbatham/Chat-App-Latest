import express from 'express'
import { googleLogin, googleSignup, Login, Logout, Signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup" , Signup)
router.get("/google" , googleSignup)
router.get("/googlelogin" , googleLogin)
router.post("/login" , Login)
router.post("/logout",Logout)


export default router;