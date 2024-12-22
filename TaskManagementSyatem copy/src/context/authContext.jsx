import { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

function ContextProvider({children}) {

  return (
    <>
    <AuthContext.Provider value={"Hello"}>
      {children}
    </AuthContext.Provider>
    </>
  )
}

export default ContextProvider
