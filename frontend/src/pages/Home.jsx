import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'


const Home = () => {
   const [userData, setUserData] =  useContext(dataContext);
  return (
    <div>
      {userData.firstName}
    </div>
  )
}

export default Home
