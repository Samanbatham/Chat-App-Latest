import { useContext, useEffect, useState } from "react";
import { DependencyContext } from "../context/dependencyContext";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/getrooms`;

const useGetRoom = ()=>{
    const {refCustomRoom} = useContext(DependencyContext);
    const [rooms,setRooms] = useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        
            const getRoom = async()=>{
                try {
                    setLoading(true)
                const response = await fetch(ServerPort,{
                    method: 'GET',
                    credentials:"include"
                })
                const data = await response.json();
                
                setRooms(data)
            } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
        
    }
    getRoom();
    },[refCustomRoom])
    
    return {rooms,loading};
}
export default useGetRoom;
