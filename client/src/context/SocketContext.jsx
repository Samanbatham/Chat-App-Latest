import { createContext, useEffect, useState ,useContext } from "react";
import io from 'socket.io-client'
import { AuthContext } from "./authContent";


const SocketContext = createContext(); 

export const useSocketContext = ()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children})=>{
    const [socket , setSocket] = useState(null);
    const [onlineUsers , setOnlineUsers] = useState([])
    const {id} = useContext(AuthContext);
    
    
    useEffect(()=> {
        if(id){
            const newSocket = io("http://localhost:8080" , {
                query:{
                    userId : id,
                }
            })
            setSocket(newSocket);  
            

            newSocket.on("getOnlineUsers",(user)=>{
                setOnlineUsers(user)
            })
            
            return()=> newSocket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[id]);


    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
           {children} 
        </SocketContext.Provider>
    )
}