import React from 'react'
import Conversation from './Conversation'
import useGetAllConversation from '../../hooks/getAllConversation.js';
function Conversations() {
  const {conversation,loading} = useGetAllConversation();
  
  if(loading){
    return <div>Loading...</div>;
  }
  if(!Array.isArray(conversation) || conversation.length === 0) {
    return <div>No conversations found</div>;
  }
  
  return (
    <div className='w-[100%] p-2 overflow-scroll overflow-x-hidden scrollbar-hide'>
    {conversation.map((conv) => (
      <Conversation key={conv._id || conv.id} conversation={conv} />
    ))}
  </div>
  )

    
 
}

export default Conversations

