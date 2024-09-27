import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import useSendGlobalMessage from "../../hooks/getSendGlobalMessage";
import { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import GifPicker from 'gif-picker-react';
import { MdGif } from "react-icons/md";
import { RiEmojiStickerFill } from "react-icons/ri";

function RoomMsgInput() {
  const sendGlobalMessage = useSendGlobalMessage();
  const [message, setMessage] = useState("");
  const [emoji,setEmoji] = useState(false);
  const [gif,setGif] = useState(false)
  const data = {
    message,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendGlobalMessage(data);
    setMessage("");
  };
  const handleGif = (e)=>{
    e.preventDefault();
    setGif(!gif)
    setEmoji(false)
  }
  const handleEmoji = (e)=>{
    e.preventDefault();
    setEmoji(!emoji)
    setGif(false)
    }
  return (
    <form onSubmit={handleSubmit}>
      {emoji && <div className="absolute z-10 bottom-10">
        <EmojiPicker />
      </div>}
      {gif && <div className="absolute z-10  bottom-10">
      <GifPicker tenorApiKey={import.meta.env.VITE_TENOR_KEY} />
      </div>}
      <div className="relative">
        <input
          type="text"
          placeholder="Type a message...."
          className=" text-white w-full p-[7px] pl-[80px] rounded-sm bg-[#747475]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          <BsFillSendFill className="absolute right-[10px] top-[30%] w-[20px] h-[20px] text-white cursor-pointer" />
          <button onClick={handleEmoji} ><RiEmojiStickerFill className="absolute left-[10px] top-[25%] w-[20px] h-[20px] text-white cursor-pointer" /></button>
          <button onClick={handleGif} ><MdGif className="absolute left-[40px] top-[25%] w-[20px] h-[20px] text-white cursor-pointer" /></button>
        </button>
      </div>
    </form>
  );
}

export default RoomMsgInput;
