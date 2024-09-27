import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import useCreateCustomRoom from "../../hooks/useCreateCustomRoom";
const RoomCreationModal = ({ setIsOpen }) => {
  const  createCustomRoom  = useCreateCustomRoom();
  const [roomName, setRoomName] = useState("");
  const handleClick = async(e)=>{
    e.preventDefault();
    setRoomName(e.target.value)
   await createCustomRoom({roomName});
   setIsOpen(false)
  }
  return (
    <>
      <div className="bg-gray-700 absolute w-[250px] h-[120px] left-[60px] rounded-md flex flex-col p-3  gap-3 z-10">
        <div className="">
          <input
            type="text"
            placeholder="Name Your Room"
            className="w-full p-2 rounded-md"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <div className="flex justify-evenly">
          <div>
            <button
              className="rounded bg-gray-200 p-2 w-[80px] hover:bg-gray-500"
             onClick={handleClick}
            >
              OK
            </button>
          </div>
          <div>
            <button
              className="rounded bg-gray-200 p-2 w-[80px] hover:bg-gray-500"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="absolute left-[235px] top-[-10px]">
          <MdCancel
            className="text-gray-300 text-2xl hover:bg-gray-500 rounded-[50%] hover:scale-125"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </>
  );
};
export default RoomCreationModal;
