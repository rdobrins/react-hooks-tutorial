import React from 'react'
import ImagesList from './images'
import { ApiProvider } from './context'

const App15 = () => {
  return(
    <ApiProvider>
      <ImagesList/>
    </ApiProvider>
  )
}

export default App15
