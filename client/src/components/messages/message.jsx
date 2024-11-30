import React, { useContext } from "react";
import { conversationContext } from "../../context/conversationContext";
import { AuthContext } from "../../context/authContent";

function Message({ message }) {
  const { conversations } = useContext(conversationContext);
  const { id, profilePic } = useContext(AuthContext);

  
  const date = new Date(message.createdAt)
  const  formattedDate = date.toLocaleTimeString();
  

  
  return (
    <div className="flex flex-col z-0">
      
        {message.senderId != id ? (
          <div className="flex p-3">
            <div className="flex flex-col">
            <div className="flex items-center gap-2">
              

              <p className="text-white font-poppins bg-gray-700 p-2 rounded-e-lg rounded-es-lg translate-y-1">{message.message}</p>
            </div>
            <div className="self-end">
              <h1 className="text-white text-[10px] p-1 opacity-40">{formattedDate}</h1>
            </div>
          </div>
          </div>
        ) : (
          <div className="flex self-end p-2 ">
            <div  className="flex flex-col   ">
            <div className="flex items-center gap-2 ">
              <p className="text-white font-poppins bg-[#3e3e3e] p-2 rounded-ee-lg translate-y-1 rounded-s-lg">{message.message}</p>
              
            </div>
            <div>
              <h1 className="text-white text-[10px] p-1 opacity-40">{formattedDate}</h1>
            </div>
          </div>
          </div>
        )}
      </div>
 
  );
}

export default Message;
