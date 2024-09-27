import React, { useContext } from 'react'
import { RoomContext } from '../../context/roomContext'
import { AuthContext } from '../../context/authContent';
import useKickUser from '../../hooks/useKickUser';
import toast from 'react-hot-toast';

const LeaveRoom = ({setClicked})=> {
    const{roomSelected} = useContext(RoomContext);
    const {id} = useContext(AuthContext);
    const {kickUser} = useKickUser();
    console.log(roomSelected)
    const handleClick = async(e)=>{
        e.preventDefault();
        const data = {
            "roomId": roomSelected._id,
            "userId": id
        }
        await kickUser(data)
        toast.success("Leaved room Successfully")
        setClicked(false)
    }
  return (
    <div className="bg-gray-400 text-black p-5 pb-4 flex flex-col rounded-lg ">
      <div className="pb-3">
        <h1 className="text-xl font-semibold">{`Do you want to leave the room?`}</h1>
      </div>
      <div className="flex items-center justify-around m-2">
        <button
          onClick={handleClick}
          className="bg-gray-800 p-2 text-white rounded-lg w-[100px]"
        >
          Leave
        </button>
        <button
          onClick={() => setClicked(false)}
          className="bg-gray-800 p-2 text-white rounded-lg w-[100px]"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default LeaveRoom;