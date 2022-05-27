import React, { useState } from 'react'
import Layout from './shared/layout'
import CatsApp from './catsApp'
import { ContentWrapper } from './shared/styles'

const App18 = () => {
  const [darkMode, setDarkMode] = useState(false)

  return(
    <Layout
      setDarkMode={setDarkMode}
      darkMode={darkMode}
    >
      {() => {
        return(
          <ContentWrapper>
            <CatsApp darkMode={darkMode}/>
          </ContentWrapper>
        )
      }}
    </Layout>
  )
}

export default App18
