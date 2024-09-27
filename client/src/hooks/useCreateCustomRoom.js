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
    console.log(data);
  };
  return createCustomRoom;
};
export default  useCreateCustomRoom;

