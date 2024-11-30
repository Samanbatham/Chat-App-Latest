import { useContext, useEffect } from "react";
import { GlobalRoomContext } from "../context/globalRoomContext";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/globalroom/get/${
  import.meta.env.VITE_GLOBAL_ID
}`;

const useGetGlobalMessages = () => {
  const { globalMsg, setGlobalMsg, room } = useContext(GlobalRoomContext);
  useEffect(() => {
    const getGlobalMessages = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/globalroom/get/66ffb18a79bba67c6bb38fce",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setGlobalMsg(data.messages);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    if (room) {
      getGlobalMessages();
    }
  }, [setGlobalMsg]);

  return globalMsg;
};

export default useGetGlobalMessages;
