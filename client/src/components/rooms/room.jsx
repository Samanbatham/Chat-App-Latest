import React, { useState } from "react";
import { useContext } from "react";
import { GlobalRoomContext } from "../../context/globalRoomContext";
import { RoomContext } from "../../context/roomContext";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AuthContext } from "../../context/authContent";
import RoomOptions from "../modals/RoomOptions";
function Room({ roomData }) {
  const { setRoom } = useContext(GlobalRoomContext);
  const { setRoomSelected } = useContext(RoomContext);
  const [isSelected, setIsSelected] = useState(null);
  const { id } = useContext(AuthContext);

  const handleClick = (e) => {
    setRoom(false);
    setRoomSelected(roomData);
  };

  return (
    <div
      className="text-white flex items-center justify-between w-[100%] pb-1 mb-1 bg-[#202022] rounded-md  "
      onClick={handleClick}
    >
      {roomData.admin === id ? (
        <div className="relative left-[300px] text-xl cursor-pointer hover:scale-125">
          <HiOutlineDotsVertical
            onClick={() => setIsSelected((prev) => !prev)}
          />
        </div>
      ) : (
        <div></div>
      )}
      {roomData.admin === id && (
        <div className="relative z-10">
          <div className="absolute left-[250px] top-[10px] ">
          {isSelected && (
            <RoomOptions
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          )}
        </div>
        </div>
      )}
      {roomData.admin === id ? <div className="flex-[0.3] pt-2">
        {roomData.image ? (
          <img
            src={roomData.image}
            alt=""
            className="w-[80%] p-3 rounded-[50%]"
          />
        ) : (
          <img
            src="DummyProfile.png"
            alt=""
            className="w-[80%] p-1 rounded-[50%]"
          />
        )}
      </div> : <div className="flex-[0.3] pt-2 pl-[20px]">
        {roomData.image ? (
          <img
            src={roomData.image}
            alt=""
            className="w-[80%] p-3 rounded-[50%]"
          />
        ) : (
          <img
            src="DummyProfile.png"
            alt=""
            className="w-[80%] p-1 rounded-[50%]"
          />
        )}
      </div>}
      <div className="flex-[1] w-[100%]">
        <h1>{roomData.roomName}</h1>
      </div>
    </div>
  );
}

export default Room;
