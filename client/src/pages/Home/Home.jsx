import React from "react";
import Sidebar from "../../components/sidebarIcons/Sidebar";
import ConversationContainer from "../../components/Conversation/ConversationContainer";
import MessageContainer from "../../components/messages/MessageContainer";
import { useContext } from "react";
import { ChatContext } from "../../context/chat";
import RoomContainer from "../../components/rooms/RoomContainer";
import RoomMessageContainer from "../../components/RoomMessage/RoomMessageContainer";
import UserProfiles from "../../components/profileList/UserProfiles";
import UserDetail from "../../components/profile/UserDetail";


function Home() {
  const { chatSelected } = useContext(ChatContext);
  
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      {chatSelected ? <ConversationContainer /> : <RoomContainer />}
      {chatSelected ? <MessageContainer /> : <RoomMessageContainer />}
      {chatSelected ? <UserDetail /> : <UserProfiles />}
    </div>
  );
}

export default Home;
