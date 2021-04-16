import React, { useContext, useState } from 'react'

const SideContext = React.createContext()
const UpdateSideContext = React.createContext()

export function useSide() {
  return useContext(SideContext)
}

export function useUpdateSide() {
  return useContext(UpdateSideContext)
}

export function SideProvider({ children }) {
  const [leftSide, setLeftSide] = useState(true)

  function toggleSide() {
    setLeftSide(prevLeftSide => !prevLeftSide)
  }

  return (
    <SideContext.Provider value={leftSide}>
      <UpdateSideContext.Provider value={toggleSide}>
        {children}
      </UpdateSideContext.Provider>
    </SideContext.Provider>
  )
}
