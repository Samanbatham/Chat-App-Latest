import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

function ConversationContainer() {
  return (
    <div className='bg-[#131314] flex-[0.3] flex flex-col items-center  shadow-2xl '>
        <SearchInput />
        <Conversations />
    </div>
  )
}

export default ConversationContainer