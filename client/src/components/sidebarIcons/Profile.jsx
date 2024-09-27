import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContent'

function Profile() {
  const {profilePic,username} = useContext(AuthContext)
  
  return (
    <div className='flex flex-col items-center text-center'>
        <img src={profilePic} alt="" className='w-[60px] mt-2 rounded-[50%]'/>
        <h1 className='text-[12px] font-bold text-[#98d8ff] pt-3'>{username}</h1>
    </div>
  )
}

export default Profile