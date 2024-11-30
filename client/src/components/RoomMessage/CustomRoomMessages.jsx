import React, { useContext, useEffect ,useRef } from "react";
import CustomRoomMessage from "./CustomRoomMessage";
import useGetCustomRoomMsg from "../../hooks/useGetCustomRoomMsg";
import useListenRoomMessage from "../../hooks/useListenRoomMessage";

function CustomRoomMessages() {
  const customMsg= useGetCustomRoomMsg();
  const updatedMsg = customMsg.messages
  useListenRoomMessage()
  const lastMessageRef = useRef()
  useEffect(() => {
    if (lastMessageRef.current) {
      setTimeout(() => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [customMsg]);
  return (
    <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
      <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
        {updatedMsg === undefined ? (
          <div></div>
        ) : (
          updatedMsg.map((msg) => {
            return <div ref={lastMessageRef}><CustomRoomMessage key={msg._id} message={msg} /></div>;
          })
        )}
      </div>
    </div>
  );
}

export default CustomRoomMessages;
