import React, { useContext } from 'react'
import { conversationContext } from '../../context/conversationContext'
import { useSocketContext } from '../../context/SocketContext';
function ProfileDetail() {
  const {conversations} = useContext(conversationContext);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversations._id);
  
  return (
    <div className='bg-[#161618] flex-[0.2] flex flex-col items-center justify-center'>
      <h1 className='text-white font-bold'>
        Profile Info
      </h1>
      {conversations.image ? <img src={conversations.image} alt="" className='w-[55%] p-1 rounded-[50%]' /> : <img src="DummyProfile.png" alt="" className='w-[73%]  rounded-[50%]'/>}
      <h2 className='text-white font-bold'>{conversations.username}</h2>
      {isOnline ? <h3 className='text-green-500 font-bold'>Active Now</h3> : <h3 className='text-red-600 font-bold'>Not Active</h3>}
    </div>
  )
}

export default ProfileDetail