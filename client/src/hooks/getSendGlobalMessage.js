import { useContext } from "react";
import { GlobalRoomContext } from "../context/globalRoomContext";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/globalroom/send/${import.meta.env.VITE_GLOBAL_ID}`;

const useSendGlobalMessage = () => {

 const {globalMsg,setGlobalMsg} = useContext(GlobalRoomContext)

  const sendGlobalMessage = async (newMessage) => {
    const response = await fetch('http://localhost:8080/api/globalroom/post/66edb6850306028acc925215', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
      credentials: "include",
    });
    const data = await response.json();
    const lastMessage = data?.message;
    
    
    if (Array.isArray(globalMsg)) {
      setGlobalMsg((prevState) =>[...prevState, lastMessage])
      ;
    }
  };
  return sendGlobalMessage;
};
export default useSendGlobalMessage;
