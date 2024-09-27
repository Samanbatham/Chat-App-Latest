import React from "react";
import GlobalRoomMessageContainer from "./GlobalRoomMessageContainer";
import CustomRoomMessageContainer from "./CustomRoomMessageContainer";
import { useContext } from "react";
import { GlobalRoomContext } from "../../context/globalRoomContext";
function RoomMessageContainer() {
  const { room } = useContext(GlobalRoomContext);
  
  return (
    <div className="flex-1 flex h-[100vh]  ">
      {room ? <GlobalRoomMessageContainer /> : <CustomRoomMessageContainer />}
    </div>
  );
}

export default RoomMessageContainer;
