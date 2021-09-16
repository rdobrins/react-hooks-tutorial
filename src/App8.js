import React, { useContext } from 'react'
import { SideContext } from './SideContext'

const App8 = () => {
  const { leftSide, toggleSide } = useContext(SideContext)

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
