import React from "react";
import { useContext } from "react";
import { GlobalRoomContext } from "../../context/globalRoomContext";
import { RoomContext } from "../../context/roomContext";

function Room({ roomData }) {
  const { setRoom } = useContext(GlobalRoomContext);
  const { setRoomSelected } = useContext(RoomContext);

  const handleClick = (e) => {
    e.preventDefault();
    setRoom(false);
    setRoomSelected(roomData);
  };

  return (
    <div
      className="text-white flex items-center justify-between w-[100%] pb-1 mb-1 bg-[#202022] rounded-md  "
      onClick={handleClick}
    >
      <div className="flex-[0.3] pt-2">
        <img
          src="DummyProfile.png"
          alt=""
          className="w-[80%] p-1  rounded-[50%]"
        />
      </div>
      <div className="flex-[1] w-[100%]">
        <h1>{roomData.roomName}</h1>
      </div>
    </div>
  );
}

export default Room;
