import React, { useEffect ,useRef } from "react";
import RoomMessage from "./RoomMessage";
import useGetGlobalMessages from "../../hooks/getGlobalMessages";
import useListenGlobalMessage from "../../hooks/useLIstenGlobalMessage";


function RoomMessages() {
  
  const globalMsg = useGetGlobalMessages();
  const lastMessageRef = useRef()
  useListenGlobalMessage()
  useEffect(() => {
    if (lastMessageRef.current) {
      setTimeout(() => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [globalMsg]);
  return (
    <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
      <div className="min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide ">
        {globalMsg === undefined ? (
          <div></div>
        ) : (
          globalMsg.map((msg) => {
            return <div ref={lastMessageRef}><RoomMessage key={msg._id} message={msg} /></div>;
          })
        )}
      </div>
    </div>
  );
}

export default RoomMessages;
