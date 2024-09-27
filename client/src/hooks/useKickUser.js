
const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/removeuser`;
const useKickUser = () => {
  const kickUser = async (data) => {
    try {
      const response = await fetch(ServerPort, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      
    } catch (error) {
      console.error(error);
    }
  };
  return { kickUser };
};
export default useKickUser;

