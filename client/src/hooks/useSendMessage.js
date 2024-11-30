import { useContext } from "react";
import { conversationContext } from "../context/conversationContext";

import { messageContext } from "../context/messageContext";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/message`;

const useSendMessage = () => {
  const { message, setMessage } = useContext(messageContext);
  const { conversations } = useContext(conversationContext);

  const sendMessage = async (newMessage) => {
    const response = await fetch(`${ServerPort}/send/${conversations._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
      credentials: "include",
    });
    const data = await response.json();
    const lastMessage = data?.newMessage;

    if (Array.isArray(message?.messages)) {
      setMessage((prevState) => ({
        ...prevState,
        messages: [...prevState?.messages, lastMessage],
      }));
    }
  };
  return sendMessage;
};
export default useSendMessage;
