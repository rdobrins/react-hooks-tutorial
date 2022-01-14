import React, { useState, createContext } from 'react'

export const ColorContext = createContext()

export const ColorProvider = ({ children, ryan }) => {
  const [color, setColor] = useState('blue')

  return (
    <ColorContext.Provider value={{
      color,
      setColor
    }}>
      {children}
    </ColorContext.Provider>
  )
}
