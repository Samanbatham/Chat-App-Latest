import React, { useContext, useEffect } from "react";
import CustomRoomMessage from "./CustomRoomMessage";
import useGetCustomRoomMsg from "../../hooks/useGetCustomRoomMsg";

function CustomRoomMessages() {
  const customMsg= useGetCustomRoomMsg();
  const updatedMsg = customMsg.messages
  
 
  return (
    <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
      <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
        {updatedMsg === undefined ? (
          <div></div>
        ) : (
          updatedMsg.map((msg) => {
            return <CustomRoomMessage key={msg._id} message={msg} />;
          })
        )}
      </div>
    </div>
  );
}

export default CustomRoomMessages;
