import React, { useContext, useEffect ,useRef } from 'react'
import Message from './message'
import useGetMessage from '../../hooks/getMessages'
import useListenMessage from '../../hooks/useListenMessage'




function Messages() {
const message = useGetMessage()
useListenMessage()
const lastMessageRef = useRef()
useEffect(() => {
  if (lastMessageRef.current) {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}, [message]);
const allMsg = message?.messages || [];
  return (
    <div className='min-h-[88.5%] overflow-scroll overflow-x-hidden scrollbar-hide '>
       
        {  allMsg === undefined ? (<div></div>)
         : (allMsg.map((allMsg)=>{
         return <div ref={lastMessageRef}><Message key={allMsg._id}   message={allMsg} /></div>}
         ))
        }
        
    </div>
  )
}

export default Messages
