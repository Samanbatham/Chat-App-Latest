import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const {email:localStorageEmail ,profilePic:localStorageProfilePic,username:localStorageUsername,id:localStorageId} = (JSON.parse(localStorage.getItem("user-data")) || {});
    const [username, setUsername] = useState(localStorageUsername || null);
    const[profilePic,setProfilePic] = useState(localStorageProfilePic || null);
    const[email,setEmail] = useState(localStorageEmail || null);
    const[id,setId] = useState(localStorageId || null)
    return(
        <AuthContext.Provider value={{username,profilePic,setUsername,setProfilePic,email,setEmail,id,setId}}>
            {children}
        </AuthContext.Provider>
    )
}
