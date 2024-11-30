import React, { useContext, useState } from "react";
import Messages from "./messages";
import MessageInput from "./messageInput";
import { ImUserPlus } from "react-icons/im";
import { conversationContext } from "../../context/conversationContext";
import { AuthContext } from "../../context/authContent";
import AddUserToRoom from "../modals/AddUserToRoom";
import { useSocketContext } from "../../context/SocketContext";
function MessageContainer() {
  const { conversations } = useContext(conversationContext);
  const { username } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversations._id);
  
  return (
    <div className="flex-1  flex flex-col bg-[#2a2a2e]  ">
      {conversations._id !== undefined ? (
        <div className="relative flex">
          <div className="flex items-center  bg-[#232327] w-full gap-1">
            {conversations.image ? (
              <img
                src={conversations.image}
                alt=""
                className="w-[6.1%] p-1 rounded-[50%]"
              />
            ) : (
              <img
                src="DummyProfile.png"
                alt=""
                className="w-[6.1%] p-1 rounded-[50%]"
              />
            )}
            {clicked && (
              <div className="absolute right-0 top-14 w-[250px] z-10">
                <AddUserToRoom clicked={clicked} setClicked={setClicked} />
              </div>
            )}
            <div>
              <h1 className="text-white">{conversations.username}</h1>
              {isOnline ? <h2 className="text-green-500">Online</h2> : <h2 className="text-red-500">Offline</h2>}
            </div>
          </div>
          <div className="">
            <ImUserPlus
              className="text-white w-[30px] h-[30px] absolute right-[20px] top-[20px] hover:scale-110 cursor-pointer  "
              onClick={() => setClicked(prev=>!prev)}
            />
          </div>
        </div>
      ) : (
        <div className="text-white text-2xl flex-col font-semibold flex items-center justify-center">
          {`Hi ${username}`}{" "}
          <span>select any contact to start conversation</span>
        </div>
      )}

      {conversations._id !== undefined ? <Messages /> : <div></div>}
      {conversations._id !== undefined ? <MessageInput /> : <div></div>}
    </div>
  );
}

export default MessageContainer;
