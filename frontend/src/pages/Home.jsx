import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const { userData, setUserData, serverUrl } = useContext(dataContext);
  let navigate = useNavigate();
  if (!userData) {
    navigate("/login")
  }

  const handleLogOut = async () => {
    try {
               
      let data = await axios.post(serverUrl + "/api/logout" , {}, { withCredentials: true });
      setUserData("");
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className=' w-full h-screen bg-[#0ec3c3] flex flex-col items-center justify-center gap-5'>

      <div className="w-24 h-24 rounded-full bg-white relative ">

        <img src={userData.profileImage} alt="database Picture" className="w-full h-full rounded-full " />



      </div>

      <p className='text-white text-[25px] '>
        Hey ,  <span className='text-amber-400 font-semibold'> {userData.firstName} </span> Welcome to my website

      </p>
      <button className="bg-[#456f75] text-white  px-2.5 py-1.5 rounded-lg cursor-pointer
                    " onClick={handleLogOut}
      >Log Out </button>
    </div>
  )
}

export default Home
