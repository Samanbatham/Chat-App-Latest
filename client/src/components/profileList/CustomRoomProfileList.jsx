import React, { useContext } from "react";
import useGetRoomData from "../../hooks/useGetRoomData";
import GlobalRoomProfileContainer from "./CustomRoomProfileContainer";

function CustomRoomProfileList({}) {
  const { roomData } = useGetRoomData();
  const data = roomData?.room;

  const participantsWithAdmin = data?.participants?.map((participant) => {
    return {
      ...participant,
      isAdmin: participant._id === data.admin,
    };
  });

  return (
    <div className="bg-[#161618] flex-[0.3]  flex flex-col ">
      <div className="bg-[#18181b] text-center">
        <h1 className="text-white text-xl font-bold p-[20px]">Users in Room</h1>
      </div>

      {participantsWithAdmin?.map((room) => {
        return <GlobalRoomProfileContainer room={room} key={room._id} />;
      })}
    </div>
  );
}

export default CustomRoomProfileList;
