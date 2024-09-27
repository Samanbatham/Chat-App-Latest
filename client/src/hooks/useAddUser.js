import toast from "react-hot-toast";
const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/room/adduser`;
const useAddUser =()=>{
    const addUser = async(newData)=>{
        try {
            const response = await fetch(ServerPort,{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newData)
            })
            const data = await  response.json();
            
            toast.success(data.message)
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }
    return {addUser}
  }
export default useAddUser;