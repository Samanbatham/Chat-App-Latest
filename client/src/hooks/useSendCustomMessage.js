import { useContext } from "react";
import { RoomContext } from "../context/roomContext";
import { AuthContext } from "../context/authContent";
import { useSocketContext } from "../context/SocketContext";
const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/post`;

const useSendCustomMessage = () => {
  const { roomSelected, customMsg, setCustomMsg } = useContext(RoomContext);
  const { id } = useContext(AuthContext);
  const { socket } = useSocketContext();
  const sendCustomMessage = async (newMessage) => {
    try {
      const response = await fetch(`${ServerPort}/${roomSelected._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
        credentials: "include",
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { sendCustomMessage };
};

export default useSendCustomMessage;
