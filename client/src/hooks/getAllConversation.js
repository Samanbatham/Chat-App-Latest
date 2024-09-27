import { useEffect, useState } from "react";
import { useContext } from "react";
import { messageContext } from "../context/messageContext";
const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/chat/allconversation`;

const useGetAllConversation = () => {
  const [conversation, setConversation] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const {message} = useContext(messageContext);
  useEffect(() => {
    const getAllConversation = async() => {
      try {
        const response = await fetch(ServerPort ,{
          credentials:'include'
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch conversations");
        }
        const data = await response.json();
        
        setConversation(data.user);  
      } catch (error) {
        console.error("Error fetching conversations:", error);
        setConversation([]);  
      } finally {
        setLoading(false);  
      }
    };

    getAllConversation();
  }, [message]);

  return { conversation, loading };
};

export default useGetAllConversation;
