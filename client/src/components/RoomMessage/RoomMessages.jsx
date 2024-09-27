import React, { useContext, useEffect } from "react";
import RoomMessage from "./RoomMessage";
import useGetGlobalMessages from "../../hooks/getGlobalMessages";

function RoomMessages() {
  const globalMsg = useGetGlobalMessages();
  return (
    <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
      <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
        {globalMsg === undefined ? (
          <div></div>
        ) : (
          globalMsg.map((msg) => {
            return <RoomMessage key={msg._id} message={msg} />;
          })
        )}
      </div>
    </div>
  );
}

export default RoomMessages;
