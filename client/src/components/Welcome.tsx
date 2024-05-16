import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/api/login");
  };
  return (
    <div>
      <div>Welcome, I have been waiting for you!! Yeyy</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
