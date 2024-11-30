import React, { useContext } from "react";
import { conversationContext } from "../../context/conversationContext";
import { ChatContext } from "../../context/chat";
import { AuthContext } from "../../context/authContent";
import { useState } from "react";
import { useSocketContext } from "../../context/SocketContext";
function GlobalRoomProfileContainerAdmin({ room }) {
  const { setChatSelected } = useContext(ChatContext);
  const { setConversations } = useContext(conversationContext);
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    {
      id != room._id ? setChatSelected(true) : null;
    }
    setConversations(room);
  };
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(room._id);
  console.log(isOnline)

  return (
    <div className="text-white w-[100%] p-2 mb-1 bg-[#202022] rounded-md cursor-pointer">
      <div className="flex items-center gap-3 ">
        <div onClick={handleClick}>
        {isOnline ? <div onClick={handleClick}>
          {room?.image ? (
            <div>
            <img
              src={room.image}
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
        </div> : <div onClick={handleClick}>
          {room?.image ? (
            <div>
            <img
              src={room.image}
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
        </div>
        <div>
          <h1 className="text-md font-semibold">{room?.username}</h1>
        </div>
          
      </div>
    </div>
  );
}

export default GlobalRoomProfileContainerAdmin;
