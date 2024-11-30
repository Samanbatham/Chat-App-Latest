import React from "react";
import useGetAllConversation from "../../hooks/getAllConversation";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { RoomContext } from "../../context/roomContext";
import useAddUser from "../../hooks/useAddUser";
import { DependencyContext } from "../../context/dependencyContext";
const AddUser = ({ setIsClicked }) => {
  const { setRefProfileList } = useContext(DependencyContext);
  const { conversation, loading } = useGetAllConversation();
  const { roomSelected } = useContext(RoomContext);
  const { addUser } = useAddUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleClick = async (conv) => {
    setIsClicked(false);

    const data = {
      roomId: roomSelected._id,
      userId: conv,
    };

    await addUser(data);
    setRefProfileList((prev) => !prev);
  };
  return (
    <div className="bg-gray-500 rounded-md">
      <div className="absolute left-[235px] top-[-10px]">
        <MdCancel
          className="text-gray-300 text-2xl hover:bg-gray-500 rounded-[50%] hover:scale-125"
          onClick={() => setIsClicked(false)}
        />
      </div>
      {conversation &&
        conversation.map((conv) => (
          <div
            key={conv._id}
            conv={conv}
            className="flex items-center justify-start p-[2px]   "
          >
            <div
              className="text-white flex items-center justify-between w-[100%]  bg-[#202022] rounded-md hover:bg-[#3a3a3d] cursor-pointer  "
              onClick={(e) => handleClick(conv._id)}
            >
              {conv.image ? (
                <div className="flex-[0.3] ">
                  <img
                    src={conv.image}
                    alt=""
                    className="w-[100%] p-2  rounded-[50%]"
                  />
                </div>
              ) : (
                <div className="flex-[0.3] pt-2">
                  <img
                    src="DummyProfile.png"
                    alt=""
                    className="w-[100%] p-1  rounded-[50%]"
                  />
                </div>
              )}
              <div className="flex-[1] translate-x-5 w-[100%]">
                <h1>{conv.username}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AddUser;
