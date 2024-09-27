import React from "react";
import useGetRoom from "../../hooks/useGetRoom";
import Room from "./room";

function Rooms() {
  const { rooms, loading } = useGetRoom();

  if (loading) {
    return <div>Loading...</div>;
  }

  const roomData = rooms?.data || [];

  return (
    <>
      {roomData.length > 0 ? (
        roomData.map((room) => (
          <Room key={room._id} roomData={room} />
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Rooms;
