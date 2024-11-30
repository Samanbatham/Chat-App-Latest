import toast from "react-hot-toast";



const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/upload`;
const useUploadProfilePic = () => {
  
  const uploadProfilePic = async (formData) => {
   try {
    const response = await fetch(ServerPort, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const data = await response.json();
    toast.success("Profile Picture Updated")
    const userData = JSON.parse(localStorage.getItem("user-data"));
    userData.profilePic = data.data.path;
    localStorage.setItem("user-data", JSON.stringify(userData));
    window.location.reload();
  }
   catch(error) {
    console.log(error)
   }
  
}
return uploadProfilePic;
};
export default useUploadProfilePic;
