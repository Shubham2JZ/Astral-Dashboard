import React from "react";
import logOut from "../../public/icons/logout.png";
import logOutWhite from "../../public/icons/logout-white.png";
import { useNavigate } from "react-router-dom";

const Logout = ({ white = false }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <button className="logout-btn">
      <img
        src={!white ? logOut : logOutWhite}
        alt="logOut"
        onClick={handleLogout}
      />
    </button>
  );
};

export default Logout;
