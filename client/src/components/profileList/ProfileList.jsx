import React from "react";
import Profilecontainer from "./profilecontainer";
import useGetAllConversation from "../../hooks/getAllConversation";

function ProfileList() {
  const { conversation } = useGetAllConversation();

  return (
    <div className="bg-[#161618] flex-[0.3]  flex flex-col ">
      <div className="bg-[#18181b] text-center">
        <h1 className="text-white text-xl font-bold p-[20px]">
          Users in Room{" "}
        </h1>
      </div>
      {conversation.map((conv) => {
        return <Profilecontainer key={conv._id} conversation={conv} />;
      })}
    </div>
  );
}

export default ProfileList;
