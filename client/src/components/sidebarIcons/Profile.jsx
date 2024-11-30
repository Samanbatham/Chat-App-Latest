import React, { useState ,useEffect} from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContent";
import { IoIosArrowDown } from "react-icons/io";
import UserSetting from "../modals/UserSetting.modal";

function Profile() {
  const { profilePic, username } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="flex flex-col items-center text-center">
      <img src={profilePic} alt="" className="w-[60px] mt-2 rounded-[50%]" />
      <div className="flex items-center">
        <h1 className="text-[15px] font-bold text-[#98d8ff] ">{username}</h1>
        <IoIosArrowDown
          className="text-white text-2xl cursor-pointer translate-y-[2px]"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && (
        <div className="absolute top-[100px] left-[60px] z-10">
          <UserSetting isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}

export default Profile;
