import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContent";
import CustomRoomMsgInput from "./CustomRoomMsgInput";
import CustomRoomMessages from "./CustomRoomMessages";
import { RoomContext } from "../../context/roomContext";
import { ImUserPlus } from "react-icons/im";
import AddUser from "../modals/addUSer.modal";
import { GiExitDoor } from "react-icons/gi";
import LeaveRoom from "../modals/leaveRoom.modal";


function CustomRoomMessageContainer() {
  const { roomSelected } = useContext(RoomContext);
  const [isClicked, setIsClicked] = useState(false);
  const [clicked,setClicked] = useState(false)
  const { username, id } = useContext(AuthContext);

  return (
    <div className="  flex flex-col bg-[#2a2a2e] w-[100%] ">
      {roomSelected ? (
        <div className="relative flex">
          <div className="flex items-center  bg-[#232327] w-full gap-1">
            <img
              src="DummyProfile.png"
              alt=""
              className="w-[6.1%] p-3 rounded-[50%]"
            />
            <div>
              <h1 className="text-white">{roomSelected.roomName}</h1>
            </div>
          </div>
          {roomSelected.admin === id ? (
            <div>
              <ImUserPlus
                className="text-white w-[30px] h-[30px] absolute right-[20px] top-[20px] hover:cursor-pointer hover:scale-110 "
                onClick={() => setIsClicked(prev=>!prev)}
              />
            </div>
          ) : (
            <div>
              <GiExitDoor
                className="text-white w-[30px] h-[30px] absolute right-[20px] top-[20px] hover:cursor-pointer hover:scale-110 " onClick={()=>setClicked(prev=>!prev)}
              />
            </div>
          )}
          <div className="absolute right-0 top-14 w-[250px] ">
            {isClicked && (
              <AddUser isClicked={isClicked} setIsClicked={setIsClicked} />
            )}
          </div>
          <div className="absolute right-0 top-14 w-[350px] ">
            {clicked && (
              <LeaveRoom  clicked={clicked} setClicked={setClicked} />
            )}
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

      {roomSelected ? <CustomRoomMessages /> : <div></div>}
      {roomSelected ? <CustomRoomMsgInput /> : <div></div>}
    </div>
  );
}

export default CustomRoomMessageContainer;
