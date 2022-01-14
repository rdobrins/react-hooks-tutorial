import React from 'react'
import ClassChild from './functionalChild'
import { ColorProvider } from './context'
import {
  app13WrapperStyle
} from './style'

const App13 = (props) => {
  return(
    <ColorProvider ryan={'ryan'}>
      <div style={app13WrapperStyle}>
        App13
        <ClassChild/>
      </div>
    </ColorProvider>
  )
}

export default App13
