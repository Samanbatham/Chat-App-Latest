import React from 'react'

function SearchInput() {
  return (
    <div className='flex items-center justify-center pt-2 bg-[#101012] w-full p-[6px]'>
        
      <input type="text" placeholder='🔎| Search in your inbox' className='p-2 bg-[#232327] text-white mb-4 w-full text-center' />  
    </div>
  )
}

export default SearchInput 