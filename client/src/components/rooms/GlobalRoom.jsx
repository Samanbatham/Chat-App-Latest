import React, { useContext } from "react";
import { GlobalRoomContext } from "../../context/globalRoomContext";
import { RoomContext } from "../../context/roomContext";
function GlobalRoom() {
  const { setRoom } = useContext(GlobalRoomContext);
  const { setRoomSelected } = useContext(RoomContext);
  const handleClick = async (e) => {
    e.preventDefault();
    setRoom(true);
    setRoomSelected("");
  };

  return (
    <div
      className="text-white flex items-center justify-between w-[100%] pb-3 mb-1 bg-[#202022] rounded-md  "
      onClick={handleClick}
    >
      <div className="flex-[0.3] pt-2">
        <img src="Global.jpg" alt="" className="w-[58px] p-2 rounded-[50%]" />
      </div>
      <div className="flex-[1] w-[100%]">
        <h1>Global-Chat</h1>
      </div>
    </div>
  );
}

export default GlobalRoom;
