import React, { useContext } from "react";
import { MdCancel } from "react-icons/md";
import useGetRoom from "../../hooks/useGetRoom";
import { conversationContext } from "../../context/conversationContext";
import useAddUser from "../../hooks/useAddUser";

const AddUserToRoom = ({ setClicked }) => {
  const { conversations } = useContext(conversationContext);
  const { rooms } = useGetRoom();
  const roomData = rooms.data;
  const {addUser} = useAddUser();

  const handleClick = async (conv) => {
    
    const data = {
      roomId:conv,
      userId:conversations._id
    }
    await addUser(data)
  };

  return (
    <div
      className="bg-gray-500 rounded-md z-1000 "
      onClick={() => setClicked(false)}
    >
      <div className="absolute left-[235px] top-[-10px]">
        <MdCancel
          className="text-gray-300 text-2xl hover:bg-gray-500 rounded-[50%] hover:scale-125"
          onClick={() => setClicked(false)}
        />
      </div>
      {roomData &&
        roomData.map((conv) => (
          <div
            key={conv._id}
            className="flex items-center justify-start p-[2px] "
          >
            <div
              className="text-white flex items-center justify-between w-[100%]  bg-[#202022] rounded-md hover:bg-[#3a3a3d] cursor-pointer  "
              onClick={()=>handleClick(conv._id)}
            >
              {conv.image ? (
                <div className="flex-[0.3] ">
                  <img
                    src={roomData.image}
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
                <h1>{conv.roomName}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AddUserToRoom;
