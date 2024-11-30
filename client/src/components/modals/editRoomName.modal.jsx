import React, { useContext, useRef, useState } from "react";
import useEditRoomName from "../../hooks/useEditRoomName";
import { RoomContext } from "../../context/roomContext";
import { DependencyContext } from "../../context/dependencyContext";
const EditRoomName = ({ setEditRoomName ,setIsSelected, inputRef }) => {
  const [editedName, setEditedRoomName] = useState("");
  const { roomSelected } = useContext(RoomContext);
  const { editRoomName } = useEditRoomName();
  const { setRefCustomRoom } = useContext(DependencyContext);

  const handleClick = async () => {
    setEditRoomName(false);
    setIsSelected(false);
    const data = {
      roomName: editedName,
      roomId: roomSelected._id,
    };
    await editRoomName(data);
    setRefCustomRoom((prev) => !prev);
  };
  const handleChange = async (e) => {
    e.preventDefault();
    setEditedRoomName(e.target.value);
  };
  const handleCancel = () => {
    console.log("hi")
    setEditRoomName(false);
    setIsSelected(false);
  };
  return (
    <div className="bg-gray-400 text-black p-5 pb-4 flex flex-col rounded-lg items-center">
      <div className="pb-3 gap-2 flex items-center flex-col">
        <h1 className="text-xl font-bold">Type new Room name</h1>
        <input
          type="text"
          ref={inputRef}
          value={editedName}
          onChange={handleChange}
          className="p-1"
        />
      </div>
      <div className="flex items-center justify-around m-2 gap-2">
        <button
          onClick={handleClick}
          className="bg-gray-800 p-2 text-white rounded-lg w-[150px]"
        >
          Save
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

export default EditRoomName;
