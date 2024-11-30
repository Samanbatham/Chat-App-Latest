import { useContext, useEffect } from "react";
import { RoomContext } from "../context/roomContext";
import { useSocketContext } from "../context/SocketContext";
import notification from "../asset/sound/notification.mp3"
import { AuthContext } from "../context/authContent";
const useListenRoomMessage = () => {
  const { socket } = useSocketContext();
  const { roomSelected, setCustomMsg } = useContext(RoomContext);
  const {id} = useContext(AuthContext)
  useEffect(() => {
    if (socket && roomSelected?._id) {
      
      socket.emit("joinRoom", roomSelected._id);

      socket.on("roomMsg", (savedMessage) => {
        const sound = new Audio(notification);
        sound.play();
       
        if (roomSelected._id === savedMessage.roomId) {
          setCustomMsg((prevState) => ({
            ...prevState,
            messages: [...prevState?.messages, savedMessage],
          }));
        }
      });

      return () => {
        socket.off("roomMsg");
      };
    }
  }, [socket, roomSelected, setCustomMsg]);
};

export default useListenRoomMessage;