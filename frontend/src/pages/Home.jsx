import React, { useContext, useEffect } from "react";
import { dataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { userData, setUserData, serverUrl } = useContext(dataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [userData, navigate]);

  const handleLogOut = async () => {
    try {
      await axios.post(
        serverUrl + "/api/logout",
        {},
        { withCredentials: true }
      );
      setUserData(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (!userData) return null;

  return (
    <div className="w-full h-screen bg-[#0ec3c3] flex flex-col items-center justify-center gap-5">
      <div className="w-24 h-24 rounded-full bg-white">
        <img
          src={userData.profileImage}
          alt="profile"
          className="w-full h-full rounded-full"
        />
      </div>

      <p className="text-white text-[25px]">
        Hey,{" "}
        <span className="text-amber-400 font-semibold">
          {userData.firstName}
        </span>{" "}
        Welcome to my website
      </p>

      <button
        onClick={handleLogOut}
        className="bg-[#456f75] text-white px-3 py-1.5 rounded-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
