import React, { createContext } from 'react'
const dataContext = createContext()
const UserContext = ({children}) => {
  return (
    <div>
<dataContext.Provider>
        {children}
</dataContext.Provider>
    </div>
  )
}

export default UserContext