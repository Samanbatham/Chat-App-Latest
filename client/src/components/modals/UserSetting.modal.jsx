import { useContext, useEffect, useRef, useState } from "react";
import useUploadProfilePic from "../../hooks/useUploadProfilePic";
import { MdCancel } from "react-icons/md";
import EditUsername from "./editUsername.modal";

const UserSetting = ({ setIsOpen }) => {
  const [editUsername, setEditUsername] = useState("");
  const inputFileRef = useRef(null);
  const inputUserRef = useRef(null);
  const uploadProfilePic = useUploadProfilePic();

  const handleClick = () => {
    inputFileRef.current?.click();
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    await uploadProfilePic(formData);
    setIsOpen(false);
  };
  const handleEditUsername = () => {
    setEditUsername(true);
    inputUserRef.current.focus();
  };
  useEffect(() => {
    if (editUsername) {
      inputUserRef.current.focus();
    }
  }, [editUsername, inputUserRef]);

  return (
    <div className="w-[180px] bg-gray-900 z-10">
      <div
        className="bg-gray-700 p-2 m-[1px] rounded-sm cursor-pointer hover:bg-gray-600"
        onClick={handleClick}
      >
        <h1 className="text-white">Edit Profile</h1>
        <input
          type="file"
          ref={inputFileRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div
        className="bg-gray-700 p-2 m-[1px] rounded-sm cursor-pointer hover:bg-gray-600 "
        onClick={handleEditUsername}
      >
        <h2 className="text-white">Edit Username</h2>
      </div>
      {editUsername && (
        <div className="absolute left-[390px] top-[200px] ">
          <EditUsername
            setEditUsername={setEditUsername}
            editUsername={editUsername}
            inputUserRef={inputUserRef}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
      <div className="absolute left-[165px] top-[-10px]">
        <MdCancel
          className="text-gray-300 text-2xl hover:bg-gray-500 rounded-[50%] hover:scale-125"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};
export default UserSetting;
