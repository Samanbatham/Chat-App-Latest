import React, { useContext } from "react";
import { GlobalRoomContext } from "../../context/globalRoomContext";
import ProfileList from "./ProfileList";
import CustomRoomProfileList from "./CustomRoomProfileList";
import { RoomContext } from "../../context/roomContext";
function UserProfiles() {
  const { room } = useContext(GlobalRoomContext);
  const { roomSelected } = useContext(RoomContext);
  return (
    <>
      {room ? <ProfileList /> : roomSelected ? <CustomRoomProfileList /> : null}
    </>
  );
}

export default UserProfiles;
