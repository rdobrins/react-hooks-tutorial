import React, { useState, createContext } from 'react'

export const SideContext = createContext()

export const SideProvider = ({ children }) => {
  const [leftSide, setLeftSide] = useState(true)

  const toggleSide = () => {
    setLeftSide(!leftSide)
  }

  return (
    <SideContext.Provider value={{
      leftSide,
      toggleSide
    }}>
      {children}
    </SideContext.Provider>
  )
}
