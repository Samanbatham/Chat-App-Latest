import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context/roomContext";
import { DependencyContext } from "../../context/dependencyContext";
import useDeleteRoom from "../../hooks/useDeleteRoom";
const DeleteRoom = ({ setIsDeleteSelected, setIsSelected }) => {
  const { setRefCustomRoom } = useContext(DependencyContext);
  const { setRoomSelected } = useContext(RoomContext);
  const deleteRoom = useDeleteRoom();
  const handleClick = async () => {
    setIsDeleteSelected(false);
    await deleteRoom();
    setRefCustomRoom((prev) => !prev);
    setRoomSelected("");
    setIsSelected(false);
  };
  const handleCancel = () => {
    setIsDeleteSelected(false);
    setIsSelected(false);
  };
  return (
    <div className="bg-gray-400 text-black p-5 pb-4 flex flex-col rounded-lg ">
      <div className="pb-3">
        <h1 className="text-xl font-semibold">{`Do you want to delete the room?`}</h1>
      </div>
      <div className="flex items-center justify-around m-2 gap-2">
        <button
          onClick={handleClick}
          className="bg-gray-800 p-2 text-white rounded-lg w-[150px]"
        >
          Delete Room
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-800 p-2 text-white rounded-lg w-[150px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteRoom;
