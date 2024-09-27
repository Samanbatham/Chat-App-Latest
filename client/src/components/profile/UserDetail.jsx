import React from 'react'
import ProfileDetail from './ProfileDetail'
import { useContext } from 'react';
import { conversationContext } from '../../context/conversationContext'
function UserDetail() {
    const {conversations} = useContext(conversationContext);
  return (
    <>
   {conversations &&  <ProfileDetail />}
    </>
  )
}

export default UserDetail