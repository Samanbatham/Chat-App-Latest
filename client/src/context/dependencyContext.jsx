import { createContext, useState } from "react";

export const DependencyContext = createContext();

export const DependencyContextProvider = ({children})=>{
    const [refCustomRoom,setRefCustomRoom] = useState(false);
    const [refProfileList,setRefProfileList] = useState(false);
    const [refLastMsg,setRefLastMsg] = useState(false);
    
    return(
        <DependencyContext.Provider value={{refCustomRoom,setRefCustomRoom,refProfileList,setRefProfileList,refLastMsg,setRefLastMsg}}>
            {children}
        </DependencyContext.Provider>
    )
}