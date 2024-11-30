import { useContext, useEffect } from "react";
import { conversationContext } from "../context/conversationContext.jsx";
import { messageContext } from "../context/messageContext.jsx";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/message`;

const useGetMessage = () => {
  const { conversations } = useContext(conversationContext);
  const { message, setMessage } = useContext(messageContext);

  useEffect(() => {
    const getMessage = async() => {
      try {
        const response = await fetch(`${ServerPort}/${conversations._id}`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
         setMessage(data || []);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    if (conversations._id) {
      getMessage();
    }
  }, [conversations._id, setMessage]);

  return message;
};

export default useGetMessage;
