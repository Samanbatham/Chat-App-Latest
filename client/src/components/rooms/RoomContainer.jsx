import React from "react";
import SearchInput from "../Conversation/SearchInput";

import GlobalRoom from "./GlobalRoom";
import Rooms from "./Rooms";

function RoomContainer() {
  return (
    <div className="bg-[#131314] flex-[0.3] flex flex-col items-center   shadow-2xl ">
      <SearchInput />
      <GlobalRoom />
      <Rooms />
    </div>
  );
}

export default RoomContainer;
