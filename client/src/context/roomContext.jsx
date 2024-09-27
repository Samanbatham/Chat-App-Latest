import { createContext } from "react";
import { useState } from "react";
export const RoomContext = createContext();

export const RoomContextProvider = ({children})=>{
    const[roomSelected,setRoomSelected] = useState('');
    const[customMsg,setCustomMsg] = useState('')
    return(
        <RoomContext.Provider value={{roomSelected,setRoomSelected,customMsg,setCustomMsg}}>
            {children}
        </RoomContext.Provider>
    )
}
