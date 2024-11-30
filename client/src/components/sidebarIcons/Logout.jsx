import React from "react";
import { MdLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  const logout = useLogout();

  const handleSubmit = (e) => {
    logout();
    navigate("/");
    localStorage.removeItem("user-data");
  };
  return (
    <div>
      <button onClick={handleSubmit}>
        <MdLogout className="w-[30px] h-[30px] text-white opacity-50 mb-5" />
      </button>
    </div>
  );
}

export default Logout;
