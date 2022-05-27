import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const { children } = props

  const [darkMode, setDarkMode] = useState(false)

  return(
    <ThemeContext.Provider value={{
      darkMode,
      setDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
