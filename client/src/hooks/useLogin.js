import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/auth`;

const useLogin = () => {
  const Login = async (data) => {
    try {
      const res = await fetch(`${ServerPort}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const newData = await res.json();

      if (!newData.success) {
        toast.error(newData.error);
      }
      if (newData.success) {
        toast.success(newData.msg);
      }

      return newData;
    } catch (error) {
      console.log("Error in useLogin", error.message);
      toast.error("Internal Server Error");
    }
  };
  return Login;
};

export default useLogin;
