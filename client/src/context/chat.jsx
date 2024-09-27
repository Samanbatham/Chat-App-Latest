import { createContext, useState } from "react";

export const ChatContext = createContext(null);

export const ChatContextProvider = ({children})=>{
   const [chatSelected,setChatSelected] = useState(true);
    return(
        <ChatContext.Provider value={{chatSelected , setChatSelected}}>
            {children}
        </ChatContext.Provider>
    );
}

