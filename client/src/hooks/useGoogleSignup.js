import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/auth`;

const useGoogleSignup = () => {
  const googleSignup = async (code) => {
    try {
      const response = await fetch(`${ServerPort}/google?code=${code}`);
      const data = await response.json();
      toast.success(data.msg);
      return data;
    } catch (error) {
      console.log("error in the useGoogleSignup", error);
    }
  };
  return googleSignup;
};

export default useGoogleSignup;
