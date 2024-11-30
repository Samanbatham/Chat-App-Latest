import React, { useContext } from "react";
import useGetRoomData from "../../hooks/useGetRoomData";
import GlobalRoomProfileContainer from "./CustomRoomProfileContainer";
import GlobalRoomProfileContainerAdmin from "./CustomRoomProfileContainerAdmin";
import { AuthContext } from "../../context/authContent";

function CustomRoomProfileList({}) {
  const { roomData } = useGetRoomData();
  const { id } = useContext(AuthContext);
  const data = roomData?.room;
  
  const participantsWithAdmin = data?.participants?.map((participant) => {
    return {
      ...participant,
      isAdmin: participant._id === data.admin ? participant._id : false,
    };
  });

  return (
    <div className="bg-[#161618] flex-[0.3]  flex flex-col ">
      <div className="bg-[#18181b] text-center">
        <h1 className="text-white text-xl font-bold p-[20px]">Users in Room</h1>
      </div>
      {participantsWithAdmin?.map((room) => {
        if (id === data.admin) {
          return <GlobalRoomProfileContainer key={room._id} room={room} />;
        } else {
          return <GlobalRoomProfileContainerAdmin key={room._id} room={room} />;
        }
      })}
    </div>
  );
}

export default CustomRoomProfileList;
