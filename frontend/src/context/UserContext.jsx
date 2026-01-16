import React, { createContext } from 'react'

export const dataContext = createContext()
const UserContext = ({children}) => {
const serverUrl = "hppt://localhost:8000";
const value = {
    serverUrl
}

  return (

<dataContext.Provider value={value}>
        {children}
</dataContext.Provider>
   
  )
}

export default UserContext