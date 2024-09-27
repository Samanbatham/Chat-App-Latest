import React, { useContext } from "react";

import { ImUserPlus } from "react-icons/im";

import { AuthContext } from "../../context/authContent";
import { GlobalRoomContext } from "../../context/globalRoomContext";
import RoomMsgInput from "./RoomMsgInput";
import RoomMessages from "./RoomMessages";

function GlobalRoomMessageContainer() {
  const { room } = useContext(GlobalRoomContext);
  const { username } = useContext(AuthContext);
  console.log;
  return (
    <div className="  flex flex-col bg-[#2a2a2e] w-[100%] ">
      {room ? (
        <div className="relative flex">
          <div className="flex items-center  bg-[#232327] w-full gap-1">
            <img
              src="Global.jpg"
              alt=""
              className="w-[6.1%] p-3 rounded-[50%]"
            />
            <div>
              <h1 className="text-white">Global-Chat</h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-white text-2xl flex-col font-semibold flex items-center justify-center">
            {`Hi ${username}`}{" "}
            <span>select any Room to start conversation</span>
          </div>
        </div>
      )}

      {room ? <RoomMessages /> : <div></div>}
      {room ? <RoomMsgInput /> : <div></div>}
    </div>
  );
}

export default GlobalRoomMessageContainer;
