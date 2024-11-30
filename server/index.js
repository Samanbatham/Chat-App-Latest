import express from 'express';
import connectDb from './db/connectDb.js';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'
import messageRoutes from './routes/message.routes.js'
import conversationRoutes from './routes/conversation.routes.js'
import globalRoomRoutes from './routes/globalRoom.routes.js'
import roomRoutes from './routes/room.routes.js'
import cookieParser from 'cookie-parser';
import uploadRoutes from './routes/upload.routes.js'
import { app,server } from './socket/socket.js';
dotenv.config();




//Create App
//const app = express();





//Middleware
app.use(express.json());



const corsOptions = {
    origin:"http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}
app.use(cors(corsOptions));

app.use(cookieParser())



//Routes
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/chat",conversationRoutes);
app.use("/api/globalroom",globalRoomRoutes);
app.use("/api/room",roomRoutes)
app.use('/api',uploadRoutes)



//Listen to server
server.listen(process.env.PORT,()=>{
    connectDb();
    console.log(`Server is running on port ${process.env.PORT}`)
})