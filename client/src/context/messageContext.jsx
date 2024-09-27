import { createContext } from "react";
import { useState } from "react";


export const messageContext = createContext();

export const MessageContextProvider =  ({ children }) => {
    const [message, setMessage] = useState([])
    return(
        <messageContext.Provider value={{message, setMessage}}>
            {children}
        </messageContext.Provider>
    )
}
