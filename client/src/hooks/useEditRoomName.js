import toast from "react-hot-toast";

const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/editroomname`;

const useEditRoomName = ()=>{
    const editRoomName = async(data)=>{
      try {
        const response = await fetch(ServerPort,{
            method:"POST",
            credentials:"include",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        const result = await response.json();
        if(result.error){
            throw new Error(result.error)
        }
        toast.success(result.message)
      } catch (error) {
        console.log(error)
      }
    }
    return {editRoomName};
}
export default useEditRoomName;