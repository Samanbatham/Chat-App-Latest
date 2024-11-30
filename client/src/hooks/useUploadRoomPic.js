import { useContext } from "react";
import { RoomContext } from "../context/roomContext";
import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/uploadroom`;

const useUploadRoomPic = () => {
  const { roomSelected } = useContext(RoomContext);

  const uploadRoomPic = async (formData) => {
    try {
      const response = await fetch(`${ServerPort}/${roomSelected._id}`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await response.json();
      toast.success("Room Profile Changed Successfully")
    } catch (error) {
      console.log(error);
    }
  };
  return uploadRoomPic;
};
export default useUploadRoomPic;
