import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/auth`;

const useSignup = () => {
  const Signup = async (data) => {
    try {
      const res = await fetch(`${ServerPort}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      console.log("Error in useSignup", error.message);
      toast.error("Internal Server Error");
    }
  };
  return Signup;
};

export default useSignup;
