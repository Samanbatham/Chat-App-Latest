import React, { useContext } from "react";
import { conversationContext } from "../../context/conversationContext";
import { GiBootKick } from "react-icons/gi";
import { ChatContext } from "../../context/chat";
import { AuthContext } from "../../context/authContent";
import { useState } from "react";
import KickUser from "../modals/kickUser.modal";
function GlobalRoomProfileContainer({ room }) {
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

  return (
    <div className="text-white w-[100%] p-2 mb-1 bg-[#202022] rounded-md cursor-pointer">
      <div className="flex items-center gap-3 ">
        <div onClick={handleClick}>
          {room?.image ? (
            <img
              src={room.image}
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
          <h1 className="text-md font-semibold">{room?.username}</h1>
        </div>
        {id !== room._id &&  !room.isAdmin && (

          <div className="absolute right-10 hover:scale-125">
            <GiBootKick
              className="text-4xl text-gray-500 hover:text-gray-300"
              onClick={() => setIsClicked(true)}
            />
          </div>
        )}
        {isClicked && (
          <div className="absolute top-[400px] left-[800px] ">
            <KickUser
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              room={room}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GlobalRoomProfileContainer;
