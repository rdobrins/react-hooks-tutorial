import React from 'react'
import App8 from './App8'
import { SideProvider } from './SideContext'

const App7 = (props) => {
  return(
    <SideProvider>
      <App8/>
    </SideProvider>
  )
}

export default App7
