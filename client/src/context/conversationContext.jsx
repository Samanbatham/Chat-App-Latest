import { createContext } from "react";
import { useState } from "react";

export  const conversationContext = createContext();

export const ConversationContextProvider =  ({ children }) => {
    const [conversations, setConversations] = useState([]);
    return(
        <conversationContext.Provider value={{conversations, setConversations}}>
            {children}
        </conversationContext.Provider>
    )
}

