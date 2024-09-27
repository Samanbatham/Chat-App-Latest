import { useContext, useEffect } from "react";
import { RoomContext } from "../context/roomContext";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/get`;

const useGetCustomRoomMsg = ()=> {
    const {roomSelected,setRoomSelected ,customMsg,setCustomMsg} = useContext(RoomContext);
   useEffect(()=>{
    const GetCustomRoomMsg = async()=>{
        const response = await fetch(`${ServerPort}/${roomSelected._id}`,{
            method: 'GET',
            credentials:"include"
        })
        const data = await response.json()
        setCustomMsg(data.data);
    }
    GetCustomRoomMsg();
   },[roomSelected])
   return customMsg;
}

export default useGetCustomRoomMsg