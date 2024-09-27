import React, { useContext, useEffect } from 'react'
import Message from './message'
import useGetMessage from '../../hooks/getMessages'




function Messages() {
const message = useGetMessage()
const allMsg = message.messages;
  return (
    <div className='min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide '>
       
        {  allMsg === undefined ? (<div></div>)
         : (allMsg.map((allMsg)=>{
         return <Message key={allMsg._id} message={allMsg} />}
         ))
        }
        
    </div>
  )
}

export default Messages
