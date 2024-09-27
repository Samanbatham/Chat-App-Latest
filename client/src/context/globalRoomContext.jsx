import { createContext } from "react";
import { useState } from "react";
export const GlobalRoomContext = createContext();

export const GlobalRoomContextProvider = ({children})=>{
    const [room, setRoom] = useState(false);
    const[globalMsg,setGlobalMsg] = useState([])
    return(
        <GlobalRoomContext.Provider value={{room, setRoom,globalMsg,setGlobalMsg}}>
            {children}
        </GlobalRoomContext.Provider>
    )
}