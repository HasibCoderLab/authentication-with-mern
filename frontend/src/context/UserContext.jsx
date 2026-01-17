import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";


export const dataContext = createContext()
const UserContext = ({ children }) => {


  let [userData, setUserData] = useState({});
  const serverUrl = "http://localhost:8000";

  const getUserData = async () => {
    try {
      let { data } = await axios.get(serverUrl + "/api/getUserData",{
       withCredentials: true,
      });
      setUserData(data)
    } catch (error) {
      console.log(error);

    }
  }
  const value = {
    serverUrl, userData, setUserData,getUserData
  }

  useEffect(() => {
    getUserData()
  }, [])
  return (

    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>

  )
}

export default UserContext