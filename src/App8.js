import React from 'react'
import { useSide, useUpdateSide } from './SideContext'

const App8 = () => {
  const leftSide = useSide()
  const toggleSide = useUpdateSide()
  const floatSideStyle = {
    display: 'flex',
    justifyContent: leftSide ? 'flex-start' : 'flex-end',
    width: '100%'
  }
  const boxStyle = {
    height: '50px',
    width: '50px',
    backgroundColor: 'red'
  }

  return(
    <>
      <div style={floatSideStyle}>
        <div style={boxStyle}>
        </div>
      </div>
      <button onClick={toggleSide}>
        toggle
      </button>
    </>
  )
}

export default App8
