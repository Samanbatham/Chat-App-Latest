import React, { useRef } from "react";
import { BsFillSendFill } from "react-icons/bs";
import useSendGlobalMessage from "../../hooks/getSendGlobalMessage";
import { useState } from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { RiEmojiStickerFill } from "react-icons/ri";

function RoomMsgInput() {
  const sendGlobalMessage = useSendGlobalMessage();
  const [message, setMessage] = useState("");
  const [emoji,setEmoji] = useState(false);
  
  const inputRef = useRef(null);
  const newMessage = {
    message,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendGlobalMessage(newMessage);
      setMessage("");
      setEmoji(false)
    }
  };
  
  const handleEmoji = (e)=>{
    e.preventDefault();
    setEmoji(!emoji)
    
    }
    const emojiSelect = (emoji) => {
      const { selectionStart, selectionEnd } = inputRef.current;
      const textBefore = message.substring(0, selectionStart);
      const textAfter = message.substring(selectionEnd);
      const newText = textBefore + emoji.native + textAfter;
      setMessage(newText);
      setTimeout(() => {  
        inputRef.current.setSelectionRange(
          selectionStart + emoji.native.length, 
          selectionStart + emoji.native.length
        );
        inputRef.current.focus(); 
      }, 0);
    };
  return (
    <form onSubmit={handleSubmit}>
      {emoji && <div className="absolute z-10 bottom-10">
        <Picker data={data} onEmojiSelect={emojiSelect} />
      </div>}
      <div className="relative">
        <input
          type="text"
          placeholder="Type a message...."
          className=" text-white w-full p-[7px] pl-[80px] rounded-sm bg-[#747475]"
          value={message}
          ref={inputRef}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          <BsFillSendFill className="absolute right-[10px] top-[30%] w-[20px] h-[20px] text-white cursor-pointer" />
          <button onClick={handleEmoji} ><RiEmojiStickerFill className="absolute left-[10px] top-[25%] w-[20px] h-[20px] text-white cursor-pointer" /></button>
        </button>
      </div>
    </form>
  );
}

export default RoomMsgInput;
