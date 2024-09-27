import React from "react";
import Profile from "./Profile";
import SidebarIcons from "./sidebarIcons";
import Logout from "./Logout";
function Sidebar() {
  return (
    <div className=" h-[100vh] flex-[0.05] flex flex-col items-center justify-between bg-[#08080c]">
      <Profile />
      <SidebarIcons />
      <Logout />
    </div>
  );
}

export default Sidebar;
