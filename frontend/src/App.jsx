import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import { dataContext } from './context/UserContext'




const App = () => {
   const {userData, setUserData} =  useContext(dataContext);

  return (
    <Routes>
      {/* <Route path='/' element={<SignUp />}/> */}
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={ userData ?<Home /> : <Navigate to={"/login"} /> }/>


    </Routes>
  )
}

export default App