import { useRef, useState, useEffect, useContext } from "react";
import DeleteRoom from "./deleteRoom";
import { MdCancel } from "react-icons/md";
import EditRoomName from "./editRoomName.modal";
import useUploadRoomPic from "../../hooks/useUploadRoomPic";
import { DependencyContext } from "../../context/dependencyContext";
const RoomOptions = ({ setIsSelected }) => {
  const {setRefCustomRoom} = useContext(DependencyContext)
  const inputUploadRef = useRef(null);
  const [isDeleteSelected, setIsDeleteSelected] = useState(false);
  const [editRoomName, setEditRoomName] = useState(false);
  const inputRef = useRef(null);
  const uploadRoomPic = useUploadRoomPic();

  const handleClick = () => {
    if (inputUploadRef.current) {
      inputUploadRef.current.click();
    } else {
      console.log("inputUploadRef is null!");
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    await uploadRoomPic(formData)
    setIsSelected(false);
    setRefCustomRoom(prev=>!prev)
  };
  const handleDelete = () => {
    setIsDeleteSelected(true);
  };
  const handleEditRoom = () => {
    setEditRoomName(true);
    inputRef.current.focus();
  };
  useEffect(() => {
    if (editRoomName) {
      inputRef.current.focus();
    }
  }, [editRoomName, inputRef]);

  return (
    <div className="relative w-[180px] bg-gray-900">
      <div
        className="bg-gray-700 p-2 m-[1px] rounded-sm cursor-pointer hover:bg-gray-600"
        onClick={handleClick}
      >
        <h1 className="text-white">Edit Profile</h1>
        
          <input
            type="file"
            ref={inputUploadRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        
      </div>
      <div
        className="bg-gray-700 p-2 m-[1px] rounded-sm cursor-pointer hover:bg-gray-600 "
        onClick={handleEditRoom}
      >
        <h2 className="text-white">Edit RoomName</h2>
      </div>
      <div className="absolute left-[390px] top-[200px] ">
        {editRoomName && (
          <EditRoomName
            editRoomName={editRoomName}
            setEditRoomName={setEditRoomName}
            setIsSelected={setIsSelected}
            inputRef={inputRef}
          />
        )}
      </div>
      <div
        className="bg-gray-700 p-2 m-[1px] rounded-sm cursor-pointer hover:bg-gray-600 "
        onClick={handleDelete}
      >
        <h2 className="text-white">Delete Room</h2>
      </div>
      <div className="absolute left-[390px] top-[200px] ">
        {isDeleteSelected && (
          <DeleteRoom
            isDeleteSelected={isDeleteSelected}
            setIsDeleteSelected={setIsDeleteSelected}
            setIsSelected={setIsSelected}
          />
        )}
      </div>
      <div className="absolute left-[165px] top-[-10px]">
        <MdCancel
          className="text-gray-300 text-2xl hover:bg-gray-500 rounded-[50%] hover:scale-125"
          onClick={() => setIsSelected(false)}
        />
      </div>
    </div>
  );
};
export default RoomOptions;
