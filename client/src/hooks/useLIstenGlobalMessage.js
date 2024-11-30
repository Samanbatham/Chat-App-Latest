import { useContext, useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import notification from "../asset/sound/notification.mp3";
import { GlobalRoomContext } from "../context/globalRoomContext";
import { RoomContext } from "../context/roomContext";
const useListenGlobalMessage = () => {
  const { socket } = useSocketContext();
  const { globalMsg, setGlobalMsg } = useContext(GlobalRoomContext);
  const id = import.meta.env.VITE_GLOBAL_ID;
  

  useEffect(() => {
    if (socket && id) {

        socket.emit("globaljoinroom", id);

      socket.on("GlobalRoomMsg", (newMessage) => {
        const sound = new Audio(notification);
        sound.play();
        setGlobalMsg((prevState) => [...prevState, newMessage]);
      });
    }console.log(globalMsg)

    return () => {
      socket.off("GlobalRoomMsg");
    };
  }, [socket, id, setGlobalMsg]);
};

export default useListenGlobalMessage;
