import toast from "react-hot-toast";
const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/editusername`;
const useEditUsername = () => {
  const editUsername = async (data) => {
    try {
      const response = await fetch(ServerPort, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result)
      if (result.error) {
        throw new Error(result.error);
      }
      toast.success(result.message);
      const userData = JSON.parse(localStorage.getItem("user-data"));
      userData.username = result.data.username;
      localStorage.setItem("user-data", JSON.stringify(userData));
     window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return editUsername;
};
export default useEditUsername;
