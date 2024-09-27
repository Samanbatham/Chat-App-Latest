import React, { useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../../context/chat";
import { conversationContext } from "../../context/conversationContext";
function Profilecontainer({ conversation }) {
  const { setChatSelected } = useContext(ChatContext);
  const { setConversations } = useContext(conversationContext);

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
        <div onClick={handleClick}>
          {conversation.image ? (
            <img
              src={conversation.image}
              alt=""
              className="w-[50px] p-1 rounded-[50%]"
            />
          ) : (
            <img
              src="DummyProfile.png"
              alt=""
              className="w-[50px]  rounded-[50%]"
            />
          )}
        </div>
        <div>
          <h1 className="text-md font-semibold">{conversation.username}</h1>
        </div>
      </div>
    </div>
  );
}

export default Profilecontainer;
