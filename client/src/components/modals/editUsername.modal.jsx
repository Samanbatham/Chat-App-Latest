import React, { useState } from "react";
import useEditUsername from "../../hooks/useEditUsername";

const EditUsername = ({ setEditUsername, inputUserRef, setIsOpen }) => {
  const [editedUsername, setEditedUsername] = useState("");
  const editUsername = useEditUsername();

  const handleChange = async (e) => {
    e.preventDefault();
    setEditedUsername(e.target.value);
  };

  const handleCancel = () => {
    setEditUsername(false);
    setIsOpen(false);
  };
  
  const handleClick = async () => {
    console.log("clicked");
    const data = {
      username: editedUsername,
    };
    const response = await editUsername(data);
    if (response.success) setEditUsername(false);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-400 text-black p-5 pb-4 flex flex-col rounded-lg items-center">
      <div className="pb-3 gap-2 flex items-center flex-col">
        <h1 className="text-xl font-bold">Type new User name</h1>
        <input
          type="text"
          ref={inputUserRef}
          value={editedUsername}
          onChange={handleChange}
          className="p-1"
        />
      </div>
      <div className="flex items-center justify-around m-2 gap-2">
        <button
          className="bg-gray-800 p-2 text-white rounded-lg w-[150px]"
          onClick={handleClick}
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

export default EditUsername;
