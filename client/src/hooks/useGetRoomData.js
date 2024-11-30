import { useContext, useEffect, useState } from "react";
import { RoomContext } from "../context/roomContext";
import { DependencyContext } from "../context/dependencyContext";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/getroomdata`;
const useGetRoomData = ()=>{
    const {refProfileList} = useContext(DependencyContext)
    const {roomSelected}  = useContext(RoomContext)
    const[roomData,setRoomData] = useState("");
   useEffect(()=>{
    const getRoomData = async(room)=>{
       try {
        const response = await fetch(`${ServerPort}/${roomSelected._id}`);
        const room = await response.json()
        
        setRoomData(room)
       } catch (error) {
        console.log(error)
       }
    }
    getRoomData()
   },[roomSelected,refProfileList])
    return  {roomData};

}
export default useGetRoomData;