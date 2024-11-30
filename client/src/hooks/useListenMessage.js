import { useContext, useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { messageContext } from "../context/messageContext";
import { conversationContext } from "../context/conversationContext";
import notification from "../asset/sound/notification.mp3";
import { AuthContext } from "../context/authContent";
import { DependencyContext } from "../context/dependencyContext";
const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { conversations } = useContext(conversationContext);
  const { message, setMessage } = useContext(messageContext);
  const { id } = useContext(AuthContext);
  const { setRefLastMsg } = useContext(DependencyContext);
  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const sound = new Audio(notification);
      sound.play();
      if (
        conversations.lastMessage.receiverId === newMessage.receiverId &&
        id === newMessage.receiverId
      ) {
        setMessage((prevState) => ({
          ...prevState,
          messages: [...prevState?.messages, newMessage],
        }));
      }
      setRefLastMsg((prev) => !prev);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessage, message]);
};

export default useListenMessage;
