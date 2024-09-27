import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context/roomContext";
import useKickUser from "../../hooks/useKickUser";
import toast from "react-hot-toast";
const KickUser = ({ setIsClicked, room }) => {
  const { roomSelected } = useContext(RoomContext);
  const { kickUser } = useKickUser();

  const handleClick = async () => {
    setIsClicked(false);
    const data = {
      userId: room._id,
      roomId: roomSelected._id,
    };
    await kickUser(data);
    toast.success("User kicked Successfully")
  };
  return (
    <div className="bg-gray-400 text-black p-5 pb-4 flex flex-col rounded-lg ">
      <div className="pb-3">
        <h1 className="text-xl font-semibold">{`Do you want to kick ${room.username} from room?`}</h1>
      </div>
      <div className="flex items-center justify-around m-2">
        <button
          onClick={handleClick}
          className="bg-gray-800 p-2 text-white rounded-lg w-[100px]"
        >
          Kick User
        </button>
        <button
          onClick={() => setIsClicked(false)}
          className="bg-gray-800 p-2 text-white rounded-lg w-[100px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default KickUser;
