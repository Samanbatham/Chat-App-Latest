import React, { useContext } from "react";
import { conversationContext } from "../../context/conversationContext.jsx";
import { useSocketContext } from "../../context/SocketContext.jsx";
function Conversation({ conversation }) {
  const { conversations, setConversations } = useContext(conversationContext);
  const time = new Date(conversation?.lastMessage?.createdAt);
  const convertedTime = time.toLocaleString();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  
  return (
    <div
      className="text-white flex items-center justify-between w-[100%] pb-3 mb-1 bg-[#202022] rounded-md  "
      onClick={() => setConversations(conversation)}
    >
      {isOnline ? (
        <div className="flex-[0.3] pt-2">
          {conversation.image ? (
            <div>
              <img
                src={conversation.image}
                alt=""
                className="w-[60px] p-1 rounded-[50%]"
              />
              <div className="relative bg-green-500  border-2 border-black rounded-[50%] w-[16px] h-[16px] left-[40px] bottom-[20px]"></div>
            </div>
          ) : (
            <img
              src="DummyProfile.png"
              alt=""
              className="w-[60px] p-1 rounded-[50%]"
            />
          )}
        </div>
      ) : (
        <div className="flex-[0.3] pt-2">
          {conversation.image ? (
            <div>
              <img
                src={conversation.image}
                alt=""
                className="w-[60px] p-1 rounded-[50%]"
              />

              <div className="relative bg-red-700 border-2 border-black rounded-[50%] w-[16px] h-[16px] left-[40px] bottom-[20px]"></div>
            </div>
          ) : (
            <img
              src="DummyProfile.png"
              alt=""
              className="w-[60px] p-1 rounded-[50%]"
            />
          )}
        </div>
      )}
      <div className="flex-[1] w-[100%]">
        <h1>{conversation.username}</h1>
        <h3>{conversation.lastMessage.message}</h3>
      </div>
      <div className="flex-[0.3] flex flex-col items-center pr-4 pt-2">
        {conversation?.lastMessage?.length != 0 ? (
          <h2 className="text-[12px]">{convertedTime}</h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
1;

export default Conversation;
