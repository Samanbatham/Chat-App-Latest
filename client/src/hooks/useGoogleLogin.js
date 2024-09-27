import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/auth`;

const useGoogleDbLogin = () => {
  const googleDbLogin = async (code) => {
    try {
      const response = await fetch(`${ServerPort}/googlelogin?code=${code}`, {
        credentials: "include",
      });
      const data = await response.json();
      toast.success(data.msg);

      return data;
    } catch (error) {
      console.log("Error in useGoogleLogin", error);
    }
  };
  return googleDbLogin;
};

export default useGoogleDbLogin;
