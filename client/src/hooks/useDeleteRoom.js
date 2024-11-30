import { useContext } from "react";
import { RoomContext } from "../context/roomContext";
import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/deleteroom`;
const useDeleteRoom = ()=>{
    const {roomSelected} = useContext(RoomContext)
    const deleteRoom = async()=>{
        try {
            const response = await  fetch(`${ServerPort}/${roomSelected._id}`, {
                method: 'DELETE',
                credentials:"include",
        })
        const data = await response.json();
        toast.success(data.message)
        } catch (error) {
            toast.error(data.message)
        }
  }
  return deleteRoom;
}
export default useDeleteRoom;