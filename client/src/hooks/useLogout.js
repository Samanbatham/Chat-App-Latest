


const ServerPort = `${import.meta.env.VITE_SERVER_PORT}/api/auth/logout`;
const useLogout = ()=>{
    const logout = async ()=>{
        try{
            const response = await fetch(ServerPort,{
                method: 'POST',
                credentials:'include'
            });
            if(response.success){
                
                return response
            }
           
        }catch(error){
            console.error(error);
        }
    }
    return logout
}
export default useLogout