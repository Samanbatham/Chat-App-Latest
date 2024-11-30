import React, { useRef, useState,useEffect } from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";
import { useContext } from 'react';
import { ChatContext } from '../../context/chat';
import { GlobalRoomContext } from '../../context/globalRoomContext';
import { conversationContext } from '../../context/conversationContext';
import { BiSolidMessageAdd } from "react-icons/bi";
import RoomCreationModal from '../modals/roomCreation.modal';
import { RoomContext } from '../../context/roomContext';
function SidebarIcons() {
  const {setConversations} = useContext(conversationContext);
  const {chatSelected,setChatSelected} = useContext(ChatContext);
  const {setRoom} = useContext(GlobalRoomContext)
  const{setRoomSelected} = useContext(RoomContext)
  const inputRef = useRef();
  const[isOpen,setIsOpen] = useState(false);
  const handleClick = ()=>{
    setChatSelected(true);
    setRoomSelected("")
    setRoom(false);
  }
  const handleConv = ()=>{
    setConversations("")
    setChatSelected(false);
  }
  const addRoom = ()=>{
    setConversations("")
    setChatSelected(false);
    setIsOpen(true)
    inputRef.current.focus();
  }
  useEffect(() => {
    if (isOpen) {
        inputRef.current.focus();  // Focus the input when the modal opens
    }
}, [isOpen, inputRef]);
  return (
    <div >
      <IoChatbubbleEllipsesOutline className='w-[40px] h-[40px] text-gray-200 mb-6 opacity-50 hover:cursor-pointer hover:text-amber-500 ' onClick={handleClick} />
      <PiUsersThreeFill className='w-[40px] h-[40px] text-gray-200 opacity-50 mb-6 hover:cursor-pointer hover:text-amber-500' onClick={handleConv} />
      <BiSolidMessageAdd className='w-[40px] h-[40px] text-gray-200 opacity-50 hover:cursor-pointer hover:text-amber-500' onClick={addRoom} />
      {isOpen && <RoomCreationModal  isOpen={isOpen} setIsOpen={setIsOpen} inputRef={inputRef}/>}

    </div>
  )
}

export default SidebarIcons