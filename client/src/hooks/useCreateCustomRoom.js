import toast from "react-hot-toast";
const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/create`;

const useCreateCustomRoom = () => {
  const createCustomRoom = async (roomName) => {
    const response = await fetch(ServerPort, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(roomName),
      credentials: "include",
    });
    const data = await response.json();
    if(data.error){
      throw new Error(data.error)
    }
    toast.success(data.message)
  };
  return createCustomRoom;
};
export default  useCreateCustomRoom;

