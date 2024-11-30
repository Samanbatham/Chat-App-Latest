import React, { useContext } from "react";
import { AuthContext } from "../../context/authContent";

function CustomRoomMessage({ message }) {
  const { id, profilePic } = useContext(AuthContext);
  
  const date = new Date(message.createdAt);
  const formattedDate = date.toLocaleTimeString();

  return (
    <div className="flex flex-col p-2 m-1 ">
      {message.senderId != id ? (
        <div className="flex gap-2 hover:bg-[#2f2f30] p-2 rounded-lg">
          {message.profilePic ? <div>
            <img
              src={message.profilePic}
              alt=""
              className="w-[50px] rounded-[50%]"
            />
          </div> : <img src="DummyProfile.png" alt="" className="w-[4%]" />}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-white text-[15px] opacity-50">
                {message.senderName}
              </h1>
              <h2 className="text-white text-[11px] opacity-50">
                {formattedDate}
              </h2>
            </div>
            <div>
              <p className="text-white">{message.message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-end  hover:bg-[#303034] p-2 rounded-lg">
          <div className="flex flex-col  pr-2">
            <div className="flex justify-end items-center gap-2">
              <h1 className="text-white text-[11px] opacity-50">
                {formattedDate}
              </h1>
              {/* <h2 className="text-white text-[15px] opacity-50">
                {message.senderName}
              </h2> */}
            </div>
            <div className="flex justify-end text-white">{message.message}</div>
          </div>
          {/* <div>
            <img src={profilePic} alt="" className="w-[50px] rounded-[50%]" />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default CustomRoomMessage;
