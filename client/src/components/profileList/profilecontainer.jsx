import React, { useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../../context/chat";
import { conversationContext } from "../../context/conversationContext";
import { useSocketContext } from "../../context/SocketContext";
function Profilecontainer({ conversation }) {
  const { setChatSelected } = useContext(ChatContext);
  const { setConversations } = useContext(conversationContext);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const handleClick = (e) => {
    e.preventDefault();
    setChatSelected(true);
    setConversations(conversation);
  };
  return (
    <div
      className="text-white w-[100%] p-2 mb-1 bg-[#202022] rounded-md cursor-pointer "
      
    >
      <div className="flex items-center gap-3 " >
       {isOnline ?  <div onClick={handleClick}>
          {conversation.image ? (
            <div>
            <img
              src={conversation.image}
              alt=""
              className="w-[50px] p-1 rounded-[50%]"
            />
            <div className="relative bg-green-500  border-2 border-black rounded-[50%] w-[16px] h-[16px] left-[40px] bottom-[20px]"></div>
            </div>
          ) : (
            <img
              src="DummyProfile.png"
              alt=""
              className="w-[50px]  rounded-[50%]"
            />
            
          )}
        </div> :
         <div onClick={handleClick}>
         {conversation.image ? (
          <div>
           <img
             src={conversation.image}
             alt=""
             className="w-[50px] p-1 rounded-[50%]"
           />
           <div className="relative bg-red-500  border-2 border-black rounded-[50%] w-[16px] h-[16px] left-[40px] bottom-[20px]"></div>
            </div>
         ) : (
           <img
             src="DummyProfile.png"
             alt=""
             className="w-[50px]  rounded-[50%]"
           />
         )}
       </div>}
        <div>
          <h1 className="text-md font-semibold">{conversation.username}</h1>
        </div>
      </div>
    </div>
  );
}

export default Profilecontainer;
